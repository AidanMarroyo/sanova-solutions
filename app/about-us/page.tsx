import { Intro } from '@/sections/about/Intro';
import { Team } from '@/sections/about/Team';
import About from '@/sections/home/About';
import { Metadata } from 'next';
import React from 'react';

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
      <About />
    </div>
  );
}

export default page;
