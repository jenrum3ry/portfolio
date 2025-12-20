import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Redesigning Enterprise Onboarding",
    company: "TechCorp",
    year: "2023",
    description:
      "Reduced time-to-value by 60% through a complete overhaul of the enterprise onboarding experience, resulting in improved customer satisfaction and retention.",
    challenge:
      "Enterprise customers were taking 45+ days to fully onboard, leading to churn and low engagement.",
    solution:
      "Implemented a personalized, milestone-based onboarding flow with proactive guidance and self-serve resources.",
    results: [
      "60% reduction in time-to-value",
      "35% increase in 90-day retention",
      "NPS improved from 32 to 67",
    ],
    tags: ["B2B SaaS", "Onboarding", "UX"],
  },
  {
    id: 2,
    title: "Launching a Self-Serve Analytics Platform",
    company: "DataFlow",
    year: "2022",
    description:
      "Built and launched a self-serve analytics tool that increased user engagement by 150% and opened a new market segment.",
    challenge:
      "Users relied heavily on support teams for basic analytics queries, creating bottlenecks and limiting scale.",
    solution:
      "Created an intuitive, no-code analytics builder with templates, natural language queries, and collaborative features.",
    results: [
      "150% increase in daily active users",
      "$2M ARR from new SMB segment",
      "40% reduction in support tickets",
    ],
    tags: ["Analytics", "Product Launch", "Growth"],
  },
  {
    id: 3,
    title: "Mobile-First Checkout Optimization",
    company: "ShopEase",
    year: "2021",
    description:
      "Redesigned the mobile checkout experience, increasing conversion rates by 28% and reducing cart abandonment.",
    challenge:
      "Mobile conversion was 40% lower than desktop, with high drop-off at the checkout stage.",
    solution:
      "Streamlined the checkout to 3 steps, added express payment options, and implemented progressive trust signals.",
    results: [
      "28% increase in mobile conversion",
      "22% reduction in cart abandonment",
      "$4.2M additional annual revenue",
    ],
    tags: ["E-commerce", "Mobile", "Conversion"],
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
              Portfolio
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
                {/* Image Placeholder */}
                <div className="bg-card border border-border rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-2xl text-muted-foreground">
                      {study.company}
                    </p>
                    <p className="font-body text-sm text-muted-foreground/60">
                      {study.year}
                    </p>
                  </div>
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

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        The Challenge
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        The Solution
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-center gap-2 font-body text-sm text-foreground"
                        >
                          <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                          {result}
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
