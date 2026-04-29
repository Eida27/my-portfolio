import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ExternalLink,
  Mail,
  MapPin,
  Play,
  Sparkles,
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
  comparisons,
  heroHighlights,
  navItems,
  packageOptions,
  portfolioSamples,
  processSteps,
  proofPoints,
  services,
  siteContent,
  type SocialLink,
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
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(110deg,oklch(0.82_0.15_195/0.18),transparent_32%,oklch(0.84_0.16_78/0.18)_72%,transparent)]"
        />
        <SiteHeader />
        <main>
          <HeroSection />
          <TrustStrip />
          <ServicesSection />
          <PortfolioSection />
          <BeforeAfterSection />
          <WorkflowSection />
          <PackagesSection />
          <ToolsAboutSection />
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
            {siteContent.role}
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
              Hire Me
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
    <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
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
            <Link href="#portfolio">
              {siteContent.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="#contact">
              {siteContent.secondaryCta}
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          <SignalItem icon={<MapPin className="size-4" />}>
            {siteContent.location}
          </SignalItem>
          <SignalItem icon={<CalendarDays className="size-4" />}>
            {siteContent.responsePromise}
          </SignalItem>
          <SignalItem icon={<Sparkles className="size-4" />}>
            {siteContent.supportLine}
          </SignalItem>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -z-10 translate-y-8 border border-signal/15 bg-signal/5 blur-2xl" />
        <HeroVisual />
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
      title="Editing and social media support clients can hire for."
      description="Each service is shaped around the work creators usually need most: clean edits, stronger post packaging, and easier publishing."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

function PortfolioSection() {
  return (
    <SectionShell
      id="portfolio"
      eyebrow="Portfolio"
      title="Sample work built around real client needs."
      description="These are honest sample/demo cases for v1. They show the kind of editing, optimization, and content support I can provide without inventing client results."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {portfolioSamples.map((sample, index) => (
          <Reveal key={sample.title} delay={index * 0.06}>
            <Card className="h-full border-white/10 bg-card/70">
              <CardContent className="flex h-full flex-col p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Badge className="border-ember/30 bg-ember/10 text-ember hover:bg-ember/15">
                    {sample.label}
                  </Badge>
                  <Play className="size-4 text-signal" />
                </div>
                <h3 className="text-xl font-semibold leading-tight">
                  {sample.title}
                </h3>
                <dl className="mt-5 grid gap-4 text-sm">
                  <PortfolioDetail label="Service" value={sample.service} />
                  <PortfolioDetail
                    label="Client type"
                    value={sample.clientType}
                  />
                  <PortfolioDetail label="Goal" value={sample.goal} />
                  <PortfolioDetail label="My role" value={sample.role} />
                  <PortfolioDetail label="Tools" value={sample.tools} />
                  <PortfolioDetail label="Result" value={sample.result} />
                </dl>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function PortfolioDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 leading-6 text-foreground/88">{value}</dd>
    </div>
  );
}

function BeforeAfterSection() {
  return (
    <SectionShell
      id="before-after"
      eyebrow="Before / After"
      title="Small packaging changes that make content clearer."
      description="Editing is only part of the job. Strong titles, captions, hashtags, and posting plans help each piece of content make sense faster."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {comparisons.map((comparison, index) => (
          <Reveal key={comparison.title} delay={index * 0.07}>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold">{comparison.title}</h3>
              <div className="mt-5 grid gap-3">
                <ComparisonBlock label="Before" value={comparison.before} />
                <ComparisonBlock label="After" value={comparison.after} strong />
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                {comparison.why}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ComparisonBlock({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-background/70 p-4">
      <p className="font-mono text-xs uppercase text-muted-foreground">
        {label}
      </p>
      <p
        className={
          strong
            ? "mt-2 text-sm font-medium leading-6 text-signal"
            : "mt-2 text-sm leading-6 text-muted-foreground"
        }
      >
        {value}
      </p>
    </div>
  );
}

function WorkflowSection() {
  return (
    <SectionShell
      id="workflow"
      eyebrow="Workflow"
      title="A clear process from raw footage to final post assets."
      description="The handoff stays simple so clients know what to send, when to review, and what they will receive."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.06}>
            <div className="relative h-full rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
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

function PackagesSection() {
  return (
    <SectionShell
      id="packages"
      eyebrow="Packages"
      title="Simple starting points for Upwork projects."
      description="Packages keep the first conversation concrete while still leaving room to adjust scope to the footage, platform, and schedule."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {packageOptions.map((option, index) => (
          <Reveal key={option.name} delay={index * 0.08}>
            <Card className="h-full border-white/10 bg-card/70">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold">{option.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {option.bestFor}
                </p>
                <Separator className="my-5 bg-white/10" />
                <ul className="grid gap-3">
                  {option.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                      <span>{item}</span>
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

function ToolsAboutSection() {
  return (
    <SectionShell
      id="tools"
      eyebrow="About"
      title="Clean editing, clear messaging, and practical content support."
      description={siteContent.about}
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {proofPoints.map((point) => (
              <Card key={point.title} className="border-white/10 bg-card/70">
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
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <p className="font-mono text-xs uppercase text-muted-foreground">
              Tools I can support
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-white/10 bg-background/60 px-3 py-2 text-sm text-muted-foreground transition hover:border-signal/30 hover:text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-md border border-signal/20 bg-signal/10 p-4">
              <p className="text-sm font-medium text-signal">
                Best fit: creators and small teams who need consistent help
                preparing content for multiple social platforms.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
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
              Hire Me on Upwork
            </Badge>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              Need help editing videos or managing social media content?
            </h2>
            <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground">
              {siteContent.contactIntro}
            </p>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Connect
              </p>
              <SocialLinks links={siteContent.socialLinks} className="mt-4" />
            </div>
            <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Good first projects
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                {heroHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <Check className="mt-0.5 size-4 text-ember" />
                    {highlight}
                  </li>
                ))}
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

function SocialLinks({
  links,
  className = "",
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${link.label} profile in a new tab`}
          className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-muted-foreground transition hover:border-signal/30 hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {link.label}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between">
        <p>
          {siteContent.name} | {siteContent.role}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            Hire Me on Upwork
            <ExternalLink className="size-3.5" />
          </Link>
          <span
            aria-hidden="true"
            className="hidden h-4 w-px bg-white/15 sm:block"
          />
          <SocialLinks links={siteContent.socialLinks} />
        </div>
      </div>
    </footer>
  );
}
