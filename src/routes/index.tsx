import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Workflow, Send, BellRing, Plug, Star } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import heroImg from "../assets/automation-hero.jpg";
import workflowImg from "../assets/chatbot-workflow.jpg";
import dripImg from "../assets/drip-campaign.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WhatsApp Automation Tool — Gallabox" },
      {
        name: "description",
        content:
          "Automate 50% of your customer conversations on WhatsApp with an AI-powered automation tool. Improve lead engagement, drive sales and reduce support tickets.",
      },
      { property: "og:title", content: "WhatsApp Automation Tool — Gallabox" },
      {
        property: "og:description",
        content:
          "Automate 50% of your customer conversations on WhatsApp with an AI-powered automation tool.",
      },
    ],
  }),
  component: AutomationPage,
});

const clients = ["Tata 1mg", "Thrillophilia", "Biotique", "Footprint", "Shiprocket", "Apollo"];

const features = [
  {
    icon: Workflow,
    title: "Build complex chatbot workflows in a few clicks",
    subtitle: "Create chatbot journeys that convert without a single line of code.",
    points: [
      "Execute responsive flows in minutes with our drag-and-drop builder",
      "Deploy use case and industry-specific templates with a single click",
      "Build a complete conversation flow with GenAI prompts and handoff rules",
    ],
    image: workflowImg,
  },
  {
    icon: Send,
    title: "Bring your drip marketing campaigns to WhatsApp",
    subtitle: "Automate WhatsApp sequences with 45% more engagement than emails.",
    points: [
      "Schedule drip messages spread over days to nurture prospects",
      "Segment users based on behavior and trigger relevant sequences",
      "Set up conditions to assign conversations to bots and humans",
    ],
    image: dripImg,
  },
];

const benefits = [
  {
    icon: BellRing,
    title: "Put your lead qualification on auto-pilot",
    text: "Qualify leads 24x7 and save your sales team from monotonous back-and-forth. Hand them warm, high-value prospects who are more likely to convert.",
  },
  {
    icon: Workflow,
    title: "Use agentic AI to automate conversion outcomes",
    text: "Deploy AI agents that reply, qualify and follow up across channels — running full-funnel automation that builds pipeline while you sleep.",
  },
  {
    icon: Plug,
    title: "Save hours of manual work while increasing ROI",
    text: "Connect your CRM, payments and calendar tools so every conversation updates your systems automatically — no copy-paste, no missed leads.",
  },
];

const steps = [
  {
    n: "1",
    title: "Connect your WhatsApp Business account",
    text: "Sign up for a Gallabox account and connect your WhatsApp Business number. Complete your business profile to start building customer trust.",
  },
  {
    n: "2",
    title: "Create your first automation",
    text: "Select from our library of proven chatbot and broadcast templates, customize the flows to match your brand, or build your own with our AI bot builder.",
  },
  {
    n: "3",
    title: "Launch and optimize",
    text: "Hit Publish once your conversation flow is ready. Test every flow before going live, then track performance and refine from real-time data.",
  },
];

const stats = [
  { value: "200M+", label: "Conversations powered" },
  { value: "40M+", label: "Chatbot-driven conversations" },
  { value: "20K+", label: "Global active users" },
];

function AutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-semibold text-primary">WhatsApp automation tool</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Automate 50% of your customer conversations on WhatsApp
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Improve lead engagement, drive sales and reduce support tickets with an AI-powered
            WhatsApp automation tool. Scale your business without increasing your headcount.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-pop transition-transform hover:-translate-y-0.5"
          >
            Start Free Trial <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/60 blur-2xl" />
          <img
            src={heroImg}
            width={1024}
            height={1024}
            alt="AI-powered WhatsApp automation conversation on a smartphone"
            className="w-full rounded-3xl shadow-pop"
          />
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground">
            TRUSTED BY 10,000+ BUSINESSES
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span key={c} className="text-lg font-bold text-foreground/40">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="mx-auto max-w-7xl space-y-24 px-5 py-24">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <f.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">{f.title}</h2>
              <p className="mt-3 text-lg font-medium text-muted-foreground">{f.subtitle}</p>
              <ul className="mt-6 space-y-4">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3 text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-whatsapp" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={f.image}
              width={1280}
              height={896}
              loading="lazy"
              alt={f.title}
              className="w-full rounded-2xl border border-border shadow-card"
            />
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
            Benefits of using our WhatsApp Business automation tool
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{b.title}</h3>
                <p className="mt-3 text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <h2 className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl">
          How to get started with our WhatsApp automation tool
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground">
          <div className="flex items-center justify-center gap-1 text-primary-foreground/80">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm">Highly rated by industry leaders</span>
          </div>
          <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-bold sm:text-4xl">
            Put your revenue goals on auto-pilot with our WhatsApp automation tool
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-6 py-3.5 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Get free trial <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-12 grid gap-8 border-t border-primary-foreground/20 pt-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
