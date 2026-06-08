import { Link } from "@tanstack/react-router";
import { Box } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Box className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="text-2xl font-bold tracking-tight text-foreground">gallabox</span>
    </Link>
  );
}
