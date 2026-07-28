import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
}

export function ServiceItem({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ServiceItemProps) {
  const Component = href ? "a" : "div";
  
  return (
    <Component
      href={href}
      className={cn(
        "group flex flex-col gap-3 sm:gap-4 rounded-[var(--radius-md)] border border-transparent p-4 sm:p-6 transition-all duration-[var(--duration-standard)] hover:border-[var(--color-border-subtle)] hover:bg-[var(--color-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure",
        className
      )}
    >
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[var(--color-bg-surface)] text-brand-azure transition-colors duration-[var(--duration-standard)] group-hover:bg-brand-azure group-hover:text-background">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5px]" />
      </div>
      
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h3 className="font-heading text-lg sm:text-xl font-medium text-primary">
          {title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-secondary">
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-auto flex items-center gap-2 pt-3 sm:pt-4 text-xs sm:text-sm font-medium text-primary opacity-0 transition-all duration-[var(--duration-standard)] group-hover:opacity-100 group-hover:text-brand-azure motion-reduce:opacity-100">
          Explore Service
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1 motion-reduce:transition-none" />
        </div>
      )}
    </Component>
  );
}
