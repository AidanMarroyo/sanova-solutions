import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function USP() {
  return (
    <MaxWidthWrapper>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-a'>
        <div>
          <div>
            <h3 className='mb-4 text-2xl font-extrabold text-white'>
              WHY OUR APPROACH MAKES A DIFFERENCE
            </h3>
          </div>
          <ol className='grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-1'>
            <li className='flex items-center gap-2.5'>
              <GoldCheckIconSVG />
              <span className='text-lg font-normal text-white'>
                Faster Websites for Better Results
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GoldCheckIconSVG />
              <span className='text-lg font-normal text-white'>
                Enhanced Ad Performance
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GoldCheckIconSVG />
              <span className='text-lg font-normal text-white'>
                Better Search Engine Rankings
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GoldCheckIconSVG />
              <span className='text-lg font-normal text-white'>
                Improved Google Business Profile Visibility
              </span>
            </li>
          </ol>
          <div className='space-y-8 mt-8'>
            <div>
              <h3 className='mb-4 text-2xl font-extrabold text-white'>
                SEO BUILT INTO EVERY WEBSITE
              </h3>
              <p className='text-lg font-normal text-white'>
                Web design and SEO are two sides of the same coin. A
                well-crafted website lays the groundwork for success, but SEO
                ensures your site reaches its audience. Our in-house SEO experts
                go beyond the basics, delivering strategies that drive real
                results.
              </p>
            </div>
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

const GoldCheckIconSVG = () => (
  <svg
    className='h-5 w-5 text-[#D4AF37]'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);
