export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  id: "operational-dashboard" | "revenue-audit" | "inventory-forecasting";
  title: string;
  shortDescription: string;
  detailedDescription: string;
  outcome: string;
  deliverables: string[];
};

export type CaseStudyItem = {
  slug: "diagnostic-lab-chain" | "specialty-hospital";
  title: string;
  clientType: string;
  problem: string;
  analysis: string;
  solution: string;
  results: string[];
};

export type WhyChooseItem = {
  title: string;
  description: string;
};

export const siteSettings = {
  name: "ClarityRX3",
  displayName: "ClarityRX",
  tagline: "Healthcare Intelligence. Multiplied.",
  founderName: "Ambuj Sharma",
  founderTitle: "Founder & CEO",
  founderBio:
    "Biotechnology background with experience in operational analytics, structured modeling, and healthcare performance optimization. Focused on bringing clarity and intelligent decision systems to growing healthcare organizations.",
  email: "ambuj66977@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/ambujsharma-connect",
  regionFocus: "India",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: ServiceItem[] = [
  {
    id: "operational-dashboard",
    title: "Operational Intelligence Dashboard",
    shortDescription:
      "Centralize cross-department operational and financial KPIs into one executive decision view.",
    detailedDescription:
      "We design a practical command center for leadership teams that combines operations, billing, utilization, and throughput signals into one consistent reporting layer.",
    outcome: "Clear decision visibility within 30 days.",
    deliverables: [
      "KPI design aligned to hospital goals",
      "Department performance tracking",
      "Revenue segmentation by service line",
      "Doctor utilization metrics",
      "Automated reporting cadences",
    ],
  },
  {
    id: "revenue-audit",
    title: "Revenue & Cost Optimization Audit",
    shortDescription:
      "Identify hidden leakage in billing and cost structures to protect margins and recover lost revenue.",
    detailedDescription:
      "We audit your revenue cycle and cost map to detect missed charges, weak process controls, and margin blind spots that directly impact profitability.",
    outcome: "5-15% revenue recovery potential.",
    deliverables: [
      "Billing flow analysis",
      "Missed charge detection",
      "Service margin breakdown",
      "Cost mapping and variance signals",
      "Prioritized action plan for recovery",
    ],
  },
  {
    id: "inventory-forecasting",
    title: "Inventory & Demand Forecasting System",
    shortDescription:
      "Reduce stock waste and stockout risk using demand trends and decision-ready reorder logic.",
    detailedDescription:
      "We build a forecasting framework for diagnostics and clinical operations to align procurement timing, expiry control, and working capital discipline.",
    outcome: "Reduced waste and improved cash flow.",
    deliverables: [
      "Historical usage analysis",
      "Expiry and near-expiry alerts",
      "Smart reorder thresholds",
      "Predictive demand modeling",
      "Operational review dashboard",
    ],
  },
];

export const whyChoosePoints: WhyChooseItem[] = [
  {
    title: "Healthcare-specific expertise",
    description: "Built around healthcare workflows, not generic business templates.",
  },
  {
    title: "ROI-first approach",
    description: "Every engagement is tied to measurable financial and operational outcomes.",
  },
  {
    title: "Lean implementation model",
    description: "Fast deployment cycles without slowing day-to-day operations.",
  },
  {
    title: "Founder-led execution",
    description: "Direct strategic oversight from discovery through implementation.",
  },
  {
    title: "No heavy ERP replacement required",
    description: "Integrates with current tools so teams can improve without disruptive overhauls.",
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "diagnostic-lab-chain",
    title: "Multi-location Diagnostic Lab",
    clientType: "Diagnostic Lab Chain",
    problem:
      "Manual reporting across sites and recurring inventory waste reduced operational confidence.",
    analysis:
      "Data was siloed by branch, reorder timing was inconsistent, and leadership lacked a single view of inventory performance.",
    solution:
      "Implemented a centralized operational dashboard and a demand forecasting model with reorder thresholds and expiry risk alerts.",
    results: [
      "18% reduction in inventory waste",
      "Improved department-level visibility",
      "Faster operational decisions across locations",
    ],
  },
  {
    slug: "specialty-hospital",
    title: "Specialty Hospital Revenue Recovery",
    clientType: "Specialty Hospital",
    problem:
      "Revenue leakage was suspected, but finance and operations lacked a precise view of where margins were dropping.",
    analysis:
      "Billing flow checkpoints and service-line margin mapping revealed missed charges and process gaps in high-volume units.",
    solution:
      "Executed a focused revenue and cost optimization audit with a practical remediation roadmap and weekly tracking dashboard.",
    results: [
      "7% revenue recovery within 3 months",
      "Higher confidence in billing controls",
      "Clear accountability by department for follow-through",
    ],
  },
];

export const problemPoints: string[] = [
  "Fragmented reporting across departments",
  "Hidden revenue leakage in billing systems",
  "Manual spreadsheet workflows",
  "Lack of centralized performance visibility",
];

const strategyCallBody = [
  "Hello ClarityRX3 team,",
  "",
  "I would like to schedule a strategy call.",
  "",
  "Name:",
  "Organization:",
  "Facility type (hospital/diagnostic center/clinic):",
  "Primary operational challenge:",
  "Preferred week for call:",
].join("\n");

export const strategyCallHref = `mailto:${siteSettings.email}?subject=${encodeURIComponent(
  "Strategy Call Request - ClarityRX3",
)}&body=${encodeURIComponent(strategyCallBody)}`;
