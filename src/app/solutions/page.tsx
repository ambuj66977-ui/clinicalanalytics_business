import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { services, strategyCallHref } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Operational dashboards, revenue and cost audits, and inventory forecasting systems tailored for hospitals and diagnostic centers.",
  path: "/solutions",
  keywords: ["healthcare consulting services", "hospital KPI dashboard", "revenue recovery audit"],
});

export default function SolutionsPage() {
  return (
    <>
      <SectionShell className="pt-16 sm:pt-24">
        <Reveal>
          <p className="section-eyebrow">Solutions</p>
          <h1 className="section-title max-w-4xl">
            Focused healthcare intelligence systems built for operational and financial outcomes.
          </h1>
          <p className="section-subtitle">
            Every solution is designed to support executive decision-making, remove blind spots, and improve
            profitability without forcing a heavy system replacement.
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-4 pb-20 sm:pb-24">
        <div className="space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <article className="surface-card p-7 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">{service.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">{service.detailedDescription}</p>
                    <p className="mt-6 rounded-2xl border border-line bg-sand px-4 py-3 text-sm font-semibold text-ink">
                      Outcome: {service.outcome}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Scope Includes</p>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-8 rounded-3xl border border-line bg-ink px-7 py-9 text-white sm:px-10 sm:py-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Need to prioritize where to start?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              We can map your current reporting, billing, and inventory maturity in one strategy session and recommend
              the highest ROI rollout sequence.
            </p>
            <a
              href={strategyCallHref}
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
            >
              Schedule Strategy Call
            </a>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
