import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Jen Rumery - AI Product Manager | Veterinary Technology"
        description="Product manager specializing in 0-to-1 AI products through systematic user research. 15+ years in healthcare tech • 500+ user interviews • Shipped products from concept to production"
        url={ROUTES.HOME}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
        <div className="container mx-auto px-6 py-28 md:py-40 relative">
          <div className="max-w-4xl animate-fade-in">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-6">
              Product Manager
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
              Building products that{" "}
              <span className="text-primary italic">solve real problems for real people</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-[1.7] mb-10 max-w-3xl">
              Hi, I'm Jen Rumery. I'm a product manager who builds 0-to-1 through deep user
              research and systematic methodology. I'm driven by the gap between what teams think
              users need and what users actually struggle with, those hidden friction points that
              block real people from getting value. I ship products fast, stay close to users,
              and bridge technical execution with strategic vision. My background spans 15+ years
              in healthcare technology, but my approach works across industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to={ROUTES.CASE_STUDIES}>
                  See My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to={ROUTES.CONTACT}>Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience", icon: Microscope },
              { number: "500+", label: "User Interviews Conducted", icon: Users },
              { number: "0-to-1", label: "Builder", icon: Zap },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
              What I Do
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Research-driven products that solve real problems
            </h2>
            <div className="space-y-6 font-body text-lg text-foreground/80 leading-[1.75]">
              <p>
                I've developed a systematic approach to understanding users that goes beyond
                traditional product research. By adapting ethnographic methods and visual analysis
                frameworks, I map complete user journeys, identify friction patterns, and translate
                insights into prioritized roadmaps. This methodology uncovered that 50% of users
                were facing blocking technical issues, the kind of insight that fundamentally shifts
                product strategy from feature polish to foundational reliability.
              </p>
              <p>
                I've spent 15+ years building products in healthcare technology, intentionally
                moving from enterprise systems to high-growth startups to build faster and stay
                closer to the people using what I create. I combine deep user research with
                hands-on execution and strategic thinking, shipping AI products, managing complex
                platforms, and leading cross-functional teams that deliver real impact.
              </p>
              <p className="font-semibold text-foreground text-xl">
                I don't just build features - I solve actual problems for actual people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
                How I Work
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                My Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Research",
                  description: "Ethnographic studies & visual analysis to understand complete user journeys"
                },
                {
                  step: "02",
                  title: "Synthesize",
                  description: "Journey mapping & friction identification to surface hidden patterns"
                },
                {
                  step: "03",
                  title: "Execute",
                  description: "Rapid iteration with cross-functional teams to ship products that solve real problems"
                }
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="group p-8 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p className="font-display text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-base text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Featured Work
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Recent Projects
              </h2>
            </div>
            <Link
              to={ROUTES.CASE_STUDIES}
              className="font-body text-sm font-medium text-primary hover:underline mt-4 md:mt-0"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "UX Teardown Methodology",
                company: "Product Research",
                description:
                  "Uncovered that 50% of users faced blocking technical issues through systematic research across 14+ studies. Shifted entire product roadmap from feature polish to foundational reliability.",
                tags: ["User Research", "Product Strategy", "Roadmap Pivot"],
              },
              {
                title: "AI Product from Concept to Production",
                company: "0-to-1 Product Launch",
                description:
                  "Shipped AI-powered patient summarization from concept to production, coordinating cross-functional teams and establishing beta programs that gathered feedback to inform rapid iteration.",
                tags: ["AI Product", "0-to-1", "Production Launch"],
              },
              {
                title: "OpenAPI Platform Management",
                company: "Platform & Integrations",
                description:
                  "Scaled platform to 20+ partner integrations while improving developer experience and advocating for infrastructure investments that strengthened system reliability.",
                tags: ["Platform PM", "20+ Integrations", "Developer Experience"],
              },
              {
                title: "Cross-Functional Product Leadership",
                company: "Product Execution",
                description:
                  "Led distributed teams across time zones to ship products on aggressive timelines without compromising quality, bridging technical and business perspectives to maintain strategic alignment.",
                tags: ["Leadership", "Execution", "Cross-Functional"],
              },
            ].map((project, index) => (
              <Link
                key={project.title}
                to={ROUTES.CASE_STUDIES}
                className="group block p-8 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="font-body text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">
                  {project.company}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-foreground/70 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Looking for a builder who combines research with execution?
          </h2>
          <p className="font-body text-lg md:text-xl opacity-95 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm currently exploring opportunities where I can leverage my unique combination
            of systematic user research, 0-to-1 product building, and hands-on technical execution.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-body"
          >
            <Link to={ROUTES.CONTACT}>
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
