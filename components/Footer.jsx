import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 px-6 sm:px-10 lg:px-20 py-14">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl text-cream mb-2">
            Watermelon Sugar <span className="font-script text-coral text-xl">Band</span>
          </p>
          <p className="text-sm text-cream/50">Music. Passion. Connection.</p>
        </div>

        <div className="text-sm text-cream/60 space-y-2">
          <p className="uppercase tracking-[0.2em] text-xs text-cream/40 mb-3">Contact</p>
          <a href="tel:+918882767450" className="block hover:text-cream transition-colors">
            +91 88827 67450
          </a>
          <p>Meerut, Uttar Pradesh, India</p>
        </div>

        <div className="text-sm text-cream/60 space-y-2">
          <p className="uppercase tracking-[0.2em] text-xs text-cream/40 mb-3">Explore</p>
          <Link href="/" className="block hover:text-cream transition-colors">
            Home
          </Link>
          <Link href="/blog" className="block hover:text-cream transition-colors">
            Journal
          </Link>
          <Link href="/apply" className="block hover:text-cream transition-colors">
            Apply Now
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/40">
        <p>&copy; {new Date().getFullYear()} Watermelon Sugar Band. Est. 2025.</p>
        <p>watermelonsugar.band</p>
      </div>
    </footer>
  );
}
