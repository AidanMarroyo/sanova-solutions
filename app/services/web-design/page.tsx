import Hero from '../Hero';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Steps } from './Steps';

export default function page() {
  return (
    <MaxWidthWrapper>
      <Hero
        heading='WEB DESIGN'
        subheading='EXPERTLY BUILT WEBSITES WITHOUT COMPROMISE'
        description='At Sanova Web Solutions, we take a distinct approach to web design. Instead of relying on page builders or platforms like WordPress, we develop every website from scratch. Our handcrafted code ensures each site is lightweight, highly optimized, and free from unnecessary clutter or bloat. The result? Websites that load at lightning speed, achieve top-tier Google PageSpeed Insights scores, and deliver unparalleled performance.'
      />
      <Steps />
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-start'>
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
    </MaxWidthWrapper>
  );
}
