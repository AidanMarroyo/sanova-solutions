import { Blog } from '@/sections/home/Blog';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Business Tips & Insights | Sanova Solutions Blog',
  description:
    'Stay updated with expert tips, trends, and strategies to start, scale, and market your business effectively.',
};

const page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default page;
