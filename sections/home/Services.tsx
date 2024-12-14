import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { MdOutlineSettingsApplications } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';
import Link from 'next/link';

export function Services() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16'>
        <div>
          <img
            alt=''
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long.png'
            className='mb-4 w-full rounded-lg lg:mb-0'
          />
        </div>
        <div className='sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight'>
            Our Services: Built for Growth
          </h2>

          <div className='mb-6 border-y  py-8 border-gray-700'>
            <div className='flex'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 bg-primary-900'>
                <MdOutlineSettingsApplications />
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold'>Custom Applications</h3>
                <p className='mb-2 text-white'>
                  Develop software solutions tailored to your business needs.
                </p>
                <Link
                  href='/services/custom-applications'
                  className='inline-flex items-center text-primary-500 hover:text-primary-600'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='flex pt-8'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full'>
                <svg
                  className='h-5 w-5 text-[#D4AF37]'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold'>Website Development</h3>
                <p className='mb-2 text-white'>
                  Build professional, responsive, and SEO-optimized websites to
                  make a lasting impact.
                </p>
                <Link
                  href='/services/website-services'
                  className='inline-flex items-center text-[#D4AF37] hover:text-[#B58E2B]'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='flex pt-8'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full'>
                <CgShoppingCart className='text-[#1E3A5F]' />
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold text-white'>
                  Ecommerce Solutions
                </h3>
                <p className='mb-2 text-white'>
                  Launch or optimize your online store for seamless sales.
                </p>
                <Link
                  href='/services/ecommerce'
                  className='inline-flex items-center text-[#1E3A5F] hover:text-[#172A45]'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div className='flex pt-8'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full  bg-primary-900'>
                <IoShareSocialOutline />
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold'>
                  Social Media Marketing
                </h3>
                <p className='mb-2 text-white'>
                  Engage and grow your audience with targeted strategies.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center text-primary-500 hover:text-primary-600'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex pt-8'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full'>
                <svg
                  className='h-5 w-5 text-[#D4AF37]'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold'>
                  SEO Optimization Services
                </h3>
                <p className='mb-2 text-white'>
                  Climb search engine rankings and drive organic traffic to your
                  site.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center text-[#D4AF37] hover:text-[#B58E2B]'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='flex pt-8'>
              <div className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#1E3A5F]'>
                <MdOutlineTrendingUp />
              </div>
              <div>
                <h3 className='mb-2 text-xl font-bold text-white'>
                  Business Growth Services
                </h3>
                <p className='mb-2 text-white'>
                  Drive sustainable success with data-driven insights.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center text-[#1E3A5F] hover:text-[#172A45]'
                >
                  Learn more
                  <svg
                    className='ml-1 h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          <p className='text-sm'>
            Sanova Solutions accelerates your growth with custom apps, seamless
            website development, and SEO strategies, eliminating roadblocks and
            streamlining success.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
