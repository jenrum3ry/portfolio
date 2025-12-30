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
              I bridge research insights to{" "}
              <span className="text-primary italic">technical execution in complex domains</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-[1.7] mb-10 max-w-3xl">
              I'm a product manager obsessed with uncovering the hidden friction that blocks real users.
              My 15+ years in healthcare taught me how to translate complex domain knowledge into intuitive
              products - and I bring that same methodology to whatever I build. I combine ethnographic research,
              AI/ML product experience, and systematic execution to ship products that solve problems others
              don't even see yet. I'm looking for Series B-D companies where I can lead end-to-end product
              strategy from user research to shipped products.
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
              { number: "15+", label: "Years in Healthcare Tech (3 Startups, 1 Enterprise)", icon: Microscope },
              { number: "500+", label: "User Interviews Across Healthcare, Fintech & Consumer Apps", icon: Users },
              { number: "8", label: "Products Shipped from 0-to-1, 3 with $1M+ ARR", icon: Zap },
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
                My approach to product development is built on a foundation of deep user understanding.
                I've spent 15+ years in healthcare technology - from enterprise practice management systems
                to AI-powered clinical tools - learning how to translate complex domain knowledge into
                products that clinicians actually want to use. This expertise transfers to any complex
                domain where systematic research reveals insights that transform product strategy.
              </p>
              <p>
                I've developed a proprietary methodology that combines ethnographic research with systematic
                execution. Through 500+ user interviews across healthcare, fintech, and consumer applications,
                I've refined an approach that uncovers the friction points generic surveys miss - like discovering
                that 50% of users faced blocking technical issues, shifting entire product roadmaps from
                feature polish to foundational reliability.
              </p>
              <p className="font-semibold text-foreground text-xl">
                I shipped 8 products from concept to market, with 3 achieving $1M+ ARR, by staying obsessively
                close to users and iterating based on real usage data rather than internal assumptions.
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
                  description: "I conduct ethnographic studies and user interviews to uncover the hidden friction points that generic surveys miss - watching real workflows, identifying workarounds, and understanding constraints."
                },
                {
                  step: "02",
                  title: "Synthesize",
                  description: "I translate insights into prioritized roadmaps using frameworks like Jobs to Be Done and value stream mapping - turning patterns into actionable product strategy."
                },
                {
                  step: "03",
                  title: "Execute",
                  description: "I ship fast and stay close to users, iterating based on real usage data rather than internal opinions - building products that solve validated problems, not imagined ones."
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
                  "Uncovered that 50% of users faced blocking technical issues through systematic research across 14+ studies. This insight shifted the entire product roadmap, resulting in a 40% increase in feature adoption and 30% reduction in support tickets.",
                tags: ["User Research", "Product Strategy", "+40% Adoption"],
              },
              {
                title: "AI Product from Concept to Production",
                company: "0-to-1 Product Launch",
                description:
                  "Shipped AI-powered patient summarization in 8 weeks (2 weeks ahead of schedule) with 95% accuracy. Achieved 200+ beta users in first month with 85% retention rate, reducing veterinarian documentation time by 25%.",
                tags: ["AI Product", "8 Weeks to Launch", "95% Accuracy"],
              },
              {
                title: "OpenAPI Platform Management",
                company: "Platform & Integrations",
                description:
                  "Scaled to 20+ integrations, improved developer onboarding time by 50%, resulting in 2x increase in third-party app adoption. Secured $500K+ infrastructure investment through data-driven advocacy.",
                tags: ["20+ Integrations", "50% Faster Onboarding", "2x Adoption"],
              },
              {
                title: "Cross-Functional Product Leadership",
                company: "Product Execution",
                description:
                  "Led 3 distributed teams across 5 time zones. Shipped quarterly roadmap 10% under budget while maintaining 95% team satisfaction scores and 98% on-time delivery rate with zero critical production incidents.",
                tags: ["3 Teams", "5 Time Zones", "95% Satisfaction"],
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
            Looking for your next product leader?
          </h2>
          <p className="font-body text-lg md:text-xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed">
            I'm looking for my next opportunity where I can lead product strategy from user discovery
            through execution. Ideal fit: Series B-D companies in healthcare, AI infrastructure, or
            developer tools where research-driven product thinking can directly impact adoption and retention.
            If you're building something that solves a real problem for real users, let's talk.
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
