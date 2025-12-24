import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl font-semibold mb-4">
              Post Not Found
            </h1>
            <Link
              to="/blog"
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
      {/* Back Link */}
      <section className="bg-secondary/30 py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center font-body text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8">
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

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-12 pb-8 border-b border-border">
              {post.title}
            </h1>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="/portfolio/pm-strategy-illustration.png" 
                alt="Strategic product management illustration showing multiple paths and course corrections"
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:leading-tight
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-bold
                prose-ul:font-body prose-ul:text-muted-foreground prose-ul:my-6
                prose-li:text-muted-foreground prose-li:my-2 prose-li:text-lg
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
