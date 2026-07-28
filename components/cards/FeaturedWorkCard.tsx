import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface FeaturedWorkCardProps {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  className?: string;
}

export function FeaturedWorkCard({
  title,
  category,
  imageSrc,
  imageAlt,
  href,
  className,
}: FeaturedWorkCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] backdrop-blur-[var(--blur-lg)] transition-all duration-[var(--duration-slow)] hover:border-[var(--color-border-hover)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure",
        className
      )}
    >
      {/* Image Container with Cinematic Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-bg-primary)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-[var(--duration-cinematic)] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
          loading="lazy"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/90 via-[var(--color-bg-primary)]/20 to-transparent opacity-80 transition-opacity duration-[var(--duration-standard)] group-hover:opacity-60" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-[10px] sm:text-xs font-sans font-medium uppercase tracking-wider text-brand-azure">
            {category}
          </span>
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-primary">
            {title}
          </h3>
        </div>
        
        {/* Animated Icon */}
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] backdrop-blur-[var(--blur-md)] transition-all duration-[var(--duration-standard)] group-hover:bg-brand-azure group-hover:border-transparent group-hover:text-background">
          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-[var(--duration-standard)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </div>
      </div>
    </a>
  );
}
