"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/foundation/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  navLinks: Array<{ label: string; href: string }>;
}

export function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-primary hover:text-brand-azure"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[var(--z-overlay)] bg-background/80 backdrop-blur-[var(--blur-xl)] transition-all duration-[var(--duration-standard)]",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[var(--z-modal)] w-full max-w-sm bg-surface border-l border-[var(--color-border-subtle)] p-6 transition-transform duration-[var(--duration-standard)] ease-[cubic-bezier(0.2,0.8,0.2,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-primary hover:text-brand-ultra"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-heading font-medium tracking-tight text-primary hover:text-brand-azure transition-colors duration-[var(--duration-fast)]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-[var(--color-border-subtle)]">
            <Button variant="primary" className="w-full">
              Start Project
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
