"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ROLES = ["VOCALS", "GUITAR", "BASS", "DRUMS", "KEYBOARD", "MANAGEMENT", "CONTENT"];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col">
      {/* aurora glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[140vw] h-[90vh] rounded-full bg-sunset opacity-60 blur-3xl animate-drift" />
        <div className="absolute top-1/3 right-0 w-[60vw] h-[60vh] rounded-full bg-dusk/40 blur-3xl animate-drift-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-night/60 to-night" />
      </div>

      {/* rising embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1 w-1 rounded-full bg-amber/70"
            style={{
              left: `${(i * 7.3) % 100}%`,
              animation: `rise ${8 + (i % 5)}s linear ${i * 0.9}s infinite`,
              // @ts-ignore
              "--drift": `${(i % 2 === 0 ? 1 : -1) * (20 + i * 3)}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 sm:pt-14">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Link
            href="/apply"
            className="group flex items-center gap-3 sm:gap-4 glass rounded-full pr-5 sm:pr-7 pl-2 py-2 border border-cream/10 hover:border-melon/40 transition-colors"
          >
            <img
              src="/hero-poster.jpg"
              alt="Watermelon Sugar Band audition poster"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border border-cream/20"
            />
            <span className="text-[11px] sm:text-sm uppercase tracking-[0.25em] text-cream/80 group-hover:text-cream transition-colors">
              Audition &middot; Apply Now &rarr;
            </span>
          </Link>
        </motion.div>

        <motion.svg
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          width="46"
          height="30"
          viewBox="0 0 46 30"
          fill="none"
          className="mb-5 text-cream"
        >
          <path
            d="M2 28C2 12 16 2 30 4C36 5 44 10 44 10C44 10 30 2 16 8C6 12 2 20 2 28Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M8 24 L8.5 24.5 M14 20 L14.5 20.5 M20 17 L20.5 17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </motion.svg>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display font-black uppercase leading-[0.95] text-cream text-[13vw] sm:text-[8vw] lg:text-[6.2vw] tracking-tight relative"
        >
          Watermelon Sugar
          <span className="font-script font-normal text-coral text-[7vw] sm:text-[3.4vw] lg:text-[2.6vw] absolute -right-2 sm:right-0 -top-2 sm:-top-4 rotate-[-6deg] normal-case">
            Band
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-5 flex items-center gap-3 sm:gap-5 text-cream/90"
        >
          <span className="h-px w-8 sm:w-16 bg-cream/40" />
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold">
            Auditions Open
          </p>
          <span className="h-px w-8 sm:w-16 bg-cream/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-3 text-[11px] sm:text-sm tracking-[0.25em] uppercase text-cream/70"
        >
          Vocals &middot; Guitar &middot; Bass &middot; Drums &middot; Keyboard &middot; Management
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-9"
        >
          <Link
            href="/apply"
            className="group relative inline-flex items-center gap-3 rounded-full px-8 py-3.5 bg-cream text-night font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm shadow-glow transition-transform hover:scale-105"
          >
            Apply Now
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto flex flex-col items-center">
        <div className="w-full overflow-hidden border-t border-cream/10 bg-night/40 backdrop-blur-sm py-3">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-cream/50 text-xs sm:text-sm tracking-[0.3em] uppercase">
            {[...ROLES, ...ROLES].map((r, i) => (
              <span key={i} className="flex items-center gap-10">
                {r}
                <span className="text-melon">&#9670;</span>
              </span>
            ))}
          </div>
        </div>
        <div className="w-full px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-cream/60 tracking-wide">
          <span>Music. Passion. Connection.</span>
          <span>watermelonsugar.band</span>
          <span>Est. 2025</span>
        </div>
      </div>
    </section>
  );
}
