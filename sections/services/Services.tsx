import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import Link from 'next/link';

export function Services() {
  return (
    <MaxWidthWrapper>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-gray-100 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight '>
            Custom Applications
          </h2>
          <p className='mb-8 lg:text-xl'>
            Transform your business with bespoke software designed to optimize
            operations, enhance efficiency, and solve unique challenges.
          </p>
          <Link
            href='/services/custom-applications'
            className='inline-flex items-center hover:text-primary-600'
          >
            Learn More About Custom Applications
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
          <div className='my-7 space-y-5 border-t border-gray-700'></div>
        </div>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
      </div>

      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
        <div className='text-gray-100 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight '>
            Professional Websites, Fully Managed and Stress-Free
          </h2>
          <p className='mb-8 lg:text-xl'>
            A website is your business’s digital front door. Sanova Solutions
            creates responsive, visually stunning, and user-friendly websites
            that leave lasting impressions.
          </p>
          <Link
            href='/services/website-services'
            className='inline-flex items-center hover:text-primary-600'
          >
            Learn More About Our Website Services
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

          <div className='my-7 space-y-5 border-t border-gray-700'></div>
        </div>
        <div className='text-gray-100 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight '>
            E-Commerce Solutions
          </h2>
          <p className='mb-8 lg:text-xl'>
            Create a seamless online shopping experience with scalable
            e-commerce platforms built to grow with your business.
          </p>
          <Link
            href='/services/ecommerce'
            className='inline-flex items-center hover:text-primary-600'
          >
            Explore E-Commerce Solutions
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
          <div className='my-7 space-y-5 border-t border-gray-700'></div>
        </div>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
        {/* <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
        <div className='text-gray-100 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight '>
            Social Media Marketing
          </h2>
          <p className='mb-8 lg:text-xl'>
            Engage your audience with impactful strategies that grow your online
            presence and drive conversions.
          </p>
          <a
            href='#'
            className='inline-flex items-center hover:text-primary-600'
          >
            Discover Social Media Marketing Services
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

          <div className='my-7 space-y-5 border-t border-gray-700'></div>
        </div>
        <div className='text-gray-100 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight '>
            Business Growth Services
          </h2>
          <p className='mb-8 lg:text-xl'>
            Take your business to the next level with data-driven growth
            strategies designed to maximize your potential.
          </p>
          <a
            href='#'
            className='inline-flex items-center hover:text-primary-600'
          >
            Learn More About Growth Services
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
          <div className='my-7 space-y-5 border-t border-gray-700'></div>
        </div>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        /> */}
      </div>
    </MaxWidthWrapper>
  );
}
