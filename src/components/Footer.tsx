"use client";

import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: ["WhatsApp Automation", "Chatbot Builder", "Team Inbox", "Broadcast", "AI Agents"],
  },
  {
    title: "Solutions",
    links: ["E-commerce", "Real Estate", "Healthcare", "Education", "Finance"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Help Center", "API Docs", "WhatsApp Pricing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Partners", "Privacy Policy"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The AI-powered WhatsApp Business platform to automate conversations, qualify leads and
              grow revenue.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Gallabox clone. For demo purposes only.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary">
              Automation
            </Link>
            <Link href="/pricing" className="hover:text-primary">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
