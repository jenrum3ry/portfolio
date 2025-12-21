import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl animate-fade-in">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Product Manager
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Crafting products that{" "}
              <span className="text-primary italic">people love</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Hi, I'm Jen Rumery. I'm a product manager with 15+ years of experience 
              building B2B SaaS products that drive growth and delight users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to="/case-studies">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to="/contact">Get in Touch</Link>
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
              { number: "7+", label: "Years Experience", icon: Briefcase },
              { number: "15M+", label: "Users Impacted", icon: Users },
              { number: "40%", label: "Avg. Revenue Growth", icon: TrendingUp },
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

      {/* Featured Case Studies Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-2">
                Featured Work
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="font-body text-sm font-medium text-primary hover:underline mt-4 md:mt-0"
            >
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Redesigning Enterprise Onboarding",
                company: "TechCorp",
                description:
                  "Reduced time-to-value by 60% through a complete overhaul of the enterprise onboarding experience.",
                tags: ["B2B SaaS", "Onboarding", "UX"],
              },
              {
                title: "Launching a Self-Serve Analytics Platform",
                company: "DataFlow",
                description:
                  "Built and launched a self-serve analytics tool that increased user engagement by 150%.",
                tags: ["Analytics", "Product Launch", "Growth"],
              },
            ].map((study, index) => (
              <Link
                key={study.title}
                to="/case-studies"
                className="group block p-8 bg-card border border-border rounded-lg hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-2">
                  {study.company}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
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
            Let's build something great together
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-xl mx-auto">
            I'm currently exploring new opportunities. If you're looking for a 
            product leader who delivers results, let's chat.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-body"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
