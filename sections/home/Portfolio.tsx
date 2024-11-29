'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
} from '@/lib/motionAnimations';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl'>
          Some of Our Success Stories
        </h2>
        <p className='mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl'>
          From custom software to thriving e-commerce stores, explore how we’ve
          helped businesses like yours.
        </p>
      </div>
      <div className='mt-12 space-y-16 sm:mt-16'>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div>
            <img alt='' />
            <img
              className='hidden w-full rounded-lg object-cover shadow-lg dark:block'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl'>
                Flowbite's dashboard
              </h3>
              <a
                href='https://flowbite.com'
                title=''
                className='inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                https://flowbite.com
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
              <p className='text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg'>
                Flowbite helps you connect with friends, family and communities
                of people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
            </div>
            <div className='flex items-center gap-2.5'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML 5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>JavaScript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TypeScript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button>
              View More
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
          </div>
        </div>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div className='lg:order-2'>
            <img
              className='w-full rounded-lg object-cover shadow-lg dark:hidden'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg'
              alt=''
            />
            <img
              className='hidden w-full rounded-lg object-cover shadow-lg dark:block'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:order-1 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl'>
                Agency Landing Page
              </h3>
              <a
                href='https://themesberg.com'
                title=''
                className='inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                https://themesberg.com
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
              <p className='text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg'>
                Flowbite helps you connect with friends, family and communities
                of people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
            </div>
            <div className='flex items-center gap-2.5'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WordPress</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML 5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>CSS3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WooCommerce</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button>
              View More
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
          </div>
        </div>
        <div className='flex flex-col gap-y-8 sm:gap-y-12 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-24'>
          <div>
            <img
              className='w-full rounded-lg object-cover shadow-lg dark:hidden'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg'
              alt=''
            />
            <img
              className='hidden w-full rounded-lg object-cover shadow-lg dark:block'
              src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg'
              alt=''
            />
          </div>
          <div className='w-full shrink-0 space-y-6 lg:max-w-lg xl:max-w-2xl'>
            <div className='space-y-3'>
              <h3 className='text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl'>
                Mail management system
              </h3>
              <a
                href='https://ui.glass'
                title=''
                className='inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                https://ui.glass
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
              <p className='text-base font-normal text-gray-500 dark:text-gray-400 sm:text-lg'>
                Flowbite helps you connect with friends, family and communities
                of people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
            </div>
            <div className='flex items-center gap-2.5'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>TypeScript</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Java</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tailwind CSS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>React</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>HTML5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      className='h-8 w-auto object-contain'
                      src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg'
                      alt=''
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Amazon Web Services</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button>
              View More
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
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
