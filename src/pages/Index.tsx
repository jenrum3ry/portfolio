import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { caseStudies } from "@/data/caseStudies";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Jen Rumery - Product Manager"
        description="15+ years building products in complex domains. Researcher, builder, and occasional writer. See the work, read the thinking."
        url={ROUTES.HOME}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
        <div className="container mx-auto px-6 py-16 md:py-28 lg:py-40 relative">
          <div className="max-w-4xl animate-fade-in">
            <p className="font-body text-sm md:text-base font-bold text-primary uppercase tracking-[0.2em] mb-6">
              Product Manager
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
              I've shipped a lot of products.{" "}
              <span className="text-primary italic">I'm still figuring out what makes them work.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-[1.7] mb-6 max-w-3xl">
              15 years across complex domains, from enterprise veterinary platforms to 0-to-1 AI products.
              I research, build, and write about what I'm learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-body">
                <Link to={ROUTES.BLOG}>
                  Read My Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to={ROUTES.PROJECTS}>See My Work</Link>
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
              {
                label: "Healthcare Product Leader",
                number: "15+",
                description: "years across startups and enterprise scale",
                icon: Microscope
              },
              {
                label: "Research-Driven",
                number: "500+",
                description: "user interviews across healthcare, fintech, and consumer apps",
                icon: Users
              },
              {
                label: "Shipping Track Record",
                number: "20+",
                description: "products shipped: from user-facing solutions to operational platforms",
                icon: Zap
              }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="font-body text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  {stat.label}
                </p>
                <p className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
              My Story
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
              From the field to the product room
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I started as an implementation specialist at IDEXX (a leading veterinary healthcare
                technology company), working directly with customers to deploy practice management
                software. I spent years in the field, training users, troubleshooting workflows,
                and learning what actually matters when people are trying to get work done.
              </p>
              <p>
                Over 14 years, I progressed from implementation specialist to business analyst
                to product owner and product manager, eventually leading digital product strategy
                for an enterprise platform serving thousands of locations globally. I learned how
                to ship products at scale, coordinate across stakeholders, and build systems that
                work for diverse user bases.
              </p>
              <p>
                Most recently, I led AI product development at a veterinary startup, shipping three products from concept to production and managing a platform with 40+ vendor integrations.
              </p>
              <p>
                I'm still doing that work. I also build things on the side (this site is one of them) and
                write about what I'm figuring out as I go.
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
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
                I find the problems hiding beneath feature requests
              </h2>
              <p className="font-display text-xl md:text-2xl font-semibold text-foreground/60">
                My Process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "I watch users work. Real workflows beat surveys every time."
                },
                {
                  step: "02",
                  title: "Pattern-Finding",
                  description: "I map what I hear to strategic frameworks that actually predict outcomes."
                },
                {
                  step: "03",
                  title: "Building",
                  description: "Fast iteration, close to users, shipping based on signals not guesses."
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
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Recent Projects
              </h2>
            </div>
            <Link
              to={ROUTES.PROJECTS}
              className="font-body text-sm font-medium text-primary hover:underline mt-4 md:mt-0"
            >
              View All Projects →
            </Link>
          </div>

          <div className="relative px-6 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {caseStudies.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/2">
                    <Link
                      to={`${ROUTES.PROJECTS}#project-${project.id}`}
                      className="group block p-8 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-warm transition-all duration-300 h-full"
                    >
                      <p className="font-body text-xs font-bold text-primary uppercase tracking-[0.15em] mb-3">
                        {project.platform}
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="font-body text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">
                Recent Writing
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                From the Blog
              </h2>
            </div>
            <Link
              to={ROUTES.BLOG}
              className="font-body text-sm font-medium text-primary hover:underline mt-4 md:mt-0"
            >
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link
                key={post.id}
                to={ROUTES.BLOG_POST(post.slug)}
                className="group block p-8 bg-card border-2 border-border rounded-xl hover:border-primary/50 hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="inline-block px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center font-body text-sm font-medium text-primary">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
            Working through something similar?
          </h2>
          <p className="font-body text-lg md:text-xl opacity-95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Happy to compare notes.
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
