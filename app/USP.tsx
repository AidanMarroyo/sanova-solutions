import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function UniqueSellingProposition() {
  return (
    <MaxWidthWrapper>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-white sm:text-lg'>
          <p className='mb-4 lg:text-xl text-white '>WHAT WE OFFER</p>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white'>
            AFFORDABLE, PROFESSIONAL WEBSITES WITH ZERO UPFRONT COSTS
          </h2>
          <p className='mb-4 lg:text-xl text-white'>
            Our goal is to make high-quality web design accessible to small
            businesses. That’s why we offer websites starting at{' '}
            <span className='font-bold italic'>$0 down</span> with a manageable{' '}
            <span className='font-bold italic'>$175/month</span> subscription.
            This plan includes everything you need to succeed online, from
            hosting and unlimited edits to lifetime updates and 24/7 support.
          </p>
          <p className='my-4 lg:text-xl text-white'>
            <span className='font-bold italic'>
              Need more than five pages?{' '}
            </span>
            Custom pricing is available for larger or more complex projects.
            We’ll create a solution tailored to your unique needs.
          </p>
          <ul className='my-7 space-y-5 border-t  pt-8 border-gray-700'>
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
              <div className='flex flex-col gap-2 '>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Custom Designs
                </h3>
                <p className='text-md text-white'>
                  All designs are created by our in-house team, giving us the
                  freedom to bring your unique vision to life.
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
              <div className='flex flex-col gap-2 '>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Lightning-Fast Speeds
                </h3>
                <p className='text-md text-white'>
                  With clean, efficient code and no unnecessary extras, our
                  sites achieve near-perfect Google PageSpeed scores of 98-100.
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
              <div className='flex flex-col gap-2 '>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  SEO Experts
                </h3>
                <p className='text-md text-white'>
                  We take a straightforward approach to SEO—no gimmicks or empty
                  promises. We’ll explain how it works and implement proven
                  strategies to help your site rank higher.
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
              <div className='flex flex-col gap-2 '>
                <h3 className='text-xl font-bold leading-tight text-white'>
                  Exceptional Support
                </h3>
                <p className='text-md text-white'>
                  Our team is available 24/7, just simply call or text—no
                  automated menus, no robots.
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
