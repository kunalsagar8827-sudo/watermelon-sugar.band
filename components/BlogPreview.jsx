"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { posts } from "@/lib/posts";

export default function BlogPreview() {
  return (
    <section className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-20 border-t border-cream/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-melon uppercase tracking-[0.3em] text-xs font-semibold mb-4"
            >
              The Journal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl text-cream"
            >
              Notes from the build.
            </motion.h2>
          </div>
          <Link
            href="/blog"
            className="text-sm uppercase tracking-[0.2em] text-cream/60 hover:text-cream transition-colors"
          >
            All posts &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${p.slug}`}>
                <TiltCard className="glass rounded-xl p-6 h-full flex flex-col hover:border-melon/40 border border-transparent">
                  <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-3">
                    {new Date(p.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p className="font-display text-xl text-cream mb-3">{p.title}</p>
                  <p className="text-sm text-cream/60 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 text-xs uppercase tracking-[0.2em] text-coral">
                    Read &rarr;
                  </span>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
