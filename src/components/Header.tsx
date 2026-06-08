import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = ["Product", "Solutions", "Integration", "Knowledge hub", "Partners"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item}
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/pricing"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Pricing
          </Link>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground">
            Login
          </a>
          <a
            href="#"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Start free trial
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <span key={item} className="text-sm font-medium text-foreground/80">
                {item}
              </span>
            ))}
            <Link to="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
            <a
              href="#"
              className="mt-2 rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Start free trial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
