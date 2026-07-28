import * as React from "react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  stepNumber: string | number;
  title: string;
  description: string;
  className?: string;
  isLast?: boolean;
}

export function ProcessStep({
  stepNumber,
  title,
  description,
  className,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className={cn("relative flex gap-4 sm:gap-6 md:gap-8", className)}>
      {/* Line connecting steps */}
      {!isLast && (
        <div className="absolute left-[19px] sm:left-[23px] md:left-[31px] top-12 sm:top-14 md:top-16 bottom-[-24px] w-[1px] bg-[var(--color-border-subtle)]" />
      )}
      
      {/* Step Indicator */}
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] font-heading text-base sm:text-lg md:text-xl font-medium text-brand-azure z-10">
        {stepNumber}
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3 pb-8 md:pb-12 pt-1 sm:pt-2 md:pt-4">
        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-medium text-primary">
          {title}
        </h3>
        <p className="max-w-xl font-sans text-sm sm:text-base leading-relaxed text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
