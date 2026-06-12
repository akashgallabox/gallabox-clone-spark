import { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing — Gallabox",
  description:
    "Simple, transparent pricing for every team. Pick the Gallabox plan that matches your growth goal. Try free, no credit card required.",
  openGraph: {
    title: "Pricing — Gallabox",
    description: "Pick the Gallabox plan that matches your growth goal. Try free.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
