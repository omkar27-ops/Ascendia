import * as React from "react";
import { cn } from "@/lib/utils";

const typographyVariants = {
  h1: "font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary",
  h2: "font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary",
  h3: "font-heading text-2xl sm:text-3xl font-medium tracking-tight text-primary",
  h4: "font-heading text-xl sm:text-2xl font-medium text-primary",
  p: "font-sans text-base leading-relaxed text-secondary",
  lead: "font-sans text-lg sm:text-xl text-secondary leading-relaxed",
  small: "font-sans text-sm font-medium leading-none text-secondary",
  muted: "font-sans text-sm text-muted",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof typographyVariants;
  as?: React.ElementType;
}

export function Typography({
  className,
  variant = "p",
  as,
  ...props
}: TypographyProps) {
  const Component = as || (["h1", "h2", "h3", "h4", "p"].includes(variant) ? variant : "p") as React.ElementType;

  return (
    <Component
      className={cn(typographyVariants[variant], className)}
      {...props}
    />
  );
}
