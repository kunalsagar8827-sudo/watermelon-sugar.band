import { posts } from "@/lib/posts";

const SITE_URL = "https://watermelonsugar.band";

export default function sitemap() {
  const staticRoutes = ["", "/apply", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}