"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, strategyCallHref } from "@/content/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group inline-flex items-baseline gap-1" onClick={() => setMenuOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-tight text-ink">ClarityRX</span>
          <sup className="text-sm font-semibold text-gold transition-colors group-hover:text-ink">3</sup>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm font-medium text-muted transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a href={strategyCallHref} className="cta-primary text-sm" aria-label="Schedule strategy call by email">
            Schedule Strategy Call
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <span className="text-xl leading-none">{menuOpen ? "-" : "+"}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={clsx(
          "overflow-hidden border-t border-line bg-white px-5 transition-all duration-300 md:hidden",
          menuOpen ? "max-h-72 py-4" : "max-h-0 py-0",
        )}
      >
        <ul className="space-y-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block text-sm font-medium text-muted transition-colors hover:text-ink",
                    active && "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <a
              href={strategyCallHref}
              className="cta-primary block text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Schedule Strategy Call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
