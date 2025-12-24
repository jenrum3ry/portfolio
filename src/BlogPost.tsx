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
      <section className="bg-secondary/30 py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
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
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8">
              {post.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
                prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:font-body prose-ul:text-muted-foreground
                prose-li:text-muted-foreground
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
