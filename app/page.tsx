import { HomeAbout } from '@/lib/constants';
import Hero from '@/sections/home/Hero';
import About from '@/components/About';
import { Services } from '@/sections/home/Services';
import { Portfolio } from '@/sections/home/Portfolio';
import { Blog } from '@/sections/home/Blog';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <About
        title={HomeAbout.title}
        description={HomeAbout.description}
        features={HomeAbout.features}
      />
      <Services />
      <Portfolio />
      <Blog />
      <CTA
        title='Ready to Take Your Business to the Next Level?'
        description=''
        cta='Contact Us Today'
      />
    </div>
  );
}
