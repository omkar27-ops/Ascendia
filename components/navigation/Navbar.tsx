import * as React from "react";
import { Container } from "@/components/foundation/Container";
import { Button } from "@/components/foundation/Button";
import { MobileMenu } from "./MobileMenu";
import { AscendiaLogo } from "@/components/foundation/Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-[var(--z-nav)] w-full border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] backdrop-blur-[var(--blur-md)] transition-all duration-[var(--duration-standard)]">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-md"
            aria-label="Ascendia Home"
          >
            <AscendiaLogo className="h-10 sm:h-12 w-auto transition-all duration-[var(--duration-slow)] rounded-sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium text-secondary hover:text-primary transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" size="sm">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navLinks={navLinks} />
        </div>
      </Container>
    </header>
  );
}
