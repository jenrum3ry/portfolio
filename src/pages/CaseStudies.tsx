import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowRight, X } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const CaseStudies = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout>
      <SEO
        title="Projects | Jen Rumery - Portfolio"
        description="A selection of projects that showcase my approach to product management, from discovery to delivery and beyond."
        url={ROUTES.PROJECTS}
      />
      {/* Hero */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              PORTFOLIO
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Projects
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A selection of projects that showcase my approach to product
              management, from discovery to delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-border last:border-b-0 last:pb-0 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image - FIXED: No cropping, full image visible */}
                <div className="lg:col-span-2">
                  <div
                    className="bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center p-2 cursor-pointer hover:border-primary/50 transition-colors group"
                    onClick={() => setSelectedImage({ src: study.image, alt: study.imageAlt })}
                  >
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
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
                    {study.problem && (
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                          PROBLEM
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {study.problem}
                        </p>
                      </div>
                    )}
                    {study.myRole && (
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                          MY ROLE
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {study.myRole}
                        </p>
                      </div>
                    )}
                    {study.approach && (
                      <div>
                        <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                          APPROACH
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  {study.metrics && study.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="bg-secondary/50 border border-border rounded-lg p-4 text-center">
                          <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                            {metric.value}
                          </p>
                          <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-card border border-border rounded-lg p-4 mb-6">
                    <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      RESULTS
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

                  {study.learnings && (
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                      <h3 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        LEARNINGS
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                        {study.learnings}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center p-8">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] w-auto object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CaseStudies;
