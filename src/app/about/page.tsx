import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { siteSettings, strategyCallHref } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "ClarityRX3 exists to multiply operational clarity, financial efficiency, and decision intelligence in healthcare organizations.",
  path: "/about",
  keywords: ["healthcare analytics founder", "hospital consultancy India", "operational intelligence mission"],
});

export default function AboutPage() {
  return (
    <>
      <SectionShell className="pt-16 sm:pt-24">
        <Reveal>
          <p className="section-eyebrow">About ClarityRX3</p>
          <h1 className="section-title max-w-4xl">Founder-led healthcare intelligence consultancy with execution discipline.</h1>
          <p className="section-subtitle max-w-3xl">
            We work with hospital and diagnostic leaders who need better visibility and stronger operating decisions
            without unnecessary implementation overhead.
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="surface-card h-full p-7 sm:p-9">
              <p className="section-eyebrow">Mission</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                We exist to multiply operational clarity, financial efficiency, and decision intelligence in healthcare organizations.
              </h2>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="surface-card h-full p-7 sm:p-9">
              <p className="section-eyebrow">Vision</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                To become a leading healthcare intelligence partner for growing medical institutions.
              </h2>
            </article>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pb-20 sm:pb-24">
        <Reveal>
          <div className="surface-card grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="section-eyebrow">Founder Narrative</p>
              <h2 className="section-title">
                {siteSettings.founderName}, {siteSettings.founderTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">{siteSettings.founderBio}</p>
              <p className="mt-5 text-base leading-relaxed text-muted">
                ClarityRX3 was started to bring structured, outcome-focused analytics systems to healthcare operators who
                need practical decisions, not theoretical dashboards.
              </p>
              <a href={strategyCallHref} className="cta-primary mt-7">
                Schedule Strategy Call
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-sand p-8">
              <h3 className="text-lg font-semibold text-ink">How we work</h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">1</span>
                  <span>Map the operational and financial bottlenecks with stakeholder interviews and data review.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">2</span>
                  <span>Design a targeted analytics solution tied to specific ROI and process outcomes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">3</span>
                  <span>Execute lean implementation with measurable milestones and leadership review cadence.</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
