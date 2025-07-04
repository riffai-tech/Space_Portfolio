import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.ibb.co",'images.pexels.com'], // Add the domain of your external image
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