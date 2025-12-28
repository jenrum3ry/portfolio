import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Jen Rumery - AI Product Manager | Veterinary Technology"
        description="Building AI products that give veterinarians their time back. 15+ years in vet tech • Shipped 3 AI products from 0-to-1 • Deep user research across 14+ practices"
        url={ROUTES.HOME}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl animate-fade-in">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Product Manager
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Building products that{" "}
              <span className="text-primary italic">solve real problems for real people</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Hi, I'm Jen Rumery. I'm a product manager who builds 0-to-1 through deep user 
              research and systematic methodology. I ship products fast, stay close to users, 
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
              { number: "14+", label: "User Studies", icon: Users },
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-2">
              What I Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              I build products through systematic user research
            </h2>
            <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I've spent 15+ years building products in healthcare technology—from enterprise 
                systems at IDEXX to 0-to-1 AI products at a high-growth startup. I intentionally 
                moved from enterprise to startup to build faster and stay closer to the people 
                using what I create.
              </p>
              <p>
                What makes me different is my systematic approach to understanding users. I 
                adapted ethnographic research methods and visual analysis frameworks into a 
                structured process that maps complete user journeys, identifies friction 
                patterns, and translates insights into prioritized roadmaps. This approach 
                uncovered that 50% of users were facing blocking technical issues—the kind of 
                insight that fundamentally shifts product strategy.
              </p>
              <p>
                I'm a builder who combines deep ethnographic research, hands-on technical 
                execution, and strategic thinking. I've shipped AI products using OpenAI APIs, 
                managed platforms with 20+ partner integrations, and led cross-functional teams 
                across time zones. I don't just build features—I solve actual problems for actual 
                people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="bg-card border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="h-6 w-6 text-primary" />
              <div>
                <p className="font-body text-sm font-medium text-primary uppercase tracking-widest">
                  Education & Credentials
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Professional Qualifications
                </h2>
              </div>
            </div>

            {/* MBA Section */}
            <div className="mb-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                MBA, University of Wisconsin-Madison
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                2022 - 2024
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: "Strategic Growth",
                    assertionId: "icHl4vFGSTO0dvBlMgOvNA",
                  },
                  {
                    name: "Strategic Innovation",
                    assertionId: "vbQmr7DaSJanmgI0ndgEqw",
                  },
                  {
                    name: "Consulting",
                    assertionId: "G99EBvJ0S0uxrWst2v7P6w",
                  },
                  {
                    name: "Business Analytics",
                    assertionId: "GI3U8UwhSY2Mn_7y7jwlCw",
                  }
                ].map((badge, index) => (
                  <a
                    key={badge.name}
                    href={`https://api.badgr.io/public/assertions/${badge.assertionId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center p-4 rounded-lg border border-border bg-background hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-24 h-24 mb-3 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img
                        src={`https://api.badgr.io/public/assertions/${badge.assertionId}/image`}
                        alt={`${badge.name} Badge`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {badge.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      UW-Madison Verified
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Certification Section */}
            <div className="pt-8 border-t border-border mb-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Professional Certification
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Scrum Alliance
              </p>

              <a
                href="https://www.scrumalliance.org/community/profile/jrumery3"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img
                    src="https://www.scrumalliance.org/badges/sa-adv_cspo-600.png"
                    alt="Advanced Certified Scrum Product Owner Badge"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-base font-medium text-foreground mb-1">
                  Advanced Certified Scrum Product Owner®
                </p>
                <p className="font-body text-xs text-muted-foreground mb-1">
                  A-CSPO | Certificate ID: 001212862
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  Active through July 2026
                </p>
              </a>
            </div>

            {/* Undergraduate Education */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Undergraduate Education
              </h3>
              <p className="font-body text-base text-foreground">
                BS, Health/Healthcare Administration & Management
              </p>
              <p className="font-body text-sm text-muted-foreground">
                California College San Diego | 2005 - 2009
              </p>
            </div>

            <p className="font-body text-sm text-muted-foreground text-center mt-8">
              Click badges to view verification details
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-2">
                Featured Work
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
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
                  "Developed systematic research approach across 14+ user studies that uncovered 50% of users facing blocking technical issues. Shifted entire product roadmap from feature polish to foundational reliability.",
                tags: ["User Research", "Product Strategy", "Methodology"],
              },
              {
                title: "AI Product from Concept to Production",
                company: "0-to-1 Product Launch",
                description:
                  "Built AI-powered patient summarization from concept through beta launch, coordinating cross-functional teams and establishing structured beta programs that gathered real-world feedback.",
                tags: ["AI Product", "0-to-1", "Beta Launch"],
              },
              {
                title: "OpenAPI Platform Management",
                company: "Platform & Integrations",
                description:
                  "Managed 20+ partner integrations, enhanced API documentation with developer-friendly Swagger UI, and advocated for technical infrastructure improvements including ERD creation.",
                tags: ["Platform PM", "Integrations", "Developer Experience"],
              },
              {
                title: "Cross-Functional Product Leadership",
                company: "Product Execution",
                description:
                  "Led distributed teams across US and international time zones, coordinated between technical advisors and engineering, and shipped products on aggressive timelines while maintaining quality.",
                tags: ["Leadership", "Execution", "Cross-Functional"],
              },
            ].map((project, index) => (
              <Link
                key={project.title}
                to={ROUTES.CASE_STUDIES}
                className="group block p-8 bg-card border border-border rounded-lg hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-2">
                  {project.company}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
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
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Looking for a builder who combines research with execution?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-xl mx-auto">
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
