import Hero from '../Hero';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

import { CTA } from '@/components/CTA';

import { Steps } from '../Steps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services | Sanova Web Solutions',
  description:
    'Sanova Web Solutions delivers high-impact SEO strategies to help your business rank higher on search engines. From on-page optimization and keyword research to technical SEO and content strategy, we ensure your website drives organic traffic, boosts visibility, and generates leads.',
};

export default function page() {
  const content = [
    {
      id: 1,
      contentTitle: 'Local Service Businesses',
      content: `From foundation repair companies to commercial cleaners, we specialize in helping local service providers rank higher on Google. Our approach enhances your visibility in both the Google Map Pack and the traditional search engine results pages (SERP). We track keyword rankings, website traffic, and lead conversions, making it simple to measure ROI and scale your marketing efforts effectively.`,
    },
    {
      id: 2,
      contentTitle: 'B2B Companies',
      content: `Whether you sell an in-demand product or provide a niche solution, we help B2B businesses use SEO as a powerful lead-generation channel. For products or services that are already being searched for, we focus on competitive keyword strategies. For emerging or niche solutions, we combine audience research and targeted content strategies to create awareness, drive traffic, and convert leads through remarketing and top-of-funnel strategies.`,
    },
    {
      id: 3,
      contentTitle: 'Educational Institutions',
      content: `Music schools, art programs, and other educational organizations can capture 50–100 new leads monthly by competing in local Google searches. We’ll build an SEO framework that ensures your program gets noticed by prospective students and parents.`,
    },
    {
      id: 4,
      contentTitle: 'Other Business Types',
      content: `From medical clinics to travel agencies, we've worked with a wide array of industries across the U.S. and delivered measurable growth. Let’s discuss how we can tailor a strategy to your business.`,
    },
  ];
  return (
    <MaxWidthWrapper>
      <Hero
        heading='SEO SERVICES'
        subheading='SEARCH ENGINE OPTIMIZATION THAT DRIVES RESULTS'
        description='SEO has become more competitive than ever. Our tailored strategies are designed to help you dominate local and national search results. Start generating leads and increasing sales with our proven SEO techniques—reach out today to get started.'
        src='/images/webseo.webp'
      />
      <Steps heading='WHO BENEFITS FROM OUR SEO SERVICES?' content={content} />
      <div className='pt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-items-start'>
        <div className='space-y-8'>
          <div>
            <h3 className='text-2xl font-extrabold text-white'>
              OUR SEO APPROACH
            </h3>
            <ol>
              <li className='py-4 text-white'>
                <span className='font-extrabold text-lg'>
                  1. Building a Strong Technical Foundation:{' '}
                </span>
                Your website must be fast, user-friendly, and free of technical
                errors. With our custom-built websites, you’ll start with a
                solid foundation that outperforms competitors using platforms
                like WordPress, Webflow, or Wix.
                <ul className='py-2 text-sm list-disc pl-5'>
                  <li className='pb-1'>
                    Site crawls to identify and resolve issues like 404 errors,
                    redirect chains, and heading structure.
                  </li>
                  <li className='pb-1'>
                    Optimization of schema data, meta titles, and descriptions
                    for better search engine understanding.
                  </li>
                  <li>
                    Google Core Web Vitals compliance for improved rankings.
                  </li>
                </ul>
              </li>
              <li className='pb-4 text-white'>
                <span className='font-extrabold text-lg'>
                  2. Content Strategy for Maximum Visibility:{' '}
                </span>
                We perform in-depth keyword research to identify the most
                impactful terms for your business. Then we create a network of
                optimized pages designed to rank and convert.
                <ul className='py-2 text-sm list-disc pl-5'>
                  <li className='pb-1'>
                    Local Businesses: Targeted pages like &quot;Painting Company
                    in Hammond, IN&quot; or &quot;Best Pizza in New York
                    City&quot;
                  </li>
                  <li className='pb-1'>
                    E-commerce: Product and category pages optimized for search
                    terms like &quot;Buy Running Shoes Online&quot; or
                    &quot;Affordable Electronics&quot;
                  </li>
                  <li>
                    Service Providers: Pages focused on services like
                    &quot;Emergency Plumbing Services&quot; or &quot;24/7 HVAC
                    Repair&quot;
                  </li>
                </ul>
              </li>
              <li className='pb-4 text-white'>
                <span className='font-extrabold text-lg'>
                  3. Local SEO for Map Pack Domination:{' '}
                </span>
                Local SEO is vital for businesses relying on &quot;near me&quot;
                searches.
                <ul className='py-2 text-sm list-disc pl-5'>
                  <li className='pb-1'>
                    We audit and optimize your Google Business Profile (GBP) to
                    improve your visibility in Google Maps.
                  </li>
                  <li className='pb-1'>
                    Consistency matters: we’ll review and update your name,
                    address, and phone (NAP) details across the web.
                  </li>
                  <li>
                    Regular tracking and adjustments ensure continued progress
                    in local rankings.
                  </li>
                </ul>
              </li>
              <li className='pb-4 text-white'>
                <span className='font-extrabold text-lg'>
                  4. High-Quality Backlinks:{' '}
                </span>
                Backlinks remain a critical ranking factor, but quality matters
                more than quantity.
                <ul className='py-2 text-sm list-disc pl-5'>
                  <li className='pb-1'>
                    We secure backlinks from authoritative directories, relevant
                    publishers, and strategic outreach.
                  </li>
                  <li className='pb-1'>
                    Each link is selected to build credibility and enhance your
                    ranking power.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-extrabold text-white'>
            SEO: HOW LONG DOES IT TAKE?
          </h3>
          <ul>
            <li className='py-4'>
              <span className='font-extrabold text-lg'>
                Quick Wins (3–6 Months):{' '}
              </span>
              Established businesses can often see early gains by fixing
              technical issues and improving low-quality content.
            </li>
            <li className='pb-4'>
              <span className='font-extrabold text-lg'>
                Competitive Markets (6+ Months):{' '}
              </span>
              For startups or those in competitive categories, building traction
              takes longer due to the need for consistent backlink acquisition
              and robust content creation.
            </li>
            <li className='pb-4'>
              <span className='font-extrabold text-lg'>
                SEO is an investment in sustainable, long-term growth. For
                immediate results, consider complementing your SEO strategy with
                Google Ads.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <CTA
        description=''
        title='Ready to Elevate Your Business?'
        cta='Contact Us Today'
      />
    </MaxWidthWrapper>
  );
}
