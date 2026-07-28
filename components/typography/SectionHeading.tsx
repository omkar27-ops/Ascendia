import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3 md:gap-4", align === "center" && "items-center text-center", className)}>
      <Component className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
        {title}
      </Component>
      {subtitle && (
        <p className="text-secondary max-w-[var(--container-reading)] font-sans text-sm sm:text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
