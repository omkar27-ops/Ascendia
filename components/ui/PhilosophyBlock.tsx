import * as React from "react";
import { cn } from "@/lib/utils";

interface PhilosophyBlockProps {
  statement: string;
  author?: string;
  role?: string;
  className?: string;
}

export function PhilosophyBlock({
  statement,
  author,
  role,
  className,
}: PhilosophyBlockProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 sm:p-8 md:p-16", className)}>
      {/* Atmospheric Glow */}
      <div className="pointer-events-none absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-[var(--color-brand-azure)] opacity-20 blur-[var(--blur-xl)]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[60%] w-[60%] rounded-full bg-[var(--color-brand-ultra)] opacity-20 blur-[var(--blur-xl)]" />
      
      <div className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8">
        <h3 className="max-w-4xl font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-primary">
          "{statement}"
        </h3>
        
        {(author || role) && (
          <div className="flex flex-col items-center gap-1">
            {author && <span className="font-sans text-sm md:text-base font-medium text-primary">{author}</span>}
            {role && <span className="font-sans text-xs md:text-sm text-brand-azure">{role}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
