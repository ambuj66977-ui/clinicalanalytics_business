import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import {
  caseStudies,
  problemPoints,
  services,
  siteSettings,
  strategyCallHref,
  whyChoosePoints,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Healthcare Intelligence That Drives Growth",
  description:
    "ClarityRX3 helps hospitals and diagnostic centers reduce leakage, improve performance visibility, and make faster operating decisions.",
  path: "/",
  keywords: ["healthcare dashboard", "hospital operations heads", "diagnostic lab analytics"],
});

export default function HomePage() {
  const featuredCase = caseStudies[0];

  return (
    <>
      <SectionShell className="pt-16 sm:pt-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="section-eyebrow">Healthcare Intelligence Consultancy</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Healthcare Intelligence That Drives Growth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              ClarityRX3 helps hospitals and diagnostic centers unlock operational clarity, reduce revenue leakage,
              and improve performance through structured analytics and actionable dashboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={strategyCallHref} className="cta-primary">
                Schedule Strategy Call
              </a>
              <Link href="/solutions" className="cta-secondary">
                View Solutions
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10" />
              <p className="section-eyebrow">Executive Snapshot</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-sand p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Revenue Leakage Risk</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">-11.4%</p>
                </div>
                <div className="rounded-2xl border border-line bg-sand p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Ops Decisions Cycle</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">2.3x Faster</p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Department Visibility Index</p>
                  <div className="mt-3 h-2 rounded-full bg-line">
                    <div className="h-2 w-[78%] rounded-full bg-gold" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="pt-6">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-line bg-white p-7 sm:p-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="section-eyebrow">The Problem</p>
              <h2 className="section-title">Healthcare Data Is Everywhere. Insight Is Not.</h2>
              <ul className="mt-6 space-y-3">
                {problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-sand p-6">
              <p className="text-sm font-semibold text-ink">Operations Dashboard Preview</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="text-xs text-muted">Billing Efficiency</p>
                  <p className="mt-2 text-xl font-semibold text-ink">92%</p>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="text-xs text-muted">Inventory Risk Alerts</p>
                  <p className="mt-2 text-xl font-semibold text-ink">6 Active</p>
                </div>
                <div className="rounded-xl border border-line bg-white p-4 sm:col-span-2">
                  <p className="text-xs text-muted">Utilization Trend</p>
                  <div className="mt-3 flex items-end gap-2">
                    {[35, 45, 52, 60, 58, 66, 73].map((bar, index) => (
                      <div key={index} className="h-24 w-full rounded bg-line/70">
                        <div className="w-full rounded bg-gold" style={{ height: `${bar}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell id="solutions-preview">
        <p className="section-eyebrow">Solutions</p>
        <h2 className="section-title">Three Focused Systems. One Clear Outcome: Better Healthcare Performance.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <article className="surface-card h-full p-6 sm:p-7">
                <h3 className="text-2xl font-semibold leading-tight text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
                <p className="mt-5 rounded-2xl border border-line bg-sand px-4 py-3 text-sm font-medium text-ink">
                  Outcome: {service.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <Reveal>
          <div className="surface-card p-7 sm:p-10">
            <p className="section-eyebrow">Case Study Preview</p>
            <h2 className="section-title">{featuredCase.title}</h2>
            <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted lg:grid-cols-3">
              <div>
                <p className="font-semibold text-ink">Problem</p>
                <p className="mt-2">{featuredCase.problem}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Solution</p>
                <p className="mt-2">{featuredCase.solution}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">Result</p>
                <ul className="mt-2 space-y-2">
                  {featuredCase.results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <span className="text-gold">-</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/case-studies" className="cta-secondary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell>
        <p className="section-eyebrow">Why Choose ClarityRX3</p>
        <h2 className="section-title">Structured execution for healthcare operators who need measurable outcomes.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoosePoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 70}>
              <article className="rounded-2xl border border-line bg-white p-5">
                <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-line bg-white p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="rounded-3xl border border-line bg-sand p-8">
              <div className="mx-auto max-w-[280px] overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src="/founder-photo.jpg"
                  alt="Ambuj Sharma, Founder and CEO of ClarityRX3"
                  width={864}
                  height={1536}
                  className="aspect-[4/5] h-auto w-full object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="section-eyebrow">Founder</p>
              <h2 className="section-title">
                {siteSettings.founderName}, {siteSettings.founderTitle}
              </h2>
              <p className="section-subtitle">{siteSettings.founderBio}</p>
            </div>
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell className="pb-20 pt-6 sm:pb-24">
        <Reveal>
          <div className="rounded-3xl border border-line bg-ink px-7 py-10 text-white sm:px-10 sm:py-14">
            <p className="section-eyebrow !text-[#e6bf8a]">Final CTA</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Multiply Your Operational Clarity.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
              Start with a focused strategy call to identify the highest-impact analytics opportunities in your
              organization.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={strategyCallHref} className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand">
                Schedule Strategy Call
              </a>
              <a href={`mailto:${siteSettings.email}`} className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                {siteSettings.email}
              </a>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
