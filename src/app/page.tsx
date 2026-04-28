import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { HeroVisual } from "@/components/site/hero-visual";
import { MobileNav } from "@/components/site/mobile-nav";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  navItems,
  processSteps,
  proofPoints,
  services,
  siteContent,
  tools,
  trustSignals,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="relative min-h-screen overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(110deg,oklch(0.82_0.15_195/0.18),transparent_36%,oklch(0.84_0.16_78/0.16)_72%,transparent)]"
        />
        <SiteHeader />
        <main>
          <HeroSection />
          <TrustStrip />
          <ServicesSection />
          <ProcessSection />
          <ProofSection />
          <ToolsSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md border border-signal/35 bg-signal/10 font-mono text-sm font-semibold text-signal">
            JS
          </span>
          <span className="hidden text-sm font-medium text-foreground sm:block">
            {siteContent.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden gap-2 sm:flex">
            <Link href="#contact">
              <Mail className="size-4" />
              Contact
            </Link>
          </Button>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
      <div className="relative z-10">
        <Badge className="border-signal/30 bg-signal/10 text-signal hover:bg-signal/15">
          {siteContent.availability}
        </Badge>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
          {siteContent.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
          {siteContent.subheadline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="#contact">
              {siteContent.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="#services">{siteContent.secondaryCta}</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          <SignalItem icon={<MapPin className="size-4" />}>
            {siteContent.location}
          </SignalItem>
          <SignalItem icon={<CalendarDays className="size-4" />}>
            {siteContent.responsePromise}
          </SignalItem>
          <SignalItem icon={<BriefcaseBusiness className="size-4" />}>
            VA, admin, ops coordination
          </SignalItem>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 translate-y-8 border border-signal/15 bg-signal/5 blur-2xl" />
        <div className="relative">
          <Image
            src="/operations-command-center.svg"
            alt="Futuristic operations command center dashboard"
            width={1080}
            height={760}
            priority
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function SignalItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
      <span className="text-ember">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-5 sm:px-6 lg:px-8">
        {trustSignals.map((signal) => (
          <span
            key={signal}
            className="rounded-md border border-white/10 bg-background/60 px-3 py-2 text-sm text-muted-foreground"
          >
            {signal}
          </span>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="High-trust support for the work that must not slip."
      description="The focus is simple: remove operational drag, protect attention, and keep client-facing work polished."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <Card className="h-full border-white/10 bg-card/70">
              <CardContent className="p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-md border border-signal/25 bg-signal/10 text-signal">
                  <service.icon className="size-5" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.summary}
                </p>
                <Separator className="my-5 bg-white/10" />
                <ul className="grid gap-3">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Process"
      title="A lean working rhythm from first call to ongoing support."
      description="Clear ownership, concise updates, and practical systems keep the partnership low-friction."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.07}>
            <div className="relative h-full rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  0{index + 1}
                </span>
                <span className="flex size-10 items-center justify-center rounded-md border border-ember/25 bg-ember/10 text-ember">
                  <step.icon className="size-5" />
                </span>
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ProofSection() {
  return (
    <SectionShell
      id="proof"
      eyebrow="Outcomes"
      title="Proof without pretending: practical outcomes clients can feel."
      description="The promise stays grounded: no invented testimonials or inflated metrics, just the operating outcomes clients can expect."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {proofPoints.map((point, index) => (
          <Reveal key={point.title} delay={index * 0.08}>
            <Card className="h-full border-white/10 bg-card/70">
              <CardContent className="flex h-full gap-4 p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-signal/25 bg-signal/10 text-signal">
                  <point.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ToolsSection() {
  return (
    <SectionShell
      id="tools"
      eyebrow="Tool fluency"
      title="Comfortable across the systems modern teams already use."
      description="The stack stays practical: communication, docs, scheduling, project tracking, light automation, and client operations."
    >
      <Reveal>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-muted-foreground transition hover:border-signal/30 hover:text-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <div className="sticky top-24">
            <Badge className="border-ember/30 bg-ember/10 text-ember hover:bg-ember/15">
              Contact
            </Badge>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Bring the messy workflow. I will help make it usable.
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground">
              {siteContent.contactIntro}
            </p>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Good first projects
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-ember" />
                  Inbox and calendar reset
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-ember" />
                  Weekly admin and follow-up cadence
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-ember" />
                  Client ops tracker and SOP cleanup
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="border-white/10 bg-card/80">
            <CardContent className="p-5 sm:p-7">
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <Badge variant="outline" className="border-white/15 bg-white/[0.03]">
              {eyebrow}
            </Badge>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
              {description}
            </p>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteContent.name} | {siteContent.role}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="#contact" className="inline-flex items-center gap-1 hover:text-foreground">
            Start a project
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
