import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";
const CaseStudies = () => {
  return (
    <Layout>
      <SEO
        title="Case Studies | Jen Rumery - Portfolio"
        description="A selection of projects that showcase my approach to product management—from discovery to delivery and beyond."
        url={ROUTES.CASE_STUDIES}
      />
      {/* Hero */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              PORTFOLIO
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Case Studies
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A selection of projects that showcase my approach to product 
              management—from discovery to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-16 border-b border-border last:border-b-0 last:pb-0 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image - FIXED: No cropping, full image visible */}
                <div className="bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={study.image}
                    alt={study.imageAlt}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {study.title}
                  </h2>

                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-body font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View Live Site
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        THE CHALLENGE
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        THE SOLUTION
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      KEY RESULTS
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 font-body text-sm text-foreground"
                        >
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
