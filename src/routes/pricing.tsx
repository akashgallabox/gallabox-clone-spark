import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Gallabox" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for every team. Pick the Gallabox plan that matches your growth goal. Try free, no credit card required.",
      },
      { property: "og:title", content: "Pricing — Gallabox" },
      {
        property: "og:description",
        content: "Pick the Gallabox plan that matches your growth goal. Try free.",
      },
    ],
  }),
  component: PricingPage,
});

type Plan = {
  name: string;
  color: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  monthly: { quarterly: number | null; yearly: number | null };
  cta: string;
  features: string[];
  featuresHeading: string;
};

const plans: Plan[] = [
  {
    name: "Basic",
    color: "text-brand-basic",
    tagline:
      "For small teams getting started, capture and respond to inbound leads across WhatsApp, Instagram and web.",
    monthly: { quarterly: 120, yearly: 89 },
    cta: "Start for free",
    featuresHeading: "What's included",
    features: [
      "3 user accounts (hard cap)",
      "500 AI credits per month",
      "1 channel each (WhatsApp, Instagram, Web)",
      "Web AI agents",
      "Basic forms",
      "Catalog and Payments",
      "Chatbot flows",
      "20+ integrations; 48-hour support SLA",
    ],
  },
  {
    name: "Essential",
    color: "text-brand-essential",
    tagline:
      "For growing teams, use AI to qualify leads and automate follow-ups across channels to convert more leads.",
    badge: "Free onboarding Support",
    popular: true,
    monthly: { quarterly: 267, yearly: 197 },
    cta: "Start for free",
    featuresHeading: "Everything in Basic, plus:",
    features: [
      "6 user accounts",
      "2,000 AI credits per month",
      "AI agents on WhatsApp and Instagram",
      "Inbox AI copilot",
      "Team management",
      "Drip campaigns",
      "CAPI + Ads attribution",
      "Full API; bi-directional CRM integrations",
    ],
  },
  {
    name: "Advanced",
    color: "text-brand-advanced",
    tagline:
      "For revenue teams, personalize AI agents to run full-funnel automation to build pipeline and drive higher conversions.",
    badge: "Free onboarding Support",
    monthly: { quarterly: 507, yearly: 377 },
    cta: "Start for free",
    featuresHeading: "Everything in Essential, plus:",
    features: [
      "10 user accounts",
      "8,000 AI credits per month",
      "AI voice on WhatsApp and Phone",
      "Lead pipeline management",
      "Appointment booking management",
      "Dynamic forms",
      "Custom roles",
      "Number masking",
    ],
  },
  {
    name: "Enterprise",
    color: "text-brand-enterprise",
    tagline:
      "For large teams, deploy advanced AI agents with custom workflows, integrations and secure infrastructure with priority support.",
    badge: "AI Solutions Engineer Support",
    monthly: { quarterly: null, yearly: null },
    cta: "Talk to sales",
    featuresHeading: "What's included",
    features: [
      "Custom seats · custom AI credit pool · unlimited channels",
      "SSO / SAML · IP whitelist · custom RBAC",
      "Custom AI fine-tuning + tool development",
      "Dedicated CSM · uptime SLA · roadmap input",
      "On-prem / private cloud · data residency",
      "AI Solutions Engineer included as standard",
    ],
  },
];

const compareRows = [
  { label: "Users included", values: ["3 (hard cap)", "6", "10", "Custom"] },
  { label: "AI credits", values: ["500 / mo", "2,000 / mo", "8,000 / mo", "Custom pool"] },
  { label: "WhatsApp channel", values: [true, true, true, true] },
  { label: "Instagram channel", values: [false, true, true, true] },
  { label: "AI agents", values: [false, true, true, true] },
  { label: "Drip campaigns", values: [false, true, true, true] },
  { label: "AI voice", values: [false, false, true, true] },
  { label: "Lead pipeline", values: [false, false, true, true] },
  { label: "SSO / SAML", values: [false, false, false, true] },
  { label: "Dedicated CSM", values: [false, false, false, true] },
];

const embedSnippet = `<!-- Gallabox chat widget -->
<script>
  window.GallaboxWidget = {
    title: "Gallabox Assistant",
    primary: "#3a4ff5",
    whatsapp: "+919999999999"
  };
</script>
<script src="https://your-domain.com/chat-widget.js" async></script>`;

function PricingPage() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-40 gradient-bars opacity-70 [mask-image:linear-gradient(to_right,black,transparent)] md:block" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-40 gradient-bars opacity-70 [mask-image:linear-gradient(to_left,black,transparent)] md:block" />
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary">PRICING</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
            Reply in seconds. Qualify in minutes. Close in days.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every plan is built around a number that matters: faster speed-to-lead, higher
            qualification rates, or more pipeline generated. Pick the plan that matches your growth
            goal.
          </p>
        </div>
      </section>

      {/* Billing toggle */}
      <div className="flex flex-col items-center gap-4 px-5">
        <div className="inline-flex rounded-xl border border-border bg-secondary p-1">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-lg px-6 py-2 text-sm font-semibold transition-colors ${
              !yearly ? "bg-card text-foreground shadow-card" : "text-muted-foreground"
            }`}
          >
            Quarterly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`rounded-lg px-6 py-2 text-sm font-semibold transition-colors ${
              yearly ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly SAVE 25%
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Try Gallabox for free. No credit card required. Get 500 AI credits to test on real
          conversations.
        </p>
      </div>

      {/* Plan cards */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = yearly ? plan.monthly.yearly : plan.monthly.quarterly;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-7 shadow-card ${
                  plan.popular ? "border-primary ring-1 ring-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    MOST POPULAR
                  </span>
                )}
                {plan.badge && (
                  <span className="mb-3 inline-block w-fit rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground">
                    {plan.badge}
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
                <p className="mt-3 min-h-[72px] text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-4">
                  {price === null ? (
                    <p className={`text-3xl font-bold ${plan.color}`}>Let's talk</p>
                  ) : (
                    <p className="text-4xl font-bold text-foreground">
                      ${price}
                      <span className="ml-1 text-sm font-normal text-muted-foreground">/mo</span>
                    </p>
                  )}
                  <p className="mt-1 text-xs text-muted-foreground">
                    {price === null
                      ? "Multi-year contracts available"
                      : yearly
                        ? "per month, billed annually"
                        : "per month, billed quarterly"}
                  </p>
                </div>

                <a
                  href="#"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-foreground/20 text-foreground hover:border-foreground/40"
                  }`}
                >
                  {plan.cta} <ArrowUpRight className="h-4 w-4" />
                </a>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {plan.featuresHeading}
                </p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-whatsapp" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Compare features across plans
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60">
                <th className="p-4 text-left font-semibold text-foreground">Features</th>
                {plans.map((p) => (
                  <th key={p.name} className={`p-4 text-center font-bold ${p.color}`}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`border-b border-border ${idx % 2 ? "bg-secondary/30" : ""}`}
                >
                  <td className="p-4 font-medium text-foreground">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto h-5 w-5 text-whatsapp" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-foreground/90">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chat widget embed */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-secondary/40 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <Code2 className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold text-foreground">
              Add the chat widget to any website
            </h2>
            <p className="mt-3 text-muted-foreground">
              Drop this snippet before your closing <code>&lt;/body&gt;</code> tag to launch the
              Gallabox chat widget anywhere. The same widget is live on this site — look for the
              bubble in the bottom-right corner.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/90">
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-whatsapp" /> No dependencies, ~3KB script
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-whatsapp" /> Customizable colors, title and quick
                replies
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-whatsapp" /> Works on any HTML site
              </li>
            </ul>
          </div>
          <pre className="overflow-x-auto rounded-2xl bg-foreground p-5 text-xs leading-relaxed text-background">
            <code>{embedSnippet}</code>
          </pre>
        </div>
      </section>

      <Footer />
    </div>
  );
}
