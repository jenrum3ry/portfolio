import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const EducationCertifications = () => {
  return (
    <Layout>
      <SEO
        title="Education & Certifications | Jen Rumery - Product Manager"
        description="MBA from University of Wisconsin-Madison, Advanced Certified Scrum Product Owner (A-CSPO), and verified digital credentials."
        url={ROUTES.EDUCATION_CERTIFICATIONS}
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Credentials
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">
              Education & Certifications
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Formal education combined with hands-on industry certifications,
              demonstrating commitment to continuous learning and professional development.
            </p>
          </div>
        </div>
      </section>

      {/* MBA Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              MBA, University of Wisconsin-Madison
            </h2>
            <p className="font-body text-base text-muted-foreground mb-8">
              2022 - 2024
            </p>

            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Completed specialized coursework in strategic growth, innovation, consulting,
              and business analytics. Each badge represents verified competency in key
              business domains.
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
                  className="group flex flex-col items-center text-center p-4 rounded-lg border border-border bg-background hover:shadow-warm hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
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

            <p className="font-body text-sm text-muted-foreground text-center mt-8">
              Click badges to view verification details
            </p>
          </div>
        </div>
      </section>

      {/* Professional Certification Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Professional Certification
            </h2>
            <p className="font-body text-base text-muted-foreground mb-8">
              Scrum Alliance
            </p>

            <div className="max-w-md mx-auto">
              <a
                href="https://www.scrumalliance.org/community/profile/jrumery3"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card hover:shadow-warm hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                  <img
                    src="https://www.scrumalliance.org/badges/sa-adv_cspo-600.png"
                    alt="Advanced Certified Scrum Product Owner Badge"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-lg font-medium text-foreground mb-2">
                  Advanced Certified Scrum Product Owner®
                </p>
                <p className="font-body text-sm text-muted-foreground mb-1">
                  A-CSPO | Certificate ID: 001212862
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Active through July 2026
                </p>
              </a>
            </div>

            <p className="font-body text-sm text-muted-foreground text-center mt-8">
              Click badge to view verification details
            </p>
          </div>
        </div>
      </section>

      {/* Undergraduate Education */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Undergraduate Education
            </h2>
            <p className="font-body text-lg text-foreground mb-2">
              BS, Health/Healthcare Administration & Management
            </p>
            <p className="font-body text-base text-muted-foreground">
              California College San Diego | 2005 - 2009
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Want to work together?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-xl mx-auto">
            I'm exploring opportunities where I can leverage my systematic approach to user
            research, 0-to-1 product building, and hands-on technical execution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-body">
              <Link to={ROUTES.CONTACT}>
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-body border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EducationCertifications;
