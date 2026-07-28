import * as React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  className?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  avatarSrc,
  className,
}: TestimonialProps) {
  return (
    <div className={cn("flex flex-col gap-6 rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] backdrop-blur-[var(--blur-md)] p-5 sm:p-6 md:p-8 transition-all duration-[var(--duration-standard)] hover:border-[var(--color-border-hover)]", className)}>
      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-brand-azure opacity-50" />
      
      <blockquote className="flex-1 font-sans text-sm sm:text-base leading-relaxed text-primary md:text-lg">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-[var(--color-border-subtle)]">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={author}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-[var(--color-border-subtle)]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 font-heading text-base sm:text-lg font-medium text-brand-azure">
            {author.charAt(0)}
          </div>
        )}
        
        <div className="flex flex-col">
          <cite className="font-sans text-xs sm:text-sm font-medium not-italic text-primary">
            {author}
          </cite>
          <span className="font-sans text-[10px] sm:text-xs text-secondary">
            {role}{company ? `, ${company}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
