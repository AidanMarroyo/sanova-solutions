import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flowbite.s3.amazonaws.com',
      },
      {
        hostname: 'firebasestorage.googleapis.com',
      },
    {
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
    },
    {
      protocol: 'https',
      hostname: 'commons.wikimedia.org',
    },
    ],
  },
};

export default nextConfig;