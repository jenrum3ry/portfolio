import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "UX Teardown Methodology",
    platform: "Veterinary Practice Management Software",
    year: "2025",
    description:
      "Developed systematic research approach across 14+ user studies that uncovered 50% of users facing blocking technical issues. Shifted entire product roadmap from feature polish to foundational reliability.",
    problem:
      "AI-powered clinical documentation tools were launching across 1,300+ veterinary practices with unknown adoption patterns. Traditional user surveys and product analytics weren't revealing why adoption varied so dramatically between practices—some thrived while others abandoned the tools entirely within weeks.",
    myRole:
      "Led user research strategy and execution. Designed and conducted 14+ ethnographic studies, developed the UX Teardown methodology, synthesized insights into actionable roadmap changes, and presented findings to executive leadership that shifted product strategy.",
    approach:
      "I developed a systematic, ethnographic research approach that combined journey mapping, visual annotation, and pattern analysis. Rather than asking users what they wanted, I watched them work—mapping complete workflows across 60+ screens and 7 workflow stages, identifying friction points in real time, and using color-coded tagging to surface patterns across multiple practices. This translated directly into prioritized product roadmaps.",
    challenge:
      "AI-powered clinical documentation tools were launching across 1,300+ veterinary practices with unknown adoption patterns. The product team needed to understand why some practices thrived while others struggled, but traditional user surveys weren't revealing the root causes.",
    solution:
      "Applied a systematic, ethnographic research approach combining journey mapping, visual annotation, pattern analysis, and heat mapping across 14+ veterinary practices. The process involved mapping complete workflows (60+ screens across 7 workflow stages), color-coded tagging for friction points, and structured data capture that translated directly into actionable product roadmaps.",
    results: [
      "Discovered 50% of practices had blocking reliability issues (not feature requests)",
      "Identified 3 distinct customer segments with different needs",
      "Shifted product roadmap from feature polish to foundational improvements",
      "Built repeatable research framework adopted across product organization",
    ],
    metrics: [
      { label: "Increase in Feature Adoption", value: "40%" },
      { label: "Reduction in Support Tickets", value: "30%" },
      { label: "User Studies Conducted", value: "14+" },
      { label: "Practices Impacted", value: "1,300+" }
    ],
    learnings:
      "The biggest insight was realizing that what users say they need and what actually blocks them are often completely different. Traditional surveys captured feature requests, but ethnographic observation revealed systemic reliability issues that surveys would never uncover. This reinforced that the best product insights come from watching people work, not asking them what they want.",
    tags: ["User Research", "Product Strategy", "Methodology"],
    image: "UX_Teardown_Example.png",
    imageAlt: "Office Visit Journey UX Teardown showing 5 workflow stages with color-coded sections, annotated screens, and identified friction points"
  },
  {
    id: 2,
    title: "AI Product from Concept to Production",
    platform: "AI-Powered Clinical Documentation",
    year: "2024",
    description:
      "Shipped AI-powered patient summarization from concept to production in 8 weeks. Coordinated cross-functional teams, established beta programs, and gathered feedback to inform rapid iteration.",
    problem:
      "Veterinarians were spending 30-40% of their day on clinical documentation, taking time away from patient care. Manual SOAP note creation was tedious, repetitive, and prone to errors. The market opportunity was clear, but building an AI product that clinicians would trust required balancing speed with accuracy.",
    myRole:
      "Owned end-to-end product development from concept validation through production launch. Defined product requirements, coordinated engineering/ML/design teams, established beta program with 200+ users, analyzed usage patterns, and drove rapid iteration based on real-world feedback.",
    approach:
      "Rather than building in isolation, I established a tight feedback loop with real veterinarians from day one. Launched with a minimal viable product focused on patient summarization (the highest-value use case), recruited 200+ beta users, analyzed every session for accuracy and usability issues, and iterated weekly based on actual usage patterns rather than assumptions.",
    challenge:
      "Veterinarians needed AI-powered documentation tools to reclaim clinical time, but adoption would only succeed if the AI was accurate, trustworthy, and integrated seamlessly into existing workflows. Traditional waterfall development would have taken 6+ months—too slow for a competitive market.",
    solution:
      "Led rapid product development using a beta-first approach. Defined MVP scope (patient summarization only), coordinated cross-functional teams across product, engineering, ML, and design, launched beta program within 6 weeks, and established continuous feedback loops that informed daily iteration. Prioritized accuracy over features, ensuring 95% accuracy threshold before expanding use cases.",
    results: [
      "Shipped MVP in 8 weeks (2 weeks ahead of schedule)",
      "Achieved 95% accuracy on patient summaries",
      "Recruited 200+ beta users in first month",
      "Maintained 85% retention rate throughout beta",
      "Identified 3 critical workflow integrations through user feedback",
      "Reduced veterinarian documentation time by average of 25%"
    ],
    metrics: [
      { label: "Time to Production", value: "8 weeks" },
      { label: "AI Accuracy Rate", value: "95%" },
      { label: "Beta Users", value: "200+" },
      { label: "User Retention", value: "85%" }
    ],
    learnings:
      "The biggest learning was that shipping fast doesn't mean shipping recklessly. By focusing relentlessly on one high-value use case (patient summarization) and setting a clear accuracy threshold (95%), we maintained quality while moving at startup speed. The beta program was essential—real veterinarians surfaced edge cases and workflow issues that we would never have anticipated internally.",
    tags: ["AI Product", "0-to-1", "Production Launch"],
    image: "",
    imageAlt: ""
  },
  {
    id: 3,
    title: "OpenAPI Platform Management",
    platform: "Integration Platform & Partner Ecosystem",
    year: "2023-2024",
    description:
      "Scaled platform to 20+ partner integrations while improving developer experience and advocating for infrastructure investments that strengthened system reliability.",
    problem:
      "The platform was built to support a handful of integrations but needed to scale to 20+ partners without becoming a maintenance nightmare. Developer experience was poor (complex documentation, unclear error messages, inconsistent API patterns), and infrastructure limitations were causing reliability issues that threatened partner trust.",
    myRole:
      "Owned platform strategy and partner integrations roadmap. Managed relationships with 20+ integration partners, prioritized developer experience improvements, advocated for infrastructure investments with executive leadership, and coordinated cross-functional teams to execute platform improvements.",
    approach:
      "I treated platform management as a product in itself, with developers as my primary users. Conducted interviews with integration partners to understand friction points, mapped their complete integration journey, identified the 80/20 of improvements (better docs, clearer error messages, consistent API patterns), and built a prioritized roadmap that balanced partner needs with infrastructure sustainability.",
    challenge:
      "The platform needed to scale from a few integrations to 20+ without degrading performance or overwhelming the engineering team. Poor developer documentation was causing integration delays, and infrastructure limitations were creating reliability concerns that could damage partner relationships.",
    solution:
      "Led platform improvements using systematic developer research. Interviewed integration partners, mapped their workflows, identified top friction points (documentation gaps, unclear errors, inconsistent patterns), and prioritized improvements based on impact. Advocated for infrastructure investments by quantifying the business risk of unreliable integrations, securing executive buy-in for foundational improvements.",
    results: [
      "Scaled to 20+ integrations without reliability degradation",
      "Improved developer onboarding time by 50% through better documentation",
      "Achieved 2x increase in third-party app adoption",
      "Reduced integration support tickets by 40%",
      "Established developer feedback loop adopted across engineering org",
      "Secured $500K+ infrastructure investment through data-driven advocacy"
    ],
    metrics: [
      { label: "Partner Integrations", value: "20+" },
      { label: "Onboarding Time Reduction", value: "50%" },
      { label: "App Adoption Increase", value: "2x" },
      { label: "Support Ticket Reduction", value: "40%" }
    ],
    learnings:
      "Platform products require the same user research rigor as customer-facing products. Treating developers as users—interviewing them, mapping their workflows, prioritizing their friction points—was just as valuable as traditional user research. The other key learning was that advocating for infrastructure isn't about technology for its own sake; it's about quantifying business risk and showing leadership why reliability matters to revenue.",
    tags: ["Platform PM", "20+ Integrations", "Developer Experience"],
    image: "",
    imageAlt: ""
  },
  {
    id: 4,
    title: "Cross-Functional Product Leadership",
    platform: "Distributed Team Coordination",
    year: "2023-2024",
    description:
      "Led distributed teams across time zones to ship products on aggressive timelines without compromising quality, bridging technical and business perspectives to maintain strategic alignment.",
    problem:
      "The organization was scaling rapidly with distributed teams across 5 time zones (US East Coast, US West Coast, Central Europe, India, and remote US). Communication gaps were causing delays, misalignment between technical and business stakeholders was leading to rework, and aggressive timelines were putting pressure on quality.",
    myRole:
      "Led 3 cross-functional product teams (engineering, design, QA, customer success) across multiple time zones. Owned product roadmap prioritization, facilitated communication between technical and business stakeholders, coordinated release planning, and maintained team morale while shipping on aggressive schedules.",
    approach:
      "I established clear communication rituals (daily async standups, weekly sync across time zones, documented decision-making), created shared visibility into priorities and blockers, and acted as a bridge between technical teams and business stakeholders. Rather than forcing synchronous work, I optimized for async-first collaboration with intentional sync points for critical decisions.",
    challenge:
      "Distributed teams across 5 time zones made synchronous collaboration nearly impossible. Business stakeholders wanted aggressive timelines, engineering teams needed realistic scope, and without careful coordination, quality would suffer. Traditional PM approaches (daily standups, sprint planning in person) didn't work at this scale.",
    solution:
      "Redesigned team rituals for async-first collaboration. Established daily async standups (written updates in Slack), weekly all-hands syncs scheduled to accommodate all time zones, documented all decisions in shared spaces, and created visibility dashboards that gave everyone real-time access to priorities, blockers, and progress. Bridged technical/business perspectives by translating engineering constraints into business impact and business goals into technical requirements.",
    results: [
      "Shipped quarterly roadmap 10% under budget",
      "Maintained 95% team satisfaction scores despite aggressive timelines",
      "Reduced cross-team blockers by 35% through better coordination",
      "Achieved 98% on-time delivery rate across 3 product teams",
      "Established async-first rituals adopted by 5 other product teams",
      "Zero critical production incidents during major releases"
    ],
    metrics: [
      { label: "Teams Led", value: "3" },
      { label: "Time Zones", value: "5" },
      { label: "Team Satisfaction", value: "95%" },
      { label: "On-Time Delivery", value: "98%" }
    ],
    learnings:
      "The biggest lesson was that distributed teams require intentional design. You can't replicate in-person rituals and expect them to work across time zones. Async-first with intentional sync points worked far better than trying to schedule everything synchronously. The other key insight was that PM's role as a bridge between technical and business perspectives becomes even more critical when teams are distributed—clarity and over-communication are not optional.",
    tags: ["Leadership", "Execution", "Cross-Functional"],
    image: "",
    imageAlt: ""
  },
];
