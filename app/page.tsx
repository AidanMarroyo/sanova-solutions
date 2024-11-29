import { CTA } from '@/components/CTA';
import About from '@/sections/home/About';
import { Blog } from '@/sections/home/Blog';
import Hero from '@/sections/home/Hero';
import { Portfolio } from '@/sections/home/Portfolio';
import { Services } from '@/sections/home/Services';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
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
