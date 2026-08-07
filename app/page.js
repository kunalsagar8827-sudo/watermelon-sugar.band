import Hero from "@/components/Hero";
import About from "@/components/About";
import Roles from "@/components/Roles";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Roles />
      <BlogPreview />
      <Footer />
    </main>
  );
}
