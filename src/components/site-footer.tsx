import Link from "next/link";
import { navItems, siteSettings, strategyCallHref } from "@/content/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold text-ink">ClarityRX3</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{siteSettings.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Navigation</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <a href={`mailto:${siteSettings.email}`} className="block transition-colors hover:text-ink">
              {siteSettings.email}
            </a>
            <a
              href={siteSettings.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a href={strategyCallHref} className="inline-flex items-center text-ink underline underline-offset-4">
              Schedule Strategy Call
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line/80 px-5 py-4 text-center text-xs text-muted sm:px-8">
        (c) {year} ClarityRX3. All rights reserved.
      </div>
    </footer>
  );
}
