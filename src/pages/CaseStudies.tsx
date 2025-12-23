import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "UX Teardown Methodology",
    platform: "Veterinary Practice Management Software",
    year: "2025",
    description:
      "Developed systematic research approach across 14+ user studies that uncovered 50% of users facing blocking technical issues. Shifted entire product roadmap from feature polish to foundational reliability.",
    challenge:
      "AI-powered clinical documentation tools were launching across 1,300+ veterinary practices with unknown adoption patterns. The product team needed to understand why some practices thrived while others struggled, but traditional user surveys weren't revealing the root causes.",
    solution:
      "Applied a systematic, ethnographic research approach combining journey mapping, visual annotation, pattern analysis, and heat mapping across 14+ veterinary practices. The process involved mapping complete workflows (60+ screens across 7 workflow stages), color-coded tagging for friction points, and structured data capture that translated directly into actionable product roadmaps.",
    results: [
      "Discovered 50% of practices had blocking reliability issues (not feature requests)",
      "Identified 3 distinct customer segments with different needs",
      "Shifted product roadmap from feature polish to foundational improvements",
      "Built repeatable research framework adopted across product organization",
    ],
    tags: ["User Research", "Product Strategy", "Methodology"],
    image: "UX_Teardown_Example.png",
    imageAlt: "Office Visit Journey UX Teardown showing 5 workflow stages with color-coded sections, annotated screens, and identified friction points"
  },
  {
    id: 2,
    title: "Cornerstone Help Hub - Cloud Migration & Virtual Assistant",
    platform: "Enterprise Veterinary Practice Management Software",
    year: "2022-2023",
    description:
      "Led greenfield development of cloud-based help platform from concept through production deployment, serving 1,300+ veterinary practices. Achieved 90% virtual assistant adoption and migrated 1,000+ legacy help paths in 12 months.",
    challenge:
      "Cornerstone's server-based architecture locked help documentation inside the software's F1 system. Every content update required a full software release cycle, creating months-long lag between identifying user confusion and publishing updated help. With over 1,000 F1 help paths requiring migration, the team needed a strategic approach that balanced velocity, quality, and user impact.",
    solution:
      "Led end-to-end platform development from concept to production integration. Built modern cloud-based help hub (cornerstonehelphub.com) with integrated virtual assistant using data-driven prioritization. Analyzed full year of support data (call volume, chat transcripts, user feedback) and applied 80/20 framework: first wave addressed 80% of support volume, second wave completed comprehensive migration. Validated approach with early adopter beta program before coordinating cross-functional rollout across customer support, education, development, training, customer success, and content teams to execute 12-month strategic migration.",
    results: [
      "90% virtual assistant adoption as first support touchpoint",
      "Migrated 1,000+ help paths from server-based system in 12 months",
      "Decoupled content updates from software release cycle (hours vs. months)",
      "Built multi-channel support flow: virtual assistant → chat → phone",
      "Reduced routine support call volume through self-service deflection",
      "Established 80/20 prioritization framework adopted organization-wide",
    ],
    tags: ["Product Strategy", "Platform Development", "Cross-Functional Leadership"],
    image: "Cornerstone_Help_Hub.png",
    imageAlt: "Cornerstone Help Hub modern interface showing searchable help center with category navigation and virtual assistant",
    liveUrl: "https://cornerstonehelphub.com"
  },
];

const CaseStudies = () => {
  return (
    <Layout>
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
