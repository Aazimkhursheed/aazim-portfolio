import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none active:scale-[0.98]";

const variants = {
  primary: "bg-text-primary text-bg-base hover:bg-white",
  outline:
    "border border-border-default text-text-primary hover:border-text-secondary hover:bg-bg-raised",
  ghost: "text-text-secondary hover:text-text-primary",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  )
);
Button.displayName = "Button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
};

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], className)} {...props} />
  )
);
LinkButton.displayName = "LinkButton";
