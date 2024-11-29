import { Intro } from '@/sections/about/Intro';
import { Team } from '@/sections/about/Team';
import About from '@/components/About';
import { Metadata } from 'next';
import React from 'react';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Sanova Solutions | Empowering Business Growth',
  description:
    'Learn about Sanova Solutions—our mission, values, and the passionate team dedicated to helping businesses start, scale, and thrive globally.',
};

function page() {
  return (
    <div>
      <Intro />
      <Team />
      <About title='What Sets Us Apart ?' description='' />
      <CTA
        title='Let’s Build Your Success Story'
        description=''
        cta='Get in Touch'
      />
    </div>
  );
}

export default page;
