export interface CaseStudy {
  id: number;
  title: string;
  platform: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  problem?: string;
  myRole?: string;
  approach?: string;
  learnings?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}
