import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Brain, Users } from "lucide-react";
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
              Product Manager | Veterinary Technology
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Building AI products that{" "}
              <span className="text-primary italic">give veterinarians their time back</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Hi, I'm Jen Rumery. I'm a product manager who bridges AI product development, 
              deep user research, and 15+ years of veterinary technology expertise to ship 
              products that actually work in real clinical workflows. I build 0-to-1, iterate 
              fast, and stay close to the veterinarians who use what I create.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to="/work">
                  See My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to="/contact">Let's Talk</Link>
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
              { number: "15+", label: "Years in Vet Tech", icon: Microscope },
              { number: "14+", label: "Practices Researched", icon: Users },
              { number: "3", label: "AI Products Built", icon: Brain },
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
              I build AI products for veterinary workflows
            </h2>
            <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I've spent the last 15 years in veterinary technology—starting as an 
                implementation specialist at IDEXX, growing into a Product Manager for 
                enterprise practice management systems, then intentionally moving to a 
                startup to build faster and stay closer to users.
              </p>
              <p>
                At Shepherd, I built three AI products from zero-to-one: TranscribeAI 
                (speech-to-text SOAP notes), SummarizeAI (patient history summarization), 
                and DiagnoseAI (clinical decision support). I also manage the OpenAPI 
                platform that powers 20+ partner integrations across the veterinary 
                ecosystem.
              </p>
              <p>
                What makes me different: I combine deep ethnographic user research 
                (systematic workflow studies across 14+ practices), hands-on AI product 
                development (OpenAI APIs, prompt engineering, beta programs), and true 
                domain expertise in veterinary clinical workflows. I don't just build 
                features—I understand how veterinarians actually work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-2">
                Recent Projects
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Products I've Shipped
              </h2>
            </div>
            <Link
              to="/work"
              className="font-body text-sm font-medium text-primary hover:underline mt-4 md:mt-0"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SummarizeAI: Patient History at a Glance",
                company: "Shepherd Veterinary Software",
                description:
                  "Built AI-powered patient summarization from concept through beta launch. Reduces time searching through medical records, giving veterinarians comprehensive clinical context in seconds.",
                tags: ["AI Product", "0-to-1", "Beta Launch"],
              },
              {
                title: "UX Teardown Methodology",
                company: "Shepherd Veterinary Software",
                description:
                  "Developed systematic research approach that uncovered 50% of practices facing blocking technical issues. Shifted entire product roadmap from feature polish to foundational reliability.",
                tags: ["User Research", "Product Strategy", "Methodology"],
              },
            ].map((project, index) => (
              <Link
                key={project.title}
                to="/work"
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
            Looking for a builder who bridges AI, research, and domain expertise?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-xl mx-auto">
            I'm currently exploring opportunities where I can leverage my unique combination 
            of AI product development, systematic user research, and deep veterinary 
            technology expertise.
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
