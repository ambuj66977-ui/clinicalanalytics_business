import type { Metadata } from "next";
import { siteSettings } from "@/content/site-content";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

const baseKeywords = [
  "healthcare intelligence consultancy",
  "hospital operations analytics",
  "healthcare revenue optimization",
  "diagnostic center dashboard",
  "healthcare inventory forecasting",
  "India healthcare consulting",
];

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://clarityrx3.com";
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

function withLeadingSlash(path: string): string {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${withLeadingSlash(path)}`;
}

export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: "ClarityRX3 | Healthcare Intelligence Consultancy",
      template: "%s | ClarityRX3",
    },
    description:
      "ClarityRX3 helps hospitals and diagnostic centers improve visibility, reduce leakage, and increase profitability through structured healthcare analytics systems.",
    keywords: baseKeywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "ClarityRX3 | Healthcare Intelligence Consultancy",
      description:
        "Healthcare Intelligence. Multiplied. Improve operational visibility, financial efficiency, and decision quality.",
      url: getSiteUrl(),
      siteName: "ClarityRX3",
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "ClarityRX3 healthcare intelligence consultancy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ClarityRX3 | Healthcare Intelligence Consultancy",
      description:
        "Healthcare Intelligence. Multiplied. Strategic analytics systems for hospitals and diagnostic centers.",
      images: ["/og-image.svg"],
    },
  };
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = withLeadingSlash(path);

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ClarityRX3`,
      description,
      url: absoluteUrl(path),
      siteName: "ClarityRX3",
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "ClarityRX3 healthcare intelligence consultancy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ClarityRX3`,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export function buildProfessionalServiceJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteSettings.name,
    slogan: siteSettings.tagline,
    url: siteUrl,
    description:
      "Healthcare analytics and operational intelligence consultancy for hospitals and diagnostic centers.",
    areaServed: {
      "@type": "Country",
      name: siteSettings.regionFocus,
    },
    founder: {
      "@type": "Person",
      name: siteSettings.founderName,
      jobTitle: siteSettings.founderTitle,
    },
    email: siteSettings.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteSettings.email,
      areaServed: siteSettings.regionFocus,
      availableLanguage: "English",
    },
    serviceType: [
      "Operational Intelligence Dashboard",
      "Revenue & Cost Optimization Audit",
      "Inventory & Demand Forecasting System",
    ],
    sameAs: [siteSettings.linkedInUrl],
  };
}
