import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { siteSettings, strategyCallHref } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ClarityRX3 to schedule a strategy call for healthcare operational intelligence and analytics consulting.",
  path: "/contact",
  keywords: ["contact healthcare consultant", "strategy call healthcare analytics"],
});

export default function ContactPage() {
  return (
    <SectionShell className="pt-16 pb-20 sm:pt-24 sm:pb-24">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h1 className="section-title max-w-3xl">Start with a focused strategy conversation.</h1>
        <p className="section-subtitle max-w-3xl">
          Share your current operational priorities and we will align on the most practical analytics path for your
          organization.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <article className="surface-card p-6 sm:p-7">
            <p className="section-eyebrow">Email</p>
            <a href={`mailto:${siteSettings.email}`} className="mt-4 block text-lg font-semibold text-ink underline-offset-4 hover:underline">
              {siteSettings.email}
            </a>
            <p className="mt-3 text-sm text-muted">Best for sharing brief context before the call.</p>
          </article>
        </Reveal>

        <Reveal delay={90}>
          <article className="surface-card p-6 sm:p-7">
            <p className="section-eyebrow">LinkedIn</p>
            <a
              href={siteSettings.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink transition hover:border-ink"
            >
              Visit LinkedIn
            </a>
            <p className="mt-3 text-sm text-muted">Professional updates and founder connect.</p>
          </article>
        </Reveal>

        <Reveal delay={180}>
          <article className="surface-card p-6 sm:p-7">
            <p className="section-eyebrow">Primary CTA</p>
            <a href={strategyCallHref} className="cta-primary mt-4">
              Schedule Strategy Call
            </a>
            <p className="mt-3 text-sm text-muted">Launch flow uses email intent for quick booking coordination.</p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
