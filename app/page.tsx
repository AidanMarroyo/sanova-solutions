import { HomeFeatures } from '@/lib/constants';
import Hero from '@/sections/home/Hero';
import Features from '@/components/Features';
import { Services } from '@/sections/home/Services';

import { Blog } from '@/sections/home/Blog';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features
        title={HomeFeatures.title}
        description={HomeFeatures.description}
        features={HomeFeatures.features}
      />
      <Services />
      {/* <Portfolio /> */}
      <Blog />
      <CTA
        title='Ready to Take Your Business to the Next Level?'
        description=''
        cta='Contact Us Today'
      />
    </div>
  );
}
