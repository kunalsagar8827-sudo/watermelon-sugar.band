import { posts } from "@/lib/posts";

const SITE_URL = "https://watermelonsugar.band";

export default function sitemap() {
  const staticRoutes = ["", "/apply", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...postRoutes];
}