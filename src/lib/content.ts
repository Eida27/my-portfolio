import {
  Captions,
  Clapperboard,
  Clock3,
  Eye,
  FileText,
  Gauge,
  Hash,
  Layers3,
  LucideIcon,
  PackageCheck,
  RefreshCcw,
  Scissors,
  SearchCheck,
  Send,
  Share2,
  SlidersHorizontal,
  Sparkles,
  UploadCloud,
  WandSparkles,
} from "lucide-react";

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

export type PortfolioSample = {
  title: string;
  label: string;
  service: string;
  clientType: string;
  goal: string;
  role: string;
  tools: string;
  result: string;
};

export type Comparison = {
  title: string;
  before: string;
  after: string;
  why: string;
};

export type PackageOption = {
  name: string;
  bestFor: string;
  includes: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteContent = {
  name: "Joshua Sumanghid",
  role: "Video Editor & Social Media SEO Assistant",
  location: "Philippines-based, serving creators and brands worldwide",
  availability: "Open for Upwork video and social content projects",
  headline: "Video Editor & Social Media SEO Assistant for Creators and Brands",
  subheadline:
    "I help creators, brands, and small businesses turn raw footage into engaging short-form and long-form videos, then optimize each post with stronger titles, captions, keywords, and hashtags.",
  primaryCta: "View My Work",
  secondaryCta: "Hire Me on Upwork",
  responsePromise: "Replies within 1 business day",
  supportLine: "Shorts, Reels, TikTok, YouTube, Facebook, and upload prep",
  contactIntro:
    "Need help editing videos or preparing social media posts? Share the footage type, platform, editing style, and timeline. I will reply with the next best step and what I need to begin.",
  about:
    "Hi, I'm Joshua. I help creators and small businesses save time by editing videos and preparing social media content for posting. My focus is clean pacing, clear messaging, searchable titles, and relevant hashtags that match the content.",
  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/share/14ieRUJA2yu" },
    { label: "Instagram", href: "https://www.instagram.com/eida_manhwa1018" },
    { label: "TikTok", href: "https://www.tiktok.com/@eida_1018" },
    { label: "YouTube", href: "https://www.youtube.com/@eida1018" },
    { label: "Twitter/X", href: "https://x.com/EidaTempest" },
  ] satisfies SocialLink[],
};

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Workflow", href: "#workflow" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const trustSignals = [
  "Short-form edits",
  "Long-form YouTube support",
  "Title and caption optimization",
  "Keyword and hashtag research",
  "Platform-ready exports",
];

export const heroHighlights = [
  "9:16 vertical edits",
  "YouTube-ready long form",
  "Captions, hooks, titles, hashtags",
];

export const services: Service[] = [
  {
    icon: Scissors,
    title: "Short-form video editing",
    summary:
      "I edit TikTok, YouTube Shorts, Instagram Reels, and Facebook Reels with tighter pacing, captions, sound effects, transitions, and platform-ready formatting.",
    outcomes: [
      "9:16 vertical videos",
      "Hook-focused pacing",
      "Captions and subtitles",
      "Sound effects and music syncing",
      "Platform-ready exports",
    ],
  },
  {
    icon: Clapperboard,
    title: "Long-form video editing",
    summary:
      "I edit YouTube videos, podcasts, tutorials, commentary videos, and talking-head content with clean cuts, structure, audio cleanup, and viewer-friendly flow.",
    outcomes: [
      "Clean cuts and pacing",
      "Basic audio cleanup",
      "B-roll placement",
      "Intro/outro trimming",
      "Long-form export formatting",
    ],
  },
  {
    icon: Share2,
    title: "Social media account support",
    summary:
      "I prepare content for posting by organizing schedules, writing captions, improving titles, choosing hashtags, and supporting consistent upload preparation.",
    outcomes: [
      "Upload preparation",
      "Caption writing",
      "Content calendar support",
      "Basic performance tracking",
      "Weekly content organization",
    ],
  },
  {
    icon: SearchCheck,
    title: "SEO title, keyword, and hashtag optimization",
    summary:
      "I improve video packaging with clearer titles, searchable captions, keyword suggestions, platform-appropriate hashtags, and description improvements.",
    outcomes: [
      "YouTube title options",
      "Keyword suggestions",
      "Hashtag sets",
      "Description improvements",
      "Topic research support",
    ],
  },
];

export const portfolioSamples: PortfolioSample[] = [
  {
    title: "Short-form reel edit for a personal brand",
    label: "Sample project",
    service: "Short-form video editing",
    clientType: "Personal brand / coach",
    goal: "Turn a raw talking-head clip into a clean vertical reel for mobile viewers.",
    role: "Trimmed dead space, improved pacing, added captions, light motion, sound accents, and platform formatting.",
    tools: "CapCut, Canva",
    result:
      "Created a clean, platform-ready sample edit that is easier to watch on TikTok, Shorts, and Reels.",
  },
  {
    title: "YouTube talking-head cleanup",
    label: "Sample project",
    service: "Long-form video editing",
    clientType: "Creator / educator",
    goal: "Shape a longer recording into a clearer YouTube video with fewer pauses and better structure.",
    role: "Removed pauses, tightened sections, balanced audio, added B-roll notes, and prepared export settings.",
    tools: "DaVinci Resolve, YouTube Studio",
    result:
      "Produced a viewer-friendly long-form sample with cleaner pacing and a stronger content flow.",
  },
  {
    title: "Before-and-after title optimization",
    label: "Sample project",
    service: "YouTube optimization",
    clientType: "Small business channel",
    goal: "Make a generic video title more searchable and easier for viewers to understand.",
    role: "Created title options, added keyword direction, and rewrote the description opening.",
    tools: "YouTube Studio, Google Sheets",
    result:
      "Converted weak packaging into a clearer title and description set ready for upload.",
  },
  {
    title: "Hashtag and keyword research sheet",
    label: "Sample project",
    service: "Social media SEO",
    clientType: "Creator posting across TikTok and Reels",
    goal: "Replace random broad hashtags with topic-relevant tags and reusable keyword groups.",
    role: "Grouped hashtags by topic, platform fit, audience intent, and content format.",
    tools: "TikTok Creative Center, Google Sheets",
    result:
      "Built a practical hashtag/keyword set for repeat posting without starting from scratch each time.",
  },
  {
    title: "Weekly content calendar sample",
    label: "Sample project",
    service: "Social media content support",
    clientType: "Online business / personal brand",
    goal: "Organize raw ideas into a simple weekly plan for Shorts, Reels, TikTok, and Facebook.",
    role: "Mapped post topics, captions, publish windows, status notes, and asset needs.",
    tools: "Notion, Trello, Google Sheets",
    result:
      "Created a clear sample calendar that helps a client see what is ready, pending, and scheduled.",
  },
  {
    title: "Repurposed podcast clip set",
    label: "Sample project",
    service: "Content repurposing",
    clientType: "Podcast creator",
    goal: "Turn one long recording into short clips with stronger hooks and captions.",
    role: "Selected clip ideas, shaped hooks, added captions, and prepared vertical export notes.",
    tools: "Premiere Pro, Canva",
    result:
      "Outlined a repeatable repurposing workflow for turning long-form content into mobile-first clips.",
  },
];

export const comparisons: Comparison[] = [
  {
    title: "Title optimization",
    before: "My Daily Routine",
    after: "How I Stay Productive as a Busy Student | Simple Daily Routine",
    why: "The improved title is clearer, more searchable, and tells the viewer what value they will get.",
  },
  {
    title: "Hashtag cleanup",
    before: "#viral #fyp #video #fun #life",
    after: "#studyroutine #productivitytips #studentlife #dailyroutine #timemanagement",
    why: "The new set matches the content topic, viewer intent, and platform discovery context.",
  },
  {
    title: "Caption rewrite",
    before: "New video is up. Watch now.",
    after: "A simple routine for staying focused when your school day feels packed.",
    why: "The revised caption gives viewers a reason to watch and connects directly to the video topic.",
  },
  {
    title: "Posting plan",
    before: "Upload whenever the edit is done.",
    after: "Monday hook clip, Wednesday tutorial cut, Friday recap reel, Sunday YouTube upload prep.",
    why: "A simple cadence makes posting more consistent and easier to manage across platforms.",
  },
];

export const processSteps = [
  {
    icon: UploadCloud,
    title: "Send footage",
    description:
      "You send raw footage, platform goals, style references, brand notes, and any posting requirements.",
  },
  {
    icon: SlidersHorizontal,
    title: "Confirm style",
    description:
      "I review the content, clarify the hook, pacing, caption style, export format, and optimization needs.",
  },
  {
    icon: WandSparkles,
    title: "Edit and optimize",
    description:
      "I create the edit and prepare titles, captions, keywords, hashtags, or descriptions when included.",
  },
  {
    icon: Eye,
    title: "Review",
    description:
      "You review the first version and share clear revision notes for the video or post assets.",
  },
  {
    icon: RefreshCcw,
    title: "Revise",
    description:
      "I apply revisions, tighten details, and check the final export or posting package.",
  },
  {
    icon: Send,
    title: "Deliver",
    description:
      "Final files are delivered or prepared for posting with the agreed title, caption, keywords, and hashtags.",
  },
];

export const packageOptions: PackageOption[] = [
  {
    name: "Basic Video Edit",
    bestFor: "Clients who only need a polished short-form edit.",
    includes: [
      "1 short-form video edit",
      "Captions",
      "Basic sound effects",
      "1 revision",
      "Platform-ready export",
    ],
  },
  {
    name: "Video Edit + Optimization",
    bestFor: "Creators who need editing and stronger post packaging.",
    includes: [
      "1 short-form or long-form video edit",
      "Optimized title",
      "Caption",
      "Relevant hashtags",
      "Keyword suggestions",
      "1-2 revisions",
    ],
  },
  {
    name: "Social Media Content Support",
    bestFor: "Clients who need regular content preparation help.",
    includes: [
      "Weekly content preparation",
      "Video editing support",
      "Title and caption writing",
      "Hashtag research",
      "Content calendar support",
      "Basic performance tracking",
    ],
  },
];

export const proofPoints = [
  {
    icon: Clock3,
    title: "Save editing time",
    description:
      "Raw clips become cleaner, tighter, and easier to post without the client getting stuck in the edit timeline.",
  },
  {
    icon: Hash,
    title: "Stronger post packaging",
    description:
      "Titles, captions, keywords, and hashtags are prepared around the topic instead of guessed at upload time.",
  },
  {
    icon: PackageCheck,
    title: "Ready for each platform",
    description:
      "Exports and post assets are shaped for Shorts, Reels, TikTok, Facebook, or YouTube long-form needs.",
  },
  {
    icon: Gauge,
    title: "Consistent content flow",
    description:
      "Calendars, upload notes, and repeatable prep steps make publishing easier to keep up with.",
  },
];

export const tools = [
  "CapCut",
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "Canva",
  "YouTube Studio",
  "Meta Business Suite",
  "TikTok Creative Center",
  "Google Sheets",
  "Notion",
  "Trello",
];

export const serviceOptions = [
  "Short-form video editing",
  "Long-form video editing",
  "Video edit + optimization",
  "Social media account support",
  "SEO titles, keywords, and hashtags",
  "Content repurposing",
  "Not sure yet",
];

export const timelineOptions = [
  "This week",
  "Within 2 weeks",
  "This month",
  "Ongoing support",
  "Flexible",
];

export const consoleRows = [
  { label: "Raw clip", value: "Trim silence and tighten hook", tone: "signal" },
  { label: "Caption pass", value: "Mobile subtitles ready", tone: "ember" },
  { label: "Export set", value: "Shorts, Reels, TikTok", tone: "signal" },
  { label: "SEO notes", value: "Title + hashtags queued", tone: "ember" },
];

export const timelineTracks = [
  { label: "Hook", width: "42%", icon: Captions },
  { label: "B-roll", width: "64%", icon: Layers3 },
  { label: "Audio", width: "78%", icon: Sparkles },
  { label: "SEO", width: "54%", icon: FileText },
];
