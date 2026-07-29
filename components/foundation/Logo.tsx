import * as React from "react";
import { cn } from "@/lib/utils";

export function AscendiaLogo({ className, ...props }: React.ComponentProps<"img">) {
  return (
    <img
      src="/Logo.png?v=3"
      alt="Ascendia Logo"
      className={cn("h-10 w-auto object-contain", className)}
      {...props}
    />
  );
}
