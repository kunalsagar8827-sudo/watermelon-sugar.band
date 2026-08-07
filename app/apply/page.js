import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";

export const metadata = {
  title: "Apply for Auditions",
  description:
    "Apply for Watermelon Sugar Band auditions — vocals, guitar, bass, drums, keyboard, management, and content creation roles. Auditions open October 2026.",
};

export default function ApplyPage() {
  return (
    <main>
      <section className="relative pt-32 sm:pt-40 pb-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[70vh] rounded-full bg-sunset opacity-40 blur-3xl animate-drift" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-night" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-melon uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            Auditions &middot; October 2026
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-cream mb-5">
            Apply Now
          </h1>
          <p className="text-cream/60 max-w-xl mx-auto">
            Four short steps. Tell us who you are, what you play, and why you want
            in. We'll be in touch closer to October.
          </p>
        </div>
      </section>

      <section className="relative px-6 sm:px-10 lg:px-20 pb-28">
        <ApplyForm />
      </section>

      <Footer />
    </main>
  );
}
