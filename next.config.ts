import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable automatic AGENTS.md generation at root since our canonical AGENTS.md lives in Docs/
  agentRules: false,
  async rewrites() {
    return [
      {
        source: "/Profile.jpeg",
        destination: "/api/profile-photo",
      },
      {
        source: "/Profile.jpg",
        destination: "/api/profile-photo",
      },
    ];
  },
};

export default nextConfig;
