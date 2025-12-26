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
            <div className="mb-16">
              <img 
                src="/portfolio/pm-strategy-illustration.png" 
                alt="Strategic product management illustration showing multiple paths and course corrections"
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Content */}
            <div
              className="prose prose-xl max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                prose-h1:hidden
                prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:leading-snug prose-h2:scroll-mt-20
                prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-12
                prose-p:font-body prose-p:text-foreground/80 prose-p:leading-loose prose-p:mb-8 prose-p:text-[1.25rem] md:prose-p:text-[1.3125rem]
                prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                prose-strong:text-foreground prose-strong:font-extrabold prose-strong:block prose-strong:mt-12 prose-strong:mb-4 prose-strong:text-[1.375rem]
                prose-ul:my-10 prose-ul:font-body
                prose-li:text-foreground/80 prose-li:my-4 prose-li:text-[1.25rem] prose-li:leading-loose
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/70 prose-blockquote:my-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
