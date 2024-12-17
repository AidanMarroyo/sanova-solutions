import { Intro } from '@/app/about-us/Intro';
import { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { Process } from './Process';
import { Team } from './Team';
import Features from '../Features';

export const metadata: Metadata = {
  title: 'About Sanova Web Solutions | Empowering Business Growth',
  description:
    'Learn about Sanova Web Solutions—our mission, values, and the passionate team dedicated to helping businesses start, scale, and thrive globally.',
};

function page() {
  return (
    <div>
      <Intro />
      <Process />
      <Features />
      <Team />
      <CTA
        title='Let’s Build Your Success Story'
        description=''
        cta='Get in Touch'
      />
    </div>
  );
}

export default page;
