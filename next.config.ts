import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/gtk',
        destination: 'https://api-uptdsdn2kalimati.vercel.app/api/v1/gtk',
      },
    ];
  },
};

export default nextConfig;
