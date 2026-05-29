import type { NextConfig } from "next";

const repo = "copilot-week-in-review";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: "out",
};

export default nextConfig;
