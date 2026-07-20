import { useEffect, useState } from "react";

export type GithubEvent = {
  message: string;
  repo: string;
  time: string;
};

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

// Fetches real recent public GitHub activity — no fabricated data.
// Falls back to a static, honest line if the API is unavailable.
export function useGithubActivity(username: string) {
  const [events, setEvents] = useState<GithubEvent[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${username}/events/public?per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("github api error");
        return res.json();
      })
      .then((data: unknown[]) => {
        if (cancelled) return;
        const parsed: GithubEvent[] = [];
        for (const raw of data as Record<string, unknown>[]) {
          const type = raw.type as string;
          const repo = (raw.repo as { name?: string })?.name?.split("/")[1] ?? "repo";
          const created = raw.created_at as string;
          let message: string | null = null;

          if (type === "PushEvent") {
            const commits = (raw.payload as { commits?: { message: string }[] })?.commits ?? [];
            if (commits.length > 0) message = commits[commits.length - 1].message.split("\n")[0];
          } else if (type === "CreateEvent") {
            const refType = (raw.payload as { ref_type?: string })?.ref_type;
            message = refType === "repository" ? "Created repository" : `Created ${refType}`;
          } else if (type === "PullRequestEvent") {
            message = "Opened a pull request";
          }

          if (message) {
            parsed.push({ message, repo, time: timeAgo(created) });
          }
          if (parsed.length >= 3) break;
        }
        if (parsed.length === 0) throw new Error("no parsable events");
        setEvents(parsed);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  return { events, failed };
}
