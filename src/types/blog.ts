export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  showHeroImage?: boolean; // Optional: controls if image displays on page (defaults to true)
  content: string;
}
