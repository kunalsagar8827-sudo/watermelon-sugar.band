"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const ROLES = [
  { name: "Vocals / Lead Singer", note: "Carries the melody and the moment on stage." },
  { name: "Guitarist", note: "Rhythm and lead lines that give the sound its edge." },
  { name: "Bassist", note: "The low end that holds the whole performance together." },
  { name: "Drummer", note: "Timing, energy, and the pulse of every track." },
  { name: "Keyboardist", note: "Texture, harmony, and the production layer live." },
  { name: "Manager", note: "Runs logistics, bookings, and keeps the band moving." },
  { name: "Content Creator", note: "Shoots and edits the story as it's being built." },
];

export default function Roles() {
  return (
    <section className="relative py-20 sm:py-28 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-melon uppercase tracking-[0.3em] text-xs font-semibold mb-4"
        >
          Who We're Looking For
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl text-cream mb-12 max-w-2xl"
        >
          Seven roles. One lineup.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
            >
              <TiltCard className="glass rounded-xl p-6 h-full hover:border-melon/40 border border-transparent">
                <span className="font-display text-3xl text-cream/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl text-cream mt-3 mb-2">{r.name}</p>
                <p className="text-sm text-cream/60 leading-relaxed">{r.note}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
