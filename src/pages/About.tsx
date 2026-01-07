import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About | Jen Rumery - Product Manager"
        description="15+ years in healthcare technology, building 0-to-1 products through deep user research and systematic methodology."
        url={ROUTES.ABOUT}
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              About Me
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-8">
              I'm a product manager who builds through{" "}
              <span className="text-primary italic">understanding people</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              I believe the best products come from deeply understanding the people who use 
              them. Not surveys. Not analytics dashboards. Actually watching people work, 
              mapping their workflows, and identifying the friction points that get in their way.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              My Story
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I started as an implementation specialist at IDEXX, working directly with 
                customers to deploy practice management software. I spent years in the field, 
                training users, troubleshooting workflows, and learning what actually matters 
                when people are trying to get work done.
              </p>
              <p>
                Over 14 years at IDEXX, I progressed from implementation specialist to business 
                analyst to product owner, eventually leading digital product strategy for an 
                enterprise platform serving thousands of locations globally. I learned enterprise 
                product management, Agile methodologies, stakeholder coordination, and how to 
                ship products at scale.
              </p>
              <p>
                But I wanted to build faster. I wanted to stay closer to users. I wanted to 
                own products from 0-to-1 rather than iterating on mature systems. So I 
                intentionally moved to a high-growth startup where I could ship products in 
                weeks instead of quarters.
              </p>
              <p>
                At Shepherd, I built three AI products from concept to production (patient
                summarization, speech-to-text clinical notes, and diagnostic support), managed
                a platform with 40+ partner integrations, and led cross-functional teams across
                time zones. Most importantly, I developed a systematic methodology for understanding
                users that became my signature approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              My Methodology: UX Teardown
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I developed an approach to evaluating end-to-end user journeys by
                systematically mapping workflows, visually annotating screens, and tagging
                friction points in a way that translates directly into actionable product roadmaps.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-8 my-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  The 7-Step Process:
                </h3>
                <ol className="space-y-4 font-body text-base text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">1</span>
                    <div>
                      <strong className="text-foreground">Journey Mapping</strong> - Break complete 
                      workflows into distinct phases, focusing on the 80/80 rule (80% most common 
                      workflows, 80% most common screens)
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">2</span>
                    <div>
                      <strong className="text-foreground">Screen-by-Screen Walkthrough</strong> - Navigate 
                      through every screen, every interaction, documenting the complete user experience
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">3</span>
                    <div>
                      <strong className="text-foreground">Visual Annotation</strong> - Use collaborative 
                      tools like FigJam to add comments, drawings, and observations directly on screen images
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">4</span>
                    <div>
                      <strong className="text-foreground">Systematic Tagging</strong> - Color-coded 
                      categories (UX friction, AI opportunities, feature areas, duplicate entry, etc.)
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">5</span>
                    <div>
                      <strong className="text-foreground">Structured Data Capture</strong> - Transfer 
                      tagged observations into spreadsheets for sorting, filtering, and analysis
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">6</span>
                    <div>
                      <strong className="text-foreground">Heat Mapping</strong> - Zoom out to see where 
                      friction clusters, identify patterns across screens, prioritize based on density
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">7</span>
                    <div>
                      <strong className="text-foreground">Translation to Action</strong> - Convert 
                      insights into Jira tickets, ProductBoard features, and prioritized roadmaps within 24 hours
                    </div>
                  </li>
                </ol>
              </div>

              <p>
                <strong className="text-foreground">The impact:</strong> Using this methodology
                across 14+ user studies, I discovered that 50% of users were facing blocking
                technical issues preventing product adoption, not a lack of features. This insight
                fundamentally shifted the entire product roadmap from feature enhancement to
                foundational reliability improvements.
              </p>
              
              <p>
                This approach works across any industry. The workflows change, but the methodology 
                stays the same: systematic observation, visual pattern recognition, structured 
                analysis, and rapid translation to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              What Makes Me Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Rare Skill Combination",
                  description: "Deep user research + technical product development (AI, APIs) + 0-to-1 building + cross-functional leadership. Most PMs excel in 1-2 areas; I actively work across all four."
                },
                {
                  title: "Systematic Methodology",
                  description: "UX teardown process that's repeatable, visual, collaborative, and actionable. Not just 'user interviews' - a structured framework that surfaces hidden insights."
                },
                {
                  title: "Hands-On Builder",
                  description: "From debugging in release candidate environments to prototyping with AI APIs to negotiating partner agreements - I'm in the details while maintaining strategic perspective."
                },
                {
                  title: "Domain Depth",
                  description: "15+ years in healthcare technology gives me deep understanding of complex workflows, regulatory considerations, and multi-stakeholder coordination. This expertise transfers to any domain-specific product role."
                },
                {
                  title: "0-to-1 Track Record",
                  description: "Shipped three products from concept to production. I know how to validate ideas fast, build beta programs, gather real feedback, and iterate based on actual usage."
                },
                {
                  title: "Systems Thinker",
                  description: "Don't just ship features, design how information flows, how teams coordinate, how processes scale. Build infrastructure that enables others to work better."
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card border border-border rounded-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              My Product Philosophy
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-semibold mb-2">
                  Users don't lie, but they can't always tell you what they need.
                </p>
                <p>
                  Watch what they do, not what they say. Map their actual workflows. Identify 
                  where they create workarounds or accept friction as "just how it is."
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-semibold mb-2">
                  Ship fast, gather feedback, iterate based on reality.
                </p>
                <p>
                  Perfect is the enemy of shipped. Beta programs with real users beat months 
                  of internal polish. You learn more in one week of production usage than six 
                  months of planning.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-semibold mb-2">
                  Build systems, not just features.
                </p>
                <p>
                  How will teams collaborate? How will information flow? How will processes 
                  scale? Infrastructure matters as much as the product itself.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-semibold mb-2">
                  Domain expertise is earned through time in the field.
                </p>
                <p>
                  You can't understand healthcare workflows from a conference room. You have 
                  to watch clinicians work, understand their constraints, see how systems fail 
                  in real conditions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-semibold mb-2">
                  Technical PMs need access to technical infrastructure.
                </p>
                <p>
                  Code repositories, database schemas, API documentation - these aren't nice-to-haves. 
                  They're essential for managing technical products effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Education & Credentials
            </h2>

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
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mb-3 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
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
                href="https://www.scrumalliance.org/members/1212862"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center text-center p-6 rounded-lg border border-border bg-background hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <div className="w-20 h-20 md:w-32 md:h-32 mb-4 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
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
            <Button asChild size="lg" variant="outline" className="font-body border-primary-foreground !text-primary-foreground hover:bg-primary-foreground hover:!text-primary">
              <a href={`${import.meta.env.BASE_URL}Jennifer%20Rumery%20SrPM%20Resume.pdf`} download className="flex items-center">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
