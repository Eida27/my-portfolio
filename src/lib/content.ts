import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileCheck2,
  Headphones,
  Inbox,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  summary: string;
  outcomes: string[];
};

export const siteContent = {
  name: "Joshua Sumanghid",
  role: "Freelance Virtual Assistant",
  location: "Philippines-based, serving global clients",
  availability: "Open for select client partnerships",
  headline: "A calmer operating system for busy founders and lean teams.",
  subheadline:
    "I help clients turn scattered inboxes, calendars, follow-ups, files, and admin details into a reliable daily workflow that feels clear, current, and easy to trust.",
  primaryCta: "Start a project",
  secondaryCta: "See services",
  responsePromise: "Replies within 1 business day",
  contactIntro:
    "Share what is slowing you down. I will reply with the next best step, the information I need, and where I can take ownership.",
  socialLinks: [] as { label: string; href: string }[],
};

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export const trustSignals = [
  "Inbox discipline",
  "Calendar protection",
  "SOP-ready workflows",
  "Client-first communication",
  "Async-friendly execution",
];

export const services: Service[] = [
  {
    icon: Inbox,
    title: "Executive admin support",
    summary:
      "Inbox triage, calendar coordination, document preparation, reminders, and the daily details that keep clients moving.",
    outcomes: [
      "Clear priorities before the day starts",
      "Cleaner handoffs and fewer missed details",
      "Consistent follow-through without chasing",
    ],
  },
  {
    icon: Workflow,
    title: "Operations coordination",
    summary:
      "Lightweight systems for recurring tasks, client updates, project trackers, SOPs, and repeatable admin workflows.",
    outcomes: [
      "Visible work queues and owners",
      "Repeatable processes instead of memory work",
      "Less friction across tools and teammates",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Client communication",
    summary:
      "Professional follow-ups, meeting notes, lead tracking, response drafting, and organized communication loops.",
    outcomes: [
      "Faster, more polished responses",
      "Better lead and client continuity",
      "More time for high-value client work",
    ],
  },
];

export const processSteps = [
  {
    icon: Headphones,
    title: "Listen and map",
    description:
      "We identify what feels heavy, where information lives, and which admin loops need the most relief first.",
  },
  {
    icon: LayoutDashboard,
    title: "Stabilize the system",
    description:
      "I create simple operating rhythms for inboxes, calendars, trackers, and handoffs so work is visible and current.",
  },
  {
    icon: ClipboardList,
    title: "Execute with receipts",
    description:
      "You get concise updates, clean documentation, and dependable follow-through without extra management overhead.",
  },
  {
    icon: Sparkles,
    title: "Refine the cadence",
    description:
      "We improve the workflow as patterns appear, keeping the setup lean instead of adding unnecessary complexity.",
  },
];

export const proofPoints = [
  {
    icon: Clock3,
    title: "Hours returned",
    description:
      "Routine admin, scheduling, and follow-up loops move out of your head and into a maintained rhythm.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer dropped threads",
    description:
      "Priority messages, action items, and next steps are tracked clearly so important details stay visible.",
  },
  {
    icon: FileCheck2,
    title: "Cleaner operations",
    description:
      "Documents, SOPs, trackers, and client notes are organized so the work can scale beyond memory.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable client experience",
    description:
      "Every interaction gets a calmer, more professional layer of coordination behind it.",
  },
];

export const tools = [
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Notion",
  "ClickUp",
  "Asana",
  "Trello",
  "Airtable",
  "Canva",
  "HubSpot",
  "Calendly",
  "Zapier",
  "Loom",
  "ChatGPT",
];

export const serviceOptions = [
  "Executive admin support",
  "Operations coordination",
  "Client communication",
  "Inbox and calendar reset",
  "Ongoing VA partnership",
  "Not sure yet",
];

export const timelineOptions = [
  "This week",
  "Within 2 weeks",
  "This month",
  "Flexible",
];

export const consoleRows = [
  { label: "Inbox queue", value: "Triage in progress", tone: "signal" },
  { label: "Calendar shield", value: "3 conflicts prevented", tone: "ember" },
  { label: "SOP pipeline", value: "6 workflows mapped", tone: "signal" },
  { label: "Client follow-ups", value: "Next actions ready", tone: "ember" },
];
