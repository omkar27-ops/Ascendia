import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-sans font-medium transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40";
    
    const variants = {
      primary: "bg-primary text-background hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(96,165,250,0.25)]",
      secondary: "border border-interactive bg-transparent text-primary hover:bg-white/5 hover:-translate-y-0.5",
      ghost: "bg-transparent text-primary hover:bg-white/5",
    };
    
    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
