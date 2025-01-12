import Features from './Features';
import Hero from './Hero';

import { CTA } from '@/components/CTA';
import { Portfolio } from './Portfolio';
import UniqueSellingProposition from './USP';
import Pricing from './Pricing';
import { Speed } from './Speed';
import Blog from './Blog';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <UniqueSellingProposition />
      <Speed />
      <Pricing />
      <Portfolio />
      <CTA
        title='Ready to Take Your Business to the Next Level?'
        description=''
        cta='Contact Us Today'
      />
      <Blog />
    </div>
  );
}
