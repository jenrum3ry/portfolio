import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import { ROUTES } from "@/lib/routes";
import { trackBlogPostView } from "@/lib/analytics";
import { useScrollTracking } from "@/hooks/use-analytics";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  // Track scroll depth for engagement metrics
  useScrollTracking();

  // Track blog post view
  useEffect(() => {
    if (post) {
      trackBlogPostView(post.title, post.slug);
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-semibold mb-4">
              Post Not Found
            </h1>
            <Link
              to={ROUTES.BLOG}
              className="inline-flex items-center font-body text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} | Jen Rumery`}
        description={post.excerpt}
        image={post.image}
        type="article"
        url={ROUTES.BLOG_POST(post.slug)}
      />
      {/* Back Link */}
      <section className="bg-secondary/30 py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to={ROUTES.BLOG}
            className="inline-flex items-center py-2 px-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-10">
              <span className="px-4 py-1.5 text-xs font-body font-semibold bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-body text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="text-sm font-body text-muted-foreground">
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-16 pb-10 border-b-2 border-border">
              {post.title}
            </h1>

            {/* Hero Image */}
            {post.image && post.showHeroImage !== false && (
              <div className="mb-16">
                <img
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
