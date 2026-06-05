import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All scene images are downloaded locally — no remote patterns needed.
    // If hotlinked Stitch assets are used as fallback during development, add:
    // remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
