import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'flowbite.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
