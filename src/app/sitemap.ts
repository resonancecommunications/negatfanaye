import type { MetadataRoute } from "next";
import { businesses, company } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/businesses", ...businesses.map((b) => `/businesses/${b.slug}`), "/projects", "/about", "/partners", "/contact"];
  return paths.map((path) => ({ url: `${company.url}${path}` }));
}
