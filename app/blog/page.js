import Link from "next/link";
import Footer from "@/components/Footer";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Journal",
  description:
    "Notes from the build — the story of Watermelon Sugar Band, from its first audition to the stage in Korea.",
};

export default function BlogIndexPage() {
  return (
    <main>
      <section className="relative pt-32 sm:pt-40 pb-20 px-6 sm:px-10 lg:px-20 bg-sunset-soft">
        <div className="max-w-4xl mx-auto">
          <p className="text-melon uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            The Journal
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-cream mb-4">
            Notes from the build.
          </h1>
          <p className="text-cream/60 max-w-xl">
            The story of Watermelon Sugar, written as it happens &mdash; from an
            empty lineup in Meerut to whatever stage comes next.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 pb-24">
        <div className="max-w-4xl mx-auto divide-y divide-cream/10">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-8"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-2">
                  {new Date(p.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="font-display text-2xl text-cream group-hover:text-coral transition-colors">
                  {p.title}
                </p>
                <p className="text-sm text-cream/50 mt-1 max-w-lg">{p.excerpt}</p>
              </div>
              <span className="text-coral text-sm uppercase tracking-[0.2em] shrink-0">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
