// Single source of truth for all portfolio content.
// Every fact here is drawn directly from what Aazim provided — nothing invented.

export const profile = {
  name: "Aazim Khursheed",
  role: "Full Stack Developer",
  headline: "MERN Stack · Real-Time Systems · AI-Integrated Applications",
  location: "Baramulla, Jammu & Kashmir, India",
  currentBase: "Indore, India",
  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Prestige Institute of Engineering Management and Research, Indore",
    affiliation: "RGPV University",
    years: "2023–2027",
  },
  email: "aazimkhursheed4@gmail.com",
  now: "Currently sharpening system design and DSA for backend / full-stack SE roles.",
  links: {
    github: "https://github.com/AazimKhursheed",
    linkedin: "https://www.linkedin.com/in/aazim-khursheed-203304294",
    leetcode: "https://leetcode.com/u/Aazimkhursheed/",
    resume: "https://drive.google.com/file/d/1l9Vmd16mWqk5z3ivyh35D15InsKPtqXO/view",
  },
};

export const about = {
  paragraph:
    "I build backend-heavy web applications — REST APIs, real-time systems, and AI-integrated features — using the MERN stack as my primary toolkit. I'd rather ship a well-structured Express API or get WebRTC peer connections working reliably than polish a landing-page animation. Most of what I've built recently involves authentication flows, Socket.io-driven real-time features, and integrating machine learning or LLM services into a standard web app architecture.",
};

export const experience = [
  {
    company: "Zidio Development",
    role: "Web Developer Intern",
    period: "Jun 2026 — Present",
    weight: "primary" as const,
    summary:
      "Working on IntellMeet, a real-time meeting platform. Contributing to authentication flows, REST API design, and real-time features, alongside debugging, API integration, and documentation inside an Agile workflow.",
    contributions: [
      "Built and integrated authentication flows and REST APIs for IntellMeet",
      "Contributed to real-time features using Socket.io and WebRTC",
      "Debugging and API integration across the existing codebase",
      "Participated in Agile development with Git-based code review and technical documentation",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "WebRTC"],
  },
  {
    company: "InAmigos Foundation",
    role: "Web Development Intern",
    period: "May — Jun 2026",
    weight: "primary" as const,
    summary:
      "Web development for AI-assisted applications, focusing on building components and improving user experience within an Agile team.",
    contributions: [
      "Developed React components and improved overall UI responsiveness",
      "Resolved web development issues and debugged core application features",
      "Maintained technical documentation in a cross-functional Agile workflow",
    ],
    tech: ["React", "JavaScript", "Git", "REST APIs", "UI Development", "Agile"],
  },
];

export const skills = {
  Languages: ["JavaScript", "Python", "SQL"],
  Frontend: ["React.js", "React Router", "Tailwind CSS", "Material UI", "HTML", "CSS", "Vite"],
  Backend: ["Node.js", "Express.js", "REST APIs", "FastAPI", "Flask"],
  Auth: ["JWT", "Passport.js", "Firebase Authentication", "bcrypt", "Google OAuth"],
  Databases: ["MongoDB", "Mongoose", "MySQL", "Firebase Firestore"],
  "Real-Time": ["Socket.io", "WebRTC", "Agora RTC", "Agora RTM"],
  AI: ["Scikit-learn", "PyTorch", "Speech Recognition API"],
  Tooling: ["Git", "GitHub", "Postman", "Docker (Basics)", "Render", "Vercel", "Cloudinary", "Firebase"],
};

export type FeaturedProject = {
  index: string;
  name: string;
  accent: "green" | "cyan" | "blue";
  github: string;
  live: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: { steps: string[]; note: string };
  features: string[];
  buildLog: string[];
  tradeoff: string;
  tech: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    index: "01",
    name: "SmartAgri AI",
    accent: "green",
    github: "https://github.com/Aazimkhursheed/SmartAgri-AI",
    live: "https://smart-agri-ai-theta.vercel.app/",
    overview:
      "An AI-powered agriculture platform providing crop recommendation, fertilizer recommendation, and disease detection, with multilingual and voice interaction for accessibility.",
    problem:
      "Farmers often lack easy, localized access to agronomic guidance — crop and fertilizer choices, and early detection of crop disease — especially across language barriers.",
    solution:
      "A React frontend talks to a FastAPI backend that serves crop recommendation, fertilizer recommendation, and disease detection models, with multilingual support and voice interaction layered on top for accessibility.",
    architecture: {
      steps: [
        "React client — form input, image upload, voice interaction UI",
        "FastAPI backend — request handling, model inference orchestration",
        "ML models — crop / fertilizer recommendation, disease detection",
        "Multilingual + voice layer — accessible response delivery",
      ],
      note:
        "Inference runs server-side through FastAPI rather than in the browser — this keeps model size and compute off the client, at the cost of a network round-trip for every prediction.",
    },
    features: [
      "Crop Recommendation",
      "Fertilizer Recommendation",
      "Disease Detection",
      "Multilingual Voice Interaction",
    ],
    buildLog: [
      "Structured the FastAPI backend to serve three separate model endpoints (crop, fertilizer, disease) behind a single API surface for the React frontend to consume.",
      "Added multilingual and voice interaction so recommendations are accessible beyond a purely text/English interface.",
    ],
    tradeoff:
      "Server-side inference simplifies the client but adds latency per request — a future version could explore caching common recommendation queries.",
    tech: ["React", "FastAPI", "Python", "Scikit-learn", "PyTorch", "Speech Recognition API"],
  },
  {
    index: "02",
    name: "OmniMind",
    accent: "cyan",
    github: "https://github.com/Aazimkhursheed/OmniMind",
    live: "https://omni-mind-nine.vercel.app/",
    overview:
      "A MERN-based AI chatbot platform supporting authentication, multiple conversations, and persistent history behind a scalable REST API backend.",
    problem:
      "Chat-style AI interfaces need to persist multiple, separate conversations per authenticated user without losing context or mixing sessions.",
    solution:
      "A standard MERN architecture — Express REST APIs, JWT-secured routes, and MongoDB for persistence — models each conversation as its own document so a user can hold several ongoing chat threads at once.",
    architecture: {
      steps: [
        "JWT authentication layer — secures all API routes per user",
        "Express REST API — conversation and message endpoints",
        "MongoDB — persists conversations and message history per user",
        "LLM integration layer — handles the chat completion calls",
      ],
      note:
        "Conversation history is stored per-thread in MongoDB and passed back into the LLM call, so context has to be assembled per request rather than kept in server memory.",
    },
    features: [
      "JWT Authentication",
      "Multiple Conversations",
      "Persistent Chat History",
      "Scalable REST API Backend",
    ],
    buildLog: [
      "Modeled conversations and messages as separate MongoDB collections so a user can maintain multiple concurrent chat threads.",
      "Secured all conversation and message routes behind JWT authentication middleware.",
    ],
    tradeoff:
      "Assembling conversation context per request is simple but doesn't scale indefinitely — very long conversations would need a windowing or summarization strategy.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    index: "03",
    name: "Jab We Met",
    accent: "blue",
    github: "https://github.com/AazimKhursheed",
    live: "https://intell-meet0-2.vercel.app/",
    overview:
      "A real-time video conferencing platform built with WebRTC and Socket.io, supporting peer-to-peer video, screen sharing, in-call chat, and meeting history.",
    problem:
      "Peer-to-peer video calls need a way for participants to discover and connect to each other before a direct connection exists, and to keep working through network changes like starting or stopping screen share.",
    solution:
      "Socket.io acts as the signaling channel — exchanging offers, answers, and ICE candidates — so WebRTC peers can establish a direct connection once signaling completes; Express and MongoDB handle auth and meeting history.",
    architecture: {
      steps: [
        "Socket.io signaling server — relays offer / answer / ICE candidates",
        "WebRTC peer connection — established directly between clients once signaling completes",
        "Express + JWT — authentication and session handling",
        "MongoDB — meeting history persistence",
      ],
      note:
        "The signaling server only relays connection setup messages — video/audio never passes through it. It exists because peers can't discover each other's network address (ICE candidates) without an intermediary.",
    },
    features: [
      "Peer-to-Peer Video",
      "Screen Sharing",
      "Real-Time Chat",
      "Meeting History",
      "JWT Authentication",
    ],
    buildLog: [
      "Implemented the Socket.io signaling flow for offer/answer/ICE candidate exchange between peers.",
      "Added screen sharing alongside the existing camera video track within the same peer connection.",
      "Persisted meeting history to MongoDB so users can see past sessions.",
    ],
    tradeoff:
      "Screen-share currently works within the existing connection setup; a group-call version beyond a small number of peers would need to move off pure mesh P2P toward an SFU.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "WebRTC"],
  },
];

export type AdditionalProject = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const additionalProjects: AdditionalProject[] = [
  {
    name: "IntellMeet",
    description: "Real-time meeting platform built during the Zidio Development internship.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    live: "https://intell-meet0-2.vercel.app/",
  },
  {
    name: "Wanderlust",
    description: "Property listing platform with full CRUD and user-submitted listings.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Aazimkhursheed/wanderlust",
  },
  {
    name: "Daily Expense Detector",
    description: "Application for tracking and categorizing daily personal expenses.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/Aazimkhursheed/daily-expenses-detector",
  },
  {
    name: "UpTrade",
    description: "A trading-related web application.",
    tech: ["React", "Node.js"],
    github: "https://github.com/Aazimkhursheed/UpTrade",
  },
];

export const certifications = [
  "Delta Full Stack Development",
  "Alpha DSA (Java)",
  "Python for Data Science",
  "Building Blocks of Application Development with C++",
  "Full Stack Development with Flask",
  "Introduction to Data Science",
  "C++ Fundamentals",
  "Time Management",
  "Web Development Internship (InAmigos)",
];
