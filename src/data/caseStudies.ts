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
      "AI-powered clinical documentation tools were launching across 1,300+ veterinary practices with unknown adoption patterns. Traditional user surveys and product analytics weren't revealing why adoption varied so dramatically between practices - some thrived while others abandoned the tools entirely within weeks.",
    myRole:
      "Led user research strategy and execution. Designed and conducted 14+ ethnographic studies, developed the UX Teardown methodology, synthesized insights into actionable roadmap changes, and presented findings to executive leadership that shifted product strategy.",
    approach:
      "I developed a systematic, ethnographic research approach that combined journey mapping, visual annotation, and pattern analysis. Rather than asking users what they wanted, I watched them work - mapping complete workflows across 60+ screens and 7 workflow stages, identifying friction points in real time, and using color-coded tagging to surface patterns across multiple practices. This translated directly into prioritized product roadmaps.",
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
      "Veterinarians needed AI-powered documentation tools to reclaim clinical time, but adoption would only succeed if the AI was accurate, trustworthy, and integrated seamlessly into existing workflows. Traditional waterfall development would have taken 6+ months - too slow for a competitive market.",
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
      "The biggest learning was that shipping fast doesn't mean shipping recklessly. By focusing relentlessly on one high-value use case (patient summarization) and setting a clear accuracy threshold (95%), we maintained quality while moving at startup speed. The beta program was essential - real veterinarians surfaced edge cases and workflow issues that we would never have anticipated internally.",
    tags: ["AI Product", "0-to-1", "Production Launch"],
    image: "SAI mockup example.png",
    imageAlt: "AI-powered patient summarization interface mockup showing clinical documentation workflow"
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
      "Platform products require the same user research rigor as customer-facing products. Treating developers as users - interviewing them, mapping their workflows, prioritizing their friction points - was just as valuable as traditional user research. The other key learning was that advocating for infrastructure isn't about technology for its own sake; it's about quantifying business risk and showing leadership why reliability matters to revenue.",
    tags: ["Platform PM", "20+ Integrations", "Developer Experience"],
    image: "",
    imageAlt: ""
  },
  {
    id: 5,
    title: "Cornerstone Help Hub - Cloud Migration & Virtual Assistant",
    platform: "Enterprise Veterinary Practice Management Software",
    year: "2022-2023",
    description:
      "Led greenfield development of cloud-based help platform from concept through production deployment, serving 6,500+ veterinary practices. Achieved 90% virtual assistant adoption and migrated 1,000+ legacy help paths in 12 months.",
    problem:
      "Cornerstone's server-based architecture locked help documentation inside the software's F1 system. Every content update required a full software release cycle, creating months-long lag between identifying user confusion and publishing updated help. With over 1,000 F1 help paths requiring migration and no cloud infrastructure in place, the team needed a strategic approach that balanced velocity, quality, and user impact without overwhelming the organization.",
    myRole:
      "Owned end-to-end platform development from concept to production integration. Defined product vision and strategy, coordinated cross-functional teams (customer support, education, development, training, customer success, content), established data-driven prioritization framework, managed early adopter beta program, and executed 12-month strategic migration across 1,000+ help paths.",
    approach:
      "Rather than attempting a big-bang migration, I applied an 80/20 framework based on a full year of support data (call volume, chat transcripts, user feedback). First wave addressed 80% of support volume with highest-impact help content. Second wave completed comprehensive migration. This phased approach validated the platform with real users before committing to full-scale migration, reducing risk while maintaining velocity.",
    challenge:
      "Cornerstone's server-based architecture locked help documentation inside the software's F1 system. Every content update required a full software release cycle, creating months-long lag between identifying user confusion and publishing updated help. With over 1,000 F1 help paths requiring migration, the team needed a strategic approach that balanced velocity, quality, and user impact.",
    solution:
      "Led end-to-end platform development from concept to production integration. Built modern cloud-based help hub (cornerstonehelphub.com) with integrated virtual assistant using data-driven prioritization. Analyzed full year of support data (call volume, chat transcripts, user feedback) and applied 80/20 framework: first wave addressed 80% of support volume, second wave completed comprehensive migration. Validated approach with early adopter beta program before coordinating cross-functional rollout across customer support, education, development, training, customer success, and content teams to execute 12-month strategic migration.",
    results: [
      "90% virtual assistant adoption as first support touchpoint",
      "Migrated 1,000+ help paths from server-based system in 12 months",
      "Decoupled content updates from software release cycle (hours vs. months)",
      "Built multi-channel support flow: virtual assistant → chat → phone",
      "Reduced routine support call volume through self-service deflection",
      "Established 80/20 prioritization framework adopted organization-wide",
    ],
    metrics: [
      { label: "Virtual Assistant Adoption", value: "90%" },
      { label: "Help Paths Migrated", value: "1,000+" },
      { label: "Practices Served", value: "6,500+" },
      { label: "Content Update Time", value: "Hours vs Months" }
    ],
    learnings:
      "The most valuable insight was that phased migration based on actual usage data dramatically reduced risk compared to a big-bang approach. By analyzing a full year of support interactions, we identified the 20% of help content that addressed 80% of user needs. This allowed us to validate the platform with real users before committing to full-scale migration. The other key learning was that cross-functional coordination at this scale requires explicit process design - we couldn't rely on ad-hoc communication across 7 different teams.",
    tags: ["Product Strategy", "Platform Development", "Cross-Functional Leadership"],
    image: "Cornerstone_Help_Hub.png",
    imageAlt: "Cornerstone Help Hub modern interface showing searchable help center with category navigation and virtual assistant",
    liveUrl: "https://cornerstonehelphub.com"
  },
];
