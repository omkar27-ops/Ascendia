import * as React from "react";
import { Container } from "@/components/foundation/Container";
import { ArrowUpRight, Mail, Globe, Link } from "lucide-react";
import { AscendiaLogo } from "@/components/foundation/Logo";

const footerLinks = {
  services: [
    { label: "Digital Strategy", href: "#" },
    { label: "Creative Growth", href: "#" },
    { label: "Web Experiences", href: "#" },
    { label: "Brand Identity", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Mail, href: "#", label: "Email" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Link, href: "#", label: "Link" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] pt-16 pb-8 lg:pt-24 lg:pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-md w-fit" aria-label="Ascendia Home">
              <AscendiaLogo className="h-14 w-auto rounded-md" />
            </a>
            <p className="text-secondary max-w-sm font-sans leading-relaxed">
              Elevating brands through atmospheric design and cinematic digital experiences.
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center h-10 w-10 rounded-full border border-[var(--color-border-subtle)] text-secondary hover:text-primary hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-all duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-medium text-lg text-primary mb-4">Services</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-brand-azure transition-colors duration-[var(--duration-fast)] flex items-center gap-1 group text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-sm w-fit"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-[var(--duration-fast)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-medium text-lg text-primary mb-4">Company</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-brand-azure transition-colors duration-[var(--duration-fast)] flex items-center gap-1 group text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-sm w-fit"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-[var(--duration-fast)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-medium text-lg text-primary mb-4">Legal</h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors duration-[var(--duration-fast)] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-azure rounded-sm w-fit"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-border-subtle)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} Ascendia. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-brand-azure font-medium">Atmospheric Ascension</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
