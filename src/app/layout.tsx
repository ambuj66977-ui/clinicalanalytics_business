import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildProfessionalServiceJsonLd, getBaseMetadata, getSiteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = getBaseMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = buildProfessionalServiceJsonLd(getSiteUrl());

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // Structured data is static business metadata for search engines.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative min-h-screen bg-hero-glow">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
