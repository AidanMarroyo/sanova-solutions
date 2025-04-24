import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function UniqueSellingProposition() {
  return (
    <MaxWidthWrapper>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-white sm:text-lg'>
          <p className='mb-4 lg:text-xl text-white'>WHAT WE OFFER</p>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white'>
            PROFESSIONAL WEBSITES DESIGNED FOR GROWTH
          </h2>
          <p className='mb-4 lg:text-xl text-white'>
            We specialize in making high-quality websites accessible for small
            businesses and startups. Our all-in-one solution covers everything
            you need to succeed online—from custom design and fast load times to
            hosting, ongoing updates, and real human support.
          </p>
          <p className='my-4 lg:text-xl text-white'>
            <span className='font-bold italic'>
              Need something more advanced?
            </span>{' '}
            We offer flexible solutions tailored to larger or more complex
            projects, all built to meet your goals and scale with your business.
          </p>
          <ul className='my-7 space-y-5 border-t pt-8 border-gray-700'>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-[#D4AF37]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Custom Designs
                </h3>
                <p className='text-md text-white'>
                  Every site is uniquely designed by our in-house team to
                  reflect your brand’s identity and connect with your audience.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-[#D4AF37]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Lightning-Fast Speeds
                </h3>
                <p className='text-md text-white'>
                  Our sites are built with performance in mind—optimized for
                  speed, clean code, and seamless user experiences.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-[#D4AF37]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  SEO Experts
                </h3>
                <p className='text-md text-white'>
                  We implement proven SEO strategies to help your business rank
                  higher and get discovered by the right people—no fluff, just
                  results.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-[#D4AF37]'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='flex flex-col gap-2'>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Exceptional Support
                </h3>
                <p className='text-md text-white'>
                  Our team is available around the clock to support you—just
                  call or text. No robots, no runaround.
                </p>
              </div>
            </li>
          </ul>
          <Link href='/contact-us'>
            <Button className='[&>span]:items-center p mt-4' size='lg'>
              SCHEDULE A CALL
            </Button>
          </Link>
        </div>
        <Image
          width='560'
          height='560'
          alt=''
          src='/images/customsite.webp'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
      </div>
    </MaxWidthWrapper>
  );
}
