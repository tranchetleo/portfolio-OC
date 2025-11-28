import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "out",
  output: 'export',
  assetPrefix: '/oc-portfolio', // Adjust this if you are deploying to a subpath
  basePath: '/oc-portfolio', // Adjust this if you are deploying to a subpath
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  
  // Important pour l'export statique
  env: {
    NEXT_PUBLIC_TRACKER_URL: process.env.NEXT_PUBLIC_TRACKER_URL,
    NEXT_PUBLIC_TRACKER_API_KEY: process.env.NEXT_PUBLIC_TRACKER_API_KEY,
  },

  // Example: Set effective cache durations for static assets
  headers: async () => [
    {
      source: '/_next/static/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=1440, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
