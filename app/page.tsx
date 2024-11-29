import { CTA } from '@/components/CTA';
import About from '@/components/About';
import { Blog } from '@/sections/home/Blog';
import Hero from '@/sections/home/Hero';
import { Portfolio } from '@/sections/home/Portfolio';
import { Services } from '@/sections/home/Services';

export default function Home() {
  return (
    <div>
      <Hero />
      <About
        title='Why Choose Sanova Solutions?'
        description='Our clients choose Sanova Solutions for innovative, reliable, and'
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
