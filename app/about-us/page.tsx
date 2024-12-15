import { Intro } from '@/sections/about/Intro';

import Features from '@/components/Features';
import { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { AboutusFeatures } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Sanova Web Solutions | Empowering Business Growth',
  description:
    'Learn about Sanova Web Solutions—our mission, values, and the passionate team dedicated to helping businesses start, scale, and thrive globally.',
};

function page() {
  return (
    <div>
      <Intro />
      {/* <Team /> */}
      <Features
        title={AboutusFeatures.title}
        description={AboutusFeatures.description}
        features={AboutusFeatures.features}
      />
      <CTA
        title='Let’s Build Your Success Story'
        description=''
        cta='Get in Touch'
      />
    </div>
  );
}

export default page;
