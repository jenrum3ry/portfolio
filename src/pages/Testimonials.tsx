import Layout from "@/components/layout/Layout";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Sarah is one of the best product managers I've worked with. She has an exceptional ability to translate complex business requirements into elegant user experiences. Her strategic thinking and execution are unmatched.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "TechCorp",
  },
  {
    id: 2,
    quote:
      "Working with Sarah transformed how we approach product development. She brought structure, clarity, and a relentless focus on customer outcomes. Our team's velocity doubled under her leadership.",
    author: "Jennifer Liu",
    role: "CEO",
    company: "DataFlow",
  },
  {
    id: 3,
    quote:
      "Sarah's ability to balance user needs with business goals is remarkable. She doesn't just build features—she builds products that customers love and that drive real business results.",
    author: "David Park",
    role: "Head of Product",
    company: "ShopEase",
  },
  {
    id: 4,
    quote:
      "I've seen Sarah turn around struggling products and launch new ones from scratch. Her combination of analytical rigor and creative problem-solving makes her invaluable.",
    author: "Amanda Foster",
    role: "COO",
    company: "StartupXYZ",
  },
  {
    id: 5,
    quote:
      "Sarah mentored me during my transition into product management. Her guidance on stakeholder management and prioritization frameworks has been instrumental in my growth.",
    author: "Chris Taylor",
    role: "Senior PM",
    company: "TechCorp",
  },
  {
    id: 6,
    quote:
      "What sets Sarah apart is her genuine curiosity about users. She spends more time talking to customers than anyone I know, and it shows in the products she delivers.",
    author: "Rachel Green",
    role: "UX Research Lead",
    company: "DataFlow",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              What People Say
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Testimonials
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Kind words from colleagues, leaders, and collaborators I've had 
              the privilege to work with throughout my career.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className="bg-card border border-border rounded-lg p-6 md:p-8 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="font-body text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
