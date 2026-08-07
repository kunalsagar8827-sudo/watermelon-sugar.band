"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const STOPS = [
  {
    place: "Meerut, India",
    note: "Where it starts. Building the lineup, the sound, and the stage presence from the ground up.",
  },
  {
    place: "India, on tour",
    note: "Earning the room one show at a time, sharpening the act until it travels.",
  },
  {
    place: "Korea, the dream",
    note: "The stage we're aiming for. Everything before this is preparation for it.",
  },
];

export default function About() {
  return (
    <section className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="absolute inset-0 bg-sunset-soft pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-melon uppercase tracking-[0.3em] text-xs font-semibold mb-4"
          >
            The Vision
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl leading-[1.1] text-cream mb-6"
          >
            Built in India.
            <br />
            Aimed at Korea.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-cream/70 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            <p>
              Watermelon Sugar is starting from zero, on purpose. No members yet, no
              shortcuts &mdash; just a clear idea of the sound we want to make and the
              stage we're building toward.
            </p>
            <p>
              Auditions open in <span className="text-cream font-semibold">October 2026</span>,
              once we've got the time, the funds, and the setup in place to do this
              properly. Every role, from the mic to the mixing board to the camera,
              gets filled by someone who wants to build something real, not join
              something already finished.
            </p>
            <p>
              The plan is simple: earn it in India first. If it lands here, the next
              stage is Korea.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="tel:+918882767450"
            className="mt-8 inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors text-sm tracking-wide"
          >
            <span className="h-8 w-8 rounded-full border border-cream/30 flex items-center justify-center">
              &#9742;
            </span>
            +91 88827 67450
          </motion.a>
        </div>

        <TiltCard className="glass rounded-2xl p-7 sm:p-9 shadow-card">
          <p className="uppercase tracking-[0.3em] text-[11px] text-cream/50 mb-6">
            The Route
          </p>
          <ol className="space-y-7">
            {STOPS.map((s, i) => (
              <li key={s.place} className="relative pl-8">
                <span className="absolute left-0 top-1 h-4 w-4 rounded-full border border-melon/70 bg-melon/20" />
                {i !== STOPS.length - 1 && (
                  <span className="absolute left-[7px] top-6 h-[calc(100%-8px)] w-px bg-cream/15" />
                )}
                <p className="font-display text-lg text-cream mb-1">{s.place}</p>
                <p className="text-sm text-cream/60 leading-relaxed">{s.note}</p>
              </li>
            ))}
          </ol>
        </TiltCard>
      </div>
    </section>
  );
}
