import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { trackBlogPostClick } from "@/lib/analytics";
import { useScrollTracking } from "@/hooks/use-analytics";

const Blog = () => {
  // Track scroll depth for engagement metrics
  useScrollTracking();

  const handleBlogClick = (postTitle: string, postSlug: string) => {
    trackBlogPostClick(postTitle, postSlug);
  };

  return (
    <Layout>
      <SEO
        title="Blog | Jen Rumery - Product Leadership Insights"
        description="Thoughts on product management, leadership, and building products that make a difference."
        url={ROUTES.BLOG}
      />
      {/* Hero */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4">
              INSIGHTS
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Blog
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Thoughts on product management, leadership, and building products 
              that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="text-xs font-body text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  <Link
                    to={ROUTES.BLOG_POST(post.slug)}
                    onClick={() => handleBlogClick(post.title, post.slug)}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  to={ROUTES.BLOG_POST(post.slug)}
                  onClick={() => handleBlogClick(post.title, post.slug)}
                  className="inline-flex items-center font-body text-sm font-medium text-primary hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
