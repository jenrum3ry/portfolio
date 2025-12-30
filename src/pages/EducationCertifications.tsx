import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";

const EducationCertifications = () => {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const badgeData = {
    "Strategic Growth": {
      name: "Strategic Growth",
      imagePath: "/portfolio/UW%20Madison%20Wisconsin%20Strategic%20Growth.png",
      issuedDate: "04/09/2024",
      description: "Those who have earned the Strategic Growth badge have developed skills related to growth strategies, growth marketing strategies, and digital strategies used by managers and directors of successful organizations. The badge earner has demonstrated skills in expanding an organization's goals and overcoming business challenges. Earning the Strategic Management Badge requires mastery of essential senior management and department director tools and skills in preparation for advancement in management careers.",
      earningCriteria: [
        "Evaluate and capture growth opportunities within an organization using appropriate frameworks.",
        "Identify and evaluate new business opportunities.",
        "Design and implement strategies to capture new business opportunities within organizational resource constraints.",
      ],
      fullEarningCriteria: "Strategic Growth badge earners have applied management frameworks to evaluate and capture a growth opportunity in an organization alongside demonstrated mastery of strategies to identify, evaluate, capture, design, and implement new business opportunities. Critical thinking skills have been evaluated within an applied learning environment for compressive resources and constraints within specific functional areas in the organization. Badge earners have performed successfully on rigorous written exams assessing competency for making data-driven decisions, including growth, marketing, and digital strategies, evaluated by a University of Wisconsin-Madison instructor.",
    },
    "Strategic Innovation": {
      name: "Strategic Innovation",
      imagePath: "/portfolio/UW%20Madison%20Wisconsin%20Strategic%20Innovation.png",
      issuedDate: "07/10/2024",
      description: "Those who have earned the Strategic Innovation badge have developed skills related to Strategic Management of Innovation, Product Management, and Data Technology for Business Analytics. Abilities demonstrated include: managing innovation and change as well as tools/frameworks for encouraging innovation such as design thinking and agile methodologies. These competencies were measured and validated through assessments by a qualified instructor in the University of Wisconsin-Madison Wisconsin School of Business Professional Master's of Business Administration program.",
      earningCriteria: [
        "Evaluate whether a technological solution is a business opportunity.",
        "Explain the process of commercializing technology and the challenges associated with each phase of that process.",
        "Articulate the skills and resources required for successfully managing technologies and innovative processes.",
        "Produce an analysis of the commercial potential of a technological solution.",
        "Identify the different roles of Product Managers in fast paced digital and technology businesses",
        "Develop product roadmaps that bring an idea to market",
        "Learn to understand customer needs and act as the voice of the customer throughout the roadmap",
        "Learn to manage cross-functional global product teams",
        "Apply design thinking to tackle business problems",
        "Understand agility and be able to pivot according to changing customer needs",
        "Explain the relevance of design ideas to management practice – how to do more with less, to align and lead teams through a lean, efficient and vetted process for creative innovation.",
        "Describe the role and potential of digital technologies in delivering novel experiences.",
        "Describe how synthetic thinking complements analytic thinking.",
        "Practice considering the human experience of products, services, and systems.",
        "Explain how design can operate at all levels in an organization and is not limited to obvious domains, such as product development or communications department.",
        "Apply creative ideas and methods of design that develop management skills and techniques, i.e., make small bets fast, evaluate failure intelligently and harness breakthroughs to propel company growth or social good.",
        "Develop skills and perspectives on in-market experiments that save time and resources while revealing smarter outcomes.",
        "Innovative Thought and Leadership.",
      ],
    },
    "Consulting": {
      name: "Consulting",
      imagePath: "/portfolio/UW%20Madison%20Wisconsin%20Consulting.png",
      issuedDate: "10/02/2024",
      description: "Those who have earned the Wisconsin School of Business Consulting badge have developed problem-solving, strategy implementation, and change management skills used by professional consultants, managers, and directors of successful organizations. The badge earner has demonstrated skills in identifying and solving crucial internal challenges, developing a narrow scope of work, choosing the required data for analysis, crafting recommendations, presenting results, and implementing change. Earning the Consulting Badge requires demonstrated proficiency in applied practices of internal consulting and problem-solving while working on a consulting team tackling organizational problems in preparation for advancement in consulting or management careers.",
      earningCriteria: [
        "Demonstrate internal consulting skills in leading crucial problem-solving teams in an organization, choosing the right recommendations at the right time, presenting results, and implementing required change.",
        "Identify internal challenges through work scope development, data analysis, solution identification, reporting, and implementation.",
        "Display leadership and c-suite skills necessary for effective change management in consulting roles.",
      ],
      fullEarningCriteria: "Those who have earned the Wisconsin School of Business Consulting Badge have been rigorously assessed by a University of Wisconsin - Madison instructor for successful demonstration of applied consulting skills, including identifying problems and implementing solutions using executive-level skills.",
    },
    "Business Analytics": {
      name: "Business Analytics",
      imagePath: "/portfolio/UW%20Madison%20Wisconsin%20Business%20Analytics.png",
      issuedDate: "12/25/2024",
      description: "Those who have earned the Business Analytics badge have developed skills and demonstrated competency through rigorous assessment for making data-driven decisions, including database management, data visualization and communication and distinguishing correlation from causation while enrolled in the University of Wisconsin-Madison Wisconsin School of Business Professional Master's of Business Administration curriculum. Competencies were measured and validated through assessments by a qualified UW-Madison instructor.",
      earningCriteria: [
        "Extract data from both structured or unstructured databases.",
        "Transform and combine data with other relevant information and load data into targeted systems such as data warehouses, data marts or analytical applications.",
        "Use Python to execute simple web scraping, mine data from social networks, and use libraries for advanced data analysis beyond simple descriptive analytics.",
        "Implement Online Analytical Processing (OLAP) and create multi-dimension data cubes.",
        "Execute social mining techniques and create valuable information from text-mining for decision-making.",
        "Discuss the current landscape in data warehousing, big data, and other emerging topics.",
        "Describe key principles of effective data visualization.",
        "Identify appropriate data visualizations and tools for different types of variables and analyses",
        "Explore datasets visually to identify the information in data, recognize patterns, and generate business insights.",
        "Construct effective static and interactive data visualizations for presentation of analytics results, monitoring, and decision support.",
        "Articulate why descriptive data analysis based on correlations, such as multivariate regression techniques, may give misleading impressions of causal relationships.",
        "Identify statements that use correlational evidence to infer causal relationships.",
        "Understand the value of randomization for establishing causal effects through experiments.",
        "Demonstrate skills to implement a randomized experiment and compare outcomes.",
        "Identify and implement appropriate quasi-experimental techniques for analyzing existing data from a causal perspective.",
      ],
    },
  };

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.values(badgeData).map((badge, index) => (
                <button
                  key={badge.name}
                  onClick={() => setSelectedBadge(badge.name)}
                  className="flex flex-col items-start p-6 rounded-lg border border-border bg-background hover:shadow-warm hover:scale-[1.02] transition-all duration-300 opacity-0 animate-fade-in cursor-pointer text-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                      <img
                        src={badge.imagePath}
                        alt={`${badge.name} Badge`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-body text-base font-semibold text-foreground mb-1">
                        Wisconsin School of Business: {badge.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        Issued on {badge.issuedDate}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {badge.description}
                  </p>
                  <p className="font-body text-xs text-primary mt-2">
                    Click to view full details →
                  </p>
                </button>
              ))}
            </div>

            <p className="font-body text-sm text-muted-foreground text-center mt-8">
              Click any badge to view detailed earning criteria
            </p>

            {/* Badge Detail Modals */}
            {Object.values(badgeData).map((badge) => (
              <Dialog
                key={badge.name}
                open={selectedBadge === badge.name}
                onOpenChange={(open) => !open && setSelectedBadge(null)}
              >
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                        <img
                          src={badge.imagePath}
                          alt={`${badge.name} Badge`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <DialogTitle className="font-display text-2xl">
                          Wisconsin School of Business: {badge.name}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          Issued on {badge.issuedDate}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-body font-semibold text-lg text-foreground mb-2">
                        Description
                      </h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {badge.description}
                      </p>
                    </div>

                    {badge.fullEarningCriteria && (
                      <div>
                        <h4 className="font-body font-semibold text-lg text-foreground mb-2">
                          Earning Criteria Overview
                        </h4>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {badge.fullEarningCriteria}
                        </p>
                      </div>
                    )}

                    <div>
                      <h4 className="font-body font-semibold text-lg text-foreground mb-3">
                        {badge.fullEarningCriteria ? "Demonstrated Abilities" : "Earning Criteria"}
                      </h4>
                      <ul className="space-y-2">
                        {badge.earningCriteria.map((criteria, index) => (
                          <li
                            key={index}
                            className="font-body text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Certification Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Professional Certifications
            </h2>
            <p className="font-body text-base text-muted-foreground mb-8">
              Scrum Alliance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CSPO Certification */}
              <div className="flex flex-col items-start p-6 rounded-lg border border-border bg-background hover:shadow-warm transition-all duration-300">
                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <img
                      src="/portfolio/sa-cspo-600.png"
                      alt="Certified Scrum Product Owner Badge"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-base font-semibold text-foreground mb-1">
                      Certified Scrum Product Owner®
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-1">
                      CSPO | Certificate ID: 001212862
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Awarded: June 16, 2021
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.scrumalliance.org/community/profile/jrumery3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-primary hover:underline mt-2"
                >
                  View Profile →
                </a>
              </div>

              {/* A-CSPO Certification */}
              <div className="flex flex-col items-start p-6 rounded-lg border border-border bg-background hover:shadow-warm transition-all duration-300">
                <div className="flex items-start gap-4 mb-4 w-full">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <img
                      src="/portfolio/sa-adv_cspo-600.png"
                      alt="Advanced Certified Scrum Product Owner Badge"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body text-base font-semibold text-foreground mb-1">
                      Advanced Certified Scrum Product Owner®
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-1">
                      A-CSPO | Certificate ID: 001212862
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Awarded: July 12, 2022
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.scrumalliance.org/community/profile/jrumery3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-primary hover:underline mt-2"
                >
                  View Profile →
                </a>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground text-center mt-8">
              Active through July 12, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Undergraduate Education */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Undergraduate Education
            </h2>

            <div className="flex items-start gap-6 p-6 rounded-lg border border-border bg-background">
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-white flex items-center justify-center">
                <img
                  src="/portfolio/CCSD.jpg"
                  alt="California College San Diego Logo"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-body text-lg font-semibold text-foreground mb-2">
                  BS, Health/Healthcare Administration & Management
                </h3>
                <p className="font-body text-base text-muted-foreground">
                  California College San Diego
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  2005 - 2009
                </p>
              </div>
            </div>
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
