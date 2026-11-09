/**
 * All site copy lives here. Everything is taken from the previous live site's
 * real (non-template) content. Items needing client confirmation are listed in
 * README.md.
 */
import {
  Award,
  BatteryCharging,
  Bean,
  BadgeCheck,
  Building2,
  Car,
  Coffee,
  FileCheck2,
  Globe,
  HardHat,
  Handshake,
  Landmark,
  Layers,
  Leaf,
  Lightbulb,
  PaintRoller,
  Scale,
  ShieldCheck,
  Ship,
  Sprout,
  Target,
  Users,
  Warehouse,
  Wheat,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Nigat Fanawi Trading PLC",
  shortName: "Nigat Fanawi",
  tagline: "Building Today, Driving Tomorrow.",
  url: "https://negatfanawi.et",
  email: "nigatfanawiplc@gmail.com",
  established: 2018,
  address: {
    line1: "Batta Real Estate, 4th Floor",
    line2: "22 Street, Bole Sub-city",
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Batta+Real+Estate+22+Street+Bole+Addis+Ababa",
};

export type Offer = { icon: LucideIcon; title: string; text: string };

export type Business = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Object position so the subject stays in frame in tall crops. */
  imagePosition: string;
  summary: string;
  intro: string;
  highlights: { icon: LucideIcon; label: string }[];
  offersTitle: string;
  offers: Offer[];
  cta: string;
};

export const businesses: Business[] = [
  {
    slug: "construction-contracting",
    name: "Construction & Contracting",
    shortName: "Construction",
    icon: HardHat,
    image: "/images/interior-corridor.jpg",
    imageAlt: "Finished office interior with glass partitions and timber walls",
    imagePosition: "60% 50%",
    summary:
      "Office and branch fit-outs, structural and civil works for commercial, institutional and corporate projects.",
    intro:
      "We build offices, branches and public facilities, from interior finishing to structural and civil works, for commercial, institutional and corporate clients.",
    highlights: [
      { icon: PaintRoller, label: "Fit-out & finishing" },
      { icon: Layers, label: "Structural works" },
      { icon: Building2, label: "Civil works" },
    ],
    offersTitle: "What we build",
    offers: [
      {
        icon: PaintRoller,
        title: "Office & branch fit-outs",
        text: "Head offices, branches, boardrooms and reception areas for corporate clients.",
      },
      {
        icon: Layers,
        title: "Structural works",
        text: "Structural construction for commercial and institutional buildings.",
      },
      {
        icon: Building2,
        title: "Civil works & public facilities",
        text: "Civil works and public-facility projects, including low-income housing in the pipeline.",
      },
    ],
    cta: "Discuss a project",
  },
  {
    slug: "electric-hybrid-vehicles",
    name: "Electric & Hybrid Vehicles",
    shortName: "Vehicles",
    icon: Car,
    image: "/images/vehicle-showroom.jpg",
    imageAlt: "Cars displayed in a dark, spot-lit showroom",
    imagePosition: "72% 60%",
    summary:
      "Selected EV and hybrid models with import expertise, manufacturer authorization, warranty and after-sales support.",
    intro:
      "We import selected electric and hybrid models with official authorization from major China-based EV makers, and support them after the sale through a showroom and partner EV garages.",
    highlights: [
      { icon: BatteryCharging, label: "EV & hybrid models" },
      { icon: ShieldCheck, label: "Safety warranty" },
      { icon: Wrench, label: "After-sales care" },
    ],
    offersTitle: "What you get",
    offers: [
      {
        icon: BatteryCharging,
        title: "Selected EV & hybrid models",
        text: "Eco-friendly vehicles imported under a Transport Authority certificate.",
      },
      {
        icon: ShieldCheck,
        title: "Authorization & safety warranty",
        text: "Official manufacturer authorization and EV safety warranty.",
      },
      {
        icon: Warehouse,
        title: "Showroom for 30+ cars",
        text: "A showroom with capacity for more than 30 vehicles.",
      },
      {
        icon: Wrench,
        title: "After-sales support",
        text: "Maintenance through partnerships with modern EV garages.",
      },
    ],
    cta: "Ask about vehicles",
  },
  {
    slug: "agricultural-exports",
    name: "Agricultural Exports",
    shortName: "Exports",
    icon: Wheat,
    image: "/images/coffee-beans.jpg",
    imageAlt: "Close-up of roasted coffee beans",
    imagePosition: "50% 50%",
    summary:
      "Ethiopian sesame, sorghum, soybeans and premium coffee varieties connected with international buyers.",
    intro:
      "We connect Ethiopian agricultural products with international buyers, operating under export licences from the Ministry of Agriculture and the Ministry of Trade & Industry.",
    highlights: [
      { icon: Sprout, label: "Oilseeds & pulses" },
      { icon: Coffee, label: "Premium coffee" },
      { icon: Ship, label: "International buyers" },
    ],
    offersTitle: "What we export",
    offers: [
      { icon: Sprout, title: "Sesame", text: "Ethiopian sesame for international buyers." },
      { icon: Wheat, title: "Sorghum", text: "Ethiopian sorghum for export." },
      { icon: Bean, title: "Soybeans", text: "Ethiopian soybeans for export." },
      { icon: Coffee, title: "Premium coffee", text: "Premium Ethiopian coffee varieties." },
    ],
    cta: "Send a buying enquiry",
  },
];

export const getBusiness = (slug: string) => businesses.find((b) => b.slug === slug);

export type ProjectStatus = "completed" | "underway" | "upcoming";

export const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  underway: "Under execution",
  upcoming: "Upcoming",
};

export type Project = {
  name: string;
  client?: string;
  location?: string;
  status: ProjectStatus;
};

/** Client and location appear only where the project's name states them. */
export const projects: Project[] = [
  { name: "Arba Minch Branch", client: "Hulu Money SACCO", location: "Arba Minch", status: "completed" },
  { name: "Wolaita Sodo Area Branch Office", client: "Hulu Money SACCO", location: "Wolaita Sodo", status: "completed" },
  { name: "Office Building", client: "New Paradigm Consulting", status: "completed" },
  { name: "Project Office", client: "Hulu Microfinance", status: "completed" },
  { name: "Main HQ Call Center & Media Unit", client: "Hulu Money", status: "completed" },
  { name: "Guest Reception & Boardroom Renovation", client: "Hulu Money SACCO", status: "underway" },
  { name: "Low-Income Housing Project", location: "Anferara Kebele, Guji Zone", status: "upcoming" },
  { name: "Payment Gateway & Wallet Office", client: "Mereb", status: "upcoming" },
  { name: "Bole Branch Project", client: "Hulu", location: "Bole, Addis Ababa", status: "upcoming" },
  { name: "Regional Branch Office", location: "Hawassa", status: "upcoming" },
  { name: "Main Head Office Cafeteria", client: "Hulu", status: "upcoming" },
  { name: "Hulu Birr Office", client: "Hulu Birr", status: "upcoming" },
  { name: "Hulu Investment Bank", client: "Hulu Investment Bank", status: "upcoming" },
];

export const projectCount = (status: ProjectStatus) =>
  projects.filter((p) => p.status === status).length;

export type Credential = {
  icon: LucideIcon;
  title: string;
  authority?: string;
  /** Business slug this credential supports. */
  business: string;
  note?: string;
};

export const credentials: Credential[] = [
  {
    icon: FileCheck2,
    title: "General Contractor License",
    business: "construction-contracting",
    note: "Upgrading to Grade 3 (GC-3)",
  },
  {
    icon: Car,
    title: "EV & Hybrid Import Certificate",
    authority: "Transport Authority",
    business: "electric-hybrid-vehicles",
  },
  {
    icon: ShieldCheck,
    title: "Manufacturer Authorization & EV Safety Warranty",
    business: "electric-hybrid-vehicles",
  },
  {
    icon: Sprout,
    title: "Oilseeds & Pulses Export",
    authority: "Ministry of Agriculture",
    business: "agricultural-exports",
  },
  {
    icon: Ship,
    title: "Export Trade License",
    authority: "Ministry of Trade & Industry",
    business: "agricultural-exports",
  },
  {
    icon: Landmark,
    title: "FX Clearance & Electronic Single Window",
    authority: "National Bank of Ethiopia",
    business: "agricultural-exports",
  },
  {
    icon: Coffee,
    title: "Accreditation",
    authority: "Coffee & Tea Authority",
    business: "agricultural-exports",
    note: "In process",
  },
];

export const mission =
  "To deliver reliable, innovative, and sustainable trading, construction, and investment solutions by creating value for customers, partners, and stakeholders through operational excellence, integrity, and customer-centric services.";

export const vision =
  "To become one of the leading diversified trading and investment companies, recognized for excellence, innovation, and sustainable business growth across Africa by 2030.";

export const reasons: Offer[] = [
  { icon: Layers, title: "Three strong sectors", text: "Construction, vehicle imports and exports provide diversified and balanced business activity." },
  { icon: BadgeCheck, title: "Manufacturer authorized", text: "Official authorization and EV safety warranty from major China-based EV makers." },
  { icon: FileCheck2, title: "Fully licensed", text: "Recognized by the Transport Authority, Ministry of Agriculture, Ministry of Trade & Industry, and National Bank of Ethiopia." },
  { icon: Wrench, title: "Complete after-sales care", text: "A showroom for 30+ cars backed by partnerships with modern EV maintenance garages." },
  { icon: Handshake, title: "Strong partner network", text: "Equity ties with leading financial and consulting organizations." },
  { icon: Users, title: "Experienced team", text: "Professional management, with recruitment supported by New Paradigm Consultancy." },
];

export const values: Offer[] = [
  { icon: Scale, title: "Integrity", text: "Honest, transparent dealings." },
  { icon: Award, title: "Excellence", text: "High standards in every job." },
  { icon: Target, title: "Customer focus", text: "Tailored solutions and strong after-sales support." },
  { icon: Lightbulb, title: "Innovation", text: "Green mobility and digital systems." },
  { icon: BadgeCheck, title: "Accountability", text: "On-time delivery and sound finance." },
  { icon: Users, title: "Teamwork", text: "Skilled people growing together." },
  { icon: FileCheck2, title: "Professionalism", text: "Industry standards and certified operations." },
  { icon: Leaf, title: "Sustainability", text: "Responsible business and lasting value." },
];

export const leaders = [
  { name: "Aklilu Assefa", role: "Chief Executive Officer", image: "/images/aklilu-assefa.jpg" },
  { name: "Abel Fekede", role: "Vice Chief Executive Officer", image: "/images/abel-fekede.jpg" },
];

export const divisions = [
  "Construction & Engineering",
  "Import & Export Commercial",
  "Finance & Investment",
  "HR & Administration",
];

export const partners: Offer[] = [
  {
    icon: Landmark,
    title: "Hulu Ecosystem Network",
    text: "A growing network of financial services, cooperative savings, microfinance, digital payments, and banking solutions operating across Ethiopia.",
  },
  {
    icon: Users,
    title: "New Paradigm Consulting PLC",
    text: "Our key management consulting partner, providing professional HR recruitment, organizational development, and strategic advisory support.",
  },
  {
    icon: Globe,
    title: "Pitron Tech",
    text: "Technology partner delivering digital infrastructure, systems integration, and software solutions that power our operations.",
  },
];

export const partnerRoles = ["Strategic partner", "Equity partner", "Technology partner"];

export const investments = [
  { name: "Hulu Money Saving & Credit Cooperative", sector: "Finance & Cooperative" },
  { name: "New Paradigm Consulting PLC", sector: "Management Consulting" },
  { name: "Resonance Communication & Media PLC", sector: "Media & Communications" },
];

export const enquiryTopics = [
  ...businesses.map((b) => ({ value: b.slug, label: b.name })),
  { value: "trading-investment", label: "Trading & Investment" },
];
