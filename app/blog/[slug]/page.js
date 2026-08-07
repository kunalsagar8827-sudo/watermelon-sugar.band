import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article className="relative pt-32 sm:pt-40 pb-24 px-6 sm:px-10 lg:px-20 bg-sunset-soft">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-[0.2em] text-cream/50 hover:text-cream transition-colors"
          >
            &larr; Journal
          </Link>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mt-8 mb-3">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl text-cream mb-10 leading-tight">
            {post.title}
          </h1>
          <div className="space-y-6 text-cream/75 text-base sm:text-lg leading-relaxed">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-cream/10">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 bg-cream text-night font-semibold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
            >
              Apply Now &rarr;
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
