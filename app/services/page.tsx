import Features from '@/components/Features';
import { CTA } from '@/components/CTA';
import { HomeFeatures } from '@/lib/constants';
import { Hero } from '@/sections/services/Hero';
import { Services } from '@/sections/services/Services';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title:
    'Business Services by Sanova Solutions| Apps, Websites, E-Commerce, Marketing',
  description:
    'Learn about Sanova Solutions—our mission, values, and the passionate team dedicated to helping businesses start, scale, and thrive globally.',
};

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Features
        title='Why Choose Our Services?'
        description='Our solutions are crafted with care, innovation, and your success in mind. Here’s why businesses choose Sanova Solutions'
        features={HomeFeatures.features}
      />
      <CTA
        description=''
        title='Ready to Elevate Your Business?'
        cta='Contact Us Today'
      />
    </div>
  );
};

export default page;
