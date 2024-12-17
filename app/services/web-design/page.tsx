import Hero from '../Hero';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Steps } from '../Steps';
import { CTA } from '@/components/CTA';
import Features from '@/app/Features';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Development | Sanova Web Solutions',
  description:
    'At Sanova Web Solutions, we take a unique approach to web design and development. Instead of relying on WordPress or page builders, we custom code every website from the ground up. This allows us to create tailored designs with zero unnecessary bloat, ensuring your site is fast, secure, and high-performing.',
};
export default function page() {
  const content = [
    {
      id: 1,
      contentTitle: '1. Faster Websites for Better Results',
      content: `A slow-loading website can cost you leads and conversions. In
            today’s competitive landscape, businesses need websites that engage
            users instantly. Studies show that if your site takes longer than
            three seconds to load, nearly half of visitors will leave. Our
            custom-coded sites load in under one second, ensuring you retain
            traffic and convert visitors into customers.`,
    },
    {
      id: 2,
      contentTitle: '2. Enhanced Ad Performances',
      content: `Faster websites also make your Google Ads campaigns more effective.
            Sites with faster load times improve ad quality scores, leading to
            lower cost-per-click (CPC) rates and better ROI on your ad spend.`,
    },
    {
      id: 3,
      contentTitle: '3. Better Search Engine Rankings',
      content: `Google rewards fast websites with higher rankings. A combination of
            superior load times and an optimized user experience boosts your
            visibility in search results. Plus, our sites are designed to excel
            in Google’s Core Web Vitals, helping you gain an edge over
            competitors.`,
    },
    {
      id: 4,
      contentTitle: '4. Improved Google Business Profile Visibility',
      content: `A high-performing website supports your Google Business Profile by
            contributing to better map rankings and local visibility. When
            paired with glowing reviews, optimized images, and a complete
            profile, your online presence becomes a powerful lead-generation
            tool.`,
    },
  ];
  return (
    <MaxWidthWrapper>
      <Hero
        heading='WEB DESIGN'
        subheading='EXPERTLY BUILT WEBSITES WITHOUT COMPROMISE'
        description='At Sanova Web Solutions, we take a distinct approach to web design. Instead of relying on page builders or platforms like WordPress, we develop every website from scratch. Our handcrafted code ensures each site is lightweight, highly optimized, and free from unnecessary clutter or bloat. The result? Websites that load at lightning speed, achieve top-tier Google PageSpeed Insights scores, and deliver unparalleled performance.'
        src='/images/webdesign.webp'
      />
      <Steps heading='WHY OUR APPROACH MAKES A DIFFERENCE' content={content} />
      <div className='pt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-start'>
        <div className='space-y-8'>
          <div>
            <h3 className='mb-4 text-2xl font-extrabold text-white'>
              SEO BUILT INTO EVERY WEBSITE
            </h3>
            <p className='text-lg font-normal text-white'>
              Web design and SEO are two sides of the same coin. A well-crafted
              website lays the groundwork for success, but SEO ensures your site
              reaches its audience. Our in-house SEO experts go beyond the
              basics, delivering strategies that drive real results.
            </p>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-extrabold text-white'>
            OUR SEO PROCESS INCLUDES:
          </h3>
          <ul>
            <li className='py-4'>
              <span className='font-extrabold text-lg'>
                Technical Foundation:{' '}
              </span>
              Identifying and fixing issues like broken links, poor heading
              structures, or schema errors to enhance site performance.
            </li>
            <li className='pb-4'>
              <span className='font-extrabold text-lg'>
                Content Optimization:{' '}
              </span>
              Using keyword research to build pages that rank for valuable terms
              in your industry.
            </li>
            <li className='pb-4'>
              <span className='font-extrabold text-lg'>
                Local SEO Strategies:{' '}
              </span>
              Improving your presence in Google Maps for “near me” searches
              through a complete audit of your business profiles and citations.
            </li>
            <li className='pb-4'>
              <span className='font-extrabold text-lg'>Link Building: </span>
              Securing high-quality backlinks to improve domain authority and
              search rankings.
            </li>
          </ul>
        </div>
      </div>
      <Features />
      <CTA
        description=''
        title='Ready to Elevate Your Business?'
        cta='Contact Us Today'
      />
    </MaxWidthWrapper>
  );
}
