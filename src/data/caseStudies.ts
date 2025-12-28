import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "UX Teardown Methodology",
    platform: "Veterinary Practice Management Software",
    year: "2025",
    description:
      "Developed systematic research approach across 14+ user studies that uncovered 50% of users facing blocking technical issues. Shifted entire product roadmap from feature polish to foundational reliability.",
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
    tags: ["User Research", "Product Strategy", "Methodology"],
    image: "UX_Teardown_Example.png",
    imageAlt: "Office Visit Journey UX Teardown showing 5 workflow stages with color-coded sections, annotated screens, and identified friction points"
  },
  {
    id: 2,
    title: "Cornerstone Help Hub - Cloud Migration & Virtual Assistant",
    platform: "Enterprise Veterinary Practice Management Software",
    year: "2022-2023",
    description:
      "Led greenfield development of cloud-based help platform from concept through production deployment, serving 1,300+ veterinary practices. Achieved 90% virtual assistant adoption and migrated 1,000+ legacy help paths in 12 months.",
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
    tags: ["Product Strategy", "Platform Development", "Cross-Functional Leadership"],
    image: "Cornerstone_Help_Hub.png",
    imageAlt: "Cornerstone Help Hub modern interface showing searchable help center with category navigation and virtual assistant",
    liveUrl: "https://cornerstonehelphub.com"
  },
];
