import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keeps old URLs from the previous site working (see docs in README).
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/service", destination: "/businesses", permanent: true },
      { source: "/service/:slug", destination: "/businesses/:slug", permanent: true },
      { source: "/project", destination: "/projects", permanent: true },
      { source: "/project/:slug", destination: "/projects", permanent: true },
      { source: "/project-single", destination: "/projects", permanent: true },
      { source: "/team", destination: "/about#leadership", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog-left-sidebar", destination: "/", permanent: true },
      { source: "/blog-single/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
