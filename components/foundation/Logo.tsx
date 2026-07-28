import * as React from "react";
import { cn } from "@/lib/utils";

export function AscendiaLogo({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      src="/logo.svg"
      alt="Ascendia Logo"
      className={cn("h-8 w-auto object-contain", className)}
      {...props}
    />
  );
}
