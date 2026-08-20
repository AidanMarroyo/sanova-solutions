import Features from './Features';

import { CTA } from '@/components/CTA';
import UniqueSellingProposition from './USP';
import { Speed } from './Speed';
import Blog from './Blog';
import TestHero from './TestHero';
<<<<<<< HEAD
=======
import Hero from './Hero';
>>>>>>> main

export default function Home() {
  return (
    <div>
      <TestHero />
      <Features />
      <UniqueSellingProposition />
      <Speed />
      {/* <Portfolio /> */}
      <CTA
        title='Ready to Take Your Business to the Next Level?'
        description=''
        cta='Contact Us Today'
      />
      <Blog />
    </div>
  );
}
