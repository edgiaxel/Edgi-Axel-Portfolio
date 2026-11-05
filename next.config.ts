import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable automatic AGENTS.md generation at root since our canonical AGENTS.md lives in Docs/
  agentRules: false,
};

export default nextConfig;
