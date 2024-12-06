import { Intro } from '@/sections/about/Intro';
import { Team } from '@/sections/about/Team';
import Features from '@/components/Features';
import { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { AboutusFeatures } from '@/lib/constants';

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
