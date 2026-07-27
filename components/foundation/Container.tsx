import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "reading" | "content" | "standard" | "wide" | "full";
}

export function Container({
  className,
  as: Component = "div",
  size = "standard",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    reading: "max-w-[var(--container-reading)]",
    content: "max-w-[var(--container-content)]",
    standard: "max-w-[var(--container-standard)]",
    wide: "max-w-[var(--container-wide)]",
    full: "max-w-[var(--container-full)]",
  };

  return (
    <Component
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeClasses[size], className)}
      {...props}
    />
  );
}
