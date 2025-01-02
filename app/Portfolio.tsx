import { Button } from '@/components/ui/button';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import Link from 'next/link';
import Image from 'next/image';

export function Portfolio() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl'>
          SOME OF OUR SUCCESS STORIES
        </h2>
        <p className='mt-4 text-base font-normal text-white sm:text-xl'>
          From custom websites to thriving e-commerce stores, explore how we’ve
          helped businesses like yours.
        </p>
      </div>
      <div className='mt-12 space-y-16 sm:mt-16'>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div>
            <Image
              width='819'
              height='407'
              className=' w-full rounded-xl object-cover shadow-lg block'
              src='/images/brandwired.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-white sm:text-4xl'>
                BrandWired
              </h3>
              <a
                target='_blank'
                href='https://brandwired.ca'
                title=''
                className='inline-flex items-center text-lg font-medium  hover:underline text-primary-500'
              >
                https://brandwired.ca
                <svg
                  aria-hidden='true'
                  className='ml-2.5 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
              </a>
              <p className='text-base font-normal text-white sm:text-lg pb-4'>
                Created a custom website with inquiry forms to streamline client
                submissions, enhancing user engagement and communication.
              </p>
            </div>
            <Link href='/portfolio'>
              <Button>
                VIEW MORE
                <svg
                  aria-hidden='true'
                  className='-mr-1 ml-2 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div className='lg:order-2'>
            <Image
              width='819'
              height='407'
              className='w-full rounded-xl object-cover shadow-lg block'
              src='/images/ecozen.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:order-1 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-white sm:text-4xl'>
                EcoZen Home Cleaning Services
              </h3>
              <a
                target='_blank'
                href='https://ecozen.ca'
                title=''
                className='inline-flex items-center text-lg font-medium  hover:underline text-primary-500'
              >
                https://ecozen.ca
                <svg
                  aria-hidden='true'
                  className='ml-2.5 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
              </a>
              <p className='text-base font-normal text-white sm:text-lg pb-4'>
                Developed a custom website with forms for inquiries and an
                integrated online booking system that dynamically adjusts
                pricing based on selected cleaning services and extras,
                streamlining the booking process for a seamless user experience.
              </p>
            </div>
            <Link href='/portfolio'>
              <Button>
                VIEW MORE
                <svg
                  aria-hidden='true'
                  className='-mr-1 ml-2 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div>
            <Image
              width='819'
              height='407'
              className='w-full rounded-xl object-cover shadow-lg block'
              src='/images/battleborn.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-white sm:text-4xl'>
                BattleBornBoxing
              </h3>
              <a
                target='_blank'
                href='https://battlebornboxing.ca'
                title=''
                className='inline-flex items-center text-lg font-medium  hover:underline text-primary-500'
              >
                https://battlebornboxing.ca
                <svg
                  aria-hidden='true'
                  className='ml-2.5 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                  <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
                </svg>
              </a>
              <p className='text-base font-normal text-white sm:text-lg pb-4'>
                Designed a modern, responsive website to showcase their services
                and facilitate easy online communication with potential clients.
              </p>
            </div>
            <Link href='/portfolio'>
              <Button>
                VIEW MORE
                <svg
                  aria-hidden='true'
                  className='-mr-1 ml-2 h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
