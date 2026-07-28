import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/foundation/Button";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <div className={cn("relative w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] p-6 sm:p-8 md:p-16 lg:p-24", className)}>
      {/* Background with subtle glow */}
      <div className="absolute inset-0 bg-[var(--color-bg-surface)] backdrop-blur-[var(--blur-md)] pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] sm:h-full sm:w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-glow opacity-[var(--opacity-10)] blur-[var(--blur-xl)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center gap-6 md:gap-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary">
            {title}
          </h2>
          {description && (
            <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-secondary">
              {description}
            </p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2 sm:mt-4">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={primaryAction.onClick}
          >
            {primaryAction.label}
          </Button>
          
          {secondaryAction && (
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
