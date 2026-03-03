import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { caseStudies, strategyCallHref } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how ClarityRX3 improved inventory efficiency and revenue recovery for diagnostic and hospital operators.",
  path: "/case-studies",
  keywords: ["healthcare case studies", "diagnostic lab waste reduction", "hospital revenue recovery"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <SectionShell className="pt-16 sm:pt-24">
        <Reveal>
          <p className="section-eyebrow">Case Studies</p>
          <h1 className="section-title max-w-4xl">Measured outcomes for healthcare organizations under operational pressure.</h1>
          <p className="section-subtitle">
            Each engagement follows a structured framework: Problem, Analysis, Solution, and Results.
          </p>
        </Reveal>
      </SectionShell>

      <SectionShell className="pt-4 pb-20 sm:pb-24">
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 110}>
              <article className="surface-card p-7 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{study.clientType}</p>
                  <span className="rounded-full border border-line bg-sand px-3 py-1 text-xs text-muted">{study.title}</span>
                </div>

                <div className="mt-7 grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-line bg-sand p-5">
                    <h2 className="text-lg font-semibold text-ink">Problem</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{study.problem}</p>
                  </div>

                  <div className="rounded-2xl border border-line bg-sand p-5">
                    <h2 className="text-lg font-semibold text-ink">Analysis</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{study.analysis}</p>
                  </div>

                  <div className="rounded-2xl border border-line bg-sand p-5">
                    <h2 className="text-lg font-semibold text-ink">Solution</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{study.solution}</p>
                  </div>

                  <div className="rounded-2xl border border-line bg-sand p-5">
                    <h2 className="text-lg font-semibold text-ink">Results</h2>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {study.results.map((result) => (
                        <li key={result} className="flex gap-2">
                          <span className="text-gold">-</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-8 rounded-3xl border border-line bg-white px-7 py-9 text-ink sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Want similar results in your facility?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              Book a strategy call to discuss your current constraints and identify the most practical path to measurable
              outcomes.
            </p>
            <a href={strategyCallHref} className="cta-primary mt-6">
              Schedule Strategy Call
            </a>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
