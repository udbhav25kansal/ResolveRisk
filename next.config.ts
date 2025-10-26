import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty turbopack config to silence the warning
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
