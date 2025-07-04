import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['https://images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;