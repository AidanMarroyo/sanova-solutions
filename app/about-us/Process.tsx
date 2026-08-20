<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import Image from 'next/image';

export function Process() {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <p className='my-4 text-base font-normal sm:text-xl text-white'>
          OUR PROCESS
        </p>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
          WE HANDLE EVERYTHING FROM START TO FINISH
        </h2>
        <a
          href='#'
          className='inline-flex items-center text-lg font-medium text-primary-500 hover:text-primary-700'
        >
          Our streamlined approach ensures that your website is not only built
          with precision but also with minimal effort on your part. In just a
          few weeks, we’ll take your project from concept to completion,
          creating a custom website designed to grow your business.
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
      <div className='mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-12'>
        <div className='mb-2 flex md:mb-0 md:flex-col'>
          <Image
            width='379'
            height='252'
            alt=''
            src='/images/question.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 1: Complete Questionnaire
            </h3>
            <p className='text-white'>
              We’ll send you a short questionnaire with fewer than 10 questions
              about your business, services, and unique qualities. Once you fill
              it out, we’ll take it from there!
            </p>
          </div>
        </div>
        <div className='mb-2 flex md:mb-0 md:flex-col'>
          <Image
            width='379'
            height='252'
            alt=''
            src='/images/design.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 2: Approve the Design
            </h3>
            <p className='text-white'>
              Our team will create a custom design draft for your site and share
              it with you via a screen-sharing session. We’ll make any revisions
              you need until you’re completely satisfied with the look and feel.
            </p>
          </div>
        </div>
        <div className='flex md:flex-col'>
          <Image
            width='379'
            height='252'
            alt=''
            src='/images/dev.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 3: Development & Launch
            </h3>
            <p className='text-white'>
              After design approval, we’ll code your site from scratch, ensuring
              top-notch performance and functionality. Before the site goes
              live, you’ll get a private demo link to review everything. Once
              approved, we’ll launch your new website for the world to see!
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
=======

import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  ArrowRight,
  ClipboardList,
  Code2,
  Palette,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Tell us about your business',
    image: '/images/question.webp',
    alt: 'Website discovery questionnaire',
    description:
      'We start with a short questionnaire covering your business, services, goals, audience, and what makes you different. You give us the essentials, and we handle the heavy lifting from there.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Review your custom design',
    image: '/images/design.webp',
    alt: 'Custom website design process',
    description:
      'We create a design specifically for your business and walk you through it before development begins. We refine the direction together until the look and experience feel right.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'We build and launch',
    image: '/images/dev.webp',
    alt: 'Custom website development and launch',
    description:
      'Once the design is approved, we develop the website, optimize the experience, test everything, and provide a private preview before your new site goes live.',
  },
];

export function Process() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[-18rem] top-[20%] h-[34rem] w-[34rem] rounded-full bg-violet-600/[0.06] blur-[150px]' />

        <div className='absolute right-[-15rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Our process
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
            From first idea
            <span className='block text-white/45'>
              to launch day.
            </span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            We keep the process simple, collaborative, and organized so you can
            get a professionally built website without managing every technical
            detail yourself.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative mt-16 lg:mt-24'>
          {/* desktop connector */}
          <div
            aria-hidden='true'
            className='absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-violet-400/20 via-white/10 to-violet-400/20 lg:block'
          />

         <div className='grid gap-6 lg:grid-cols-3'>
  {steps.map((step) => {
    const Icon = step.icon;

    return (
      <article
        key={step.number}
        className='group relative flex flex-col'
      >
        {/* Timeline marker */}
        <div className='relative z-10 mb-7 flex items-center justify-between lg:justify-center'>
          <div className='flex size-16 items-center justify-center rounded-2xl border border-violet-400/15 bg-[#090909] shadow-xl shadow-black/30'>
            <span className='text-sm font-semibold tracking-[0.14em] text-violet-300'>
              {step.number}
            </span>
          </div>

          <span className='text-xs font-medium uppercase tracking-[0.16em] text-white/20 lg:hidden'>
            Step {step.number}
          </span>
        </div>

        {/* Card */}
        <div className='relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-violet-500/[0.06] blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
          />

          <div className='relative aspect-[16/10] overflow-hidden'>
            <Image
              fill
              src={step.image}
              alt={step.alt}
              className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
              sizes='(max-width: 1024px) 100vw, 33vw'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent' />
          </div>

          <div className='relative p-6 sm:p-7'>
            <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-violet-300'>
              <Icon
                className='size-[18px]'
                strokeWidth={1.8}
              />
            </div>

            <h3 className='mt-6 text-2xl font-semibold tracking-[-0.03em] text-white'>
              {step.title}
            </h3>

            <p className='mt-4 text-sm leading-7 text-white/40 sm:text-base'>
              {step.description}
            </p>
          </div>
        </div>
      </article>
    );
  })}
</div>
        </div>

        {/* Closing note */}
        <div className='mt-32 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-6 py-7 text-center sm:px-8 md:flex-row md:text-left lg:mt-16'>
          <div>
            <p className='text-sm font-medium text-white'>
              You stay informed. We handle the technical work.
            </p>

            <p className='mt-1 text-sm text-white/35'>
              Clear communication from discovery through launch.
            </p>
          </div>

          <Link
            href='/contact-us'
            className='group inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white'
          >
            Start your project

            <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
