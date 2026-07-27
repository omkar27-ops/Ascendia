import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "standard" | "cinematic" | "none";
}

export function Section({
  className,
  spacing = "standard",
  ...props
}: SectionProps) {
  const spacingClasses = {
    standard: "py-2xl",
    cinematic: "py-3xl",
    none: "py-0",
  };

  return (
    <section
      className={cn("w-full relative", spacingClasses[spacing], className)}
      {...props}
    />
  );
}
