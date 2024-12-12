import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UniqueSellingProposition() {
  return (
    <MaxWidthWrapper>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
          <p className='mb-4 lg:text-xl text-white'>WHAT WE OFFER</p>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white'>
            WEBSITES STARTING AT $0 DOWN AND $200/MONTH
          </h2>
          <p className='mb-4 lg:text-xl text-white'>
            Get your business online with a professional 5-page website for $0
            down and just $200 per month. Need more than five pages? We’ll
            provide custom pricing based on your specific requirements,
            including the scope, additional pages, and complexity. With a{' '}
            <span className='font-bold italic'>12-month minimum contract</span>,
            our package includes design, development, hosting, unlimited edits,
            24/7 support, and lifetime updates.
          </p>
          <ul className='my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700'>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-primary-600 dark:text-primary-500'
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
                <h3 className='text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                  Custom Designs
                </h3>
                <p className='text-md text-gray-900 dark:text-white'>
                  All designs are created by our in-house team, giving us the
                  freedom to bring your unique vision to life.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-primary-600 dark:text-primary-500'
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
                <h3 className='text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                  Lightning-Fast Speeds
                </h3>
                <p className='text-md text-gray-900 dark:text-white'>
                  All designs are created by our in-house team, giving us the
                  freedom to bring your unique vision to life.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-primary-600 dark:text-primary-500'
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
                <h3 className='text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                  SEO Experts
                </h3>
                <p className='text-md text-gray-900 dark:text-white'>
                  We take a straightforward approach to SEO—no gimmicks or empty
                  promises. We’ll explain how it works and implement proven
                  strategies to help your site rank higher.
                </p>
              </div>
            </li>
            <li className='flex space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-primary-600 dark:text-primary-500'
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
                <h3 className='text-xl font-bold leading-tight text-gray-900 dark:text-white'>
                  Exceptional Support
                </h3>
                <p className='text-md text-gray-900 dark:text-white'>
                  Our team is available 24/7, just simply call or text—no
                  automated menus, no robots.
                </p>
              </div>
            </li>
          </ul>
          <Link href='/contact-us'>
            <Button className='[&>span]:items-center p' size='lg'>
              SCHEDULE A CALL
            </Button>
          </Link>
        </div>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
      </div>
    </MaxWidthWrapper>
  );
}
