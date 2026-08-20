import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import WordRotate from '@/components/ui/word-rotate';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <MaxWidthWrapper className='grid lg:grid-cols-12 lg:gap-8 xl:gap-0'>
      <div className='mr-auto place-self-center lg:col-span-7'>
        <p className='mb-3 max-w-2xl text-white md:text-lg lg:mb-4 lg:text-xl'>
          CUSTOM WEB SOLUTIONS, CUSTOM CODED
        </p>
        <h1 className='max-w-2xl text-4xl font-extrabold  tracking-tight text-white md:text-6xl'>
          WEB SOLUTIONS EMPOWERING BUSINESSES TO
        </h1>
        <WordRotate
          words={['SCALE', 'SUCCEED']}
          className='mb-4 max-w-2xl text-4xl font-extrabold  tracking-tight text-white md:text-6xl '
        />
        <p className='mb-6 max-w-xl text-white md:text-lg lg:mb-8 lg:text-xl'>
          100% hand-coded websites, web applications, and custom web solutions
          starting at $175/mo. No page builders, No Wordpress, No bloatware.
        </p>
        <div className='flex w-fit items-center gap-5'>
          <Link href='/contact-us'>
            <Button className='[&>span]:items-center p' size='lg'>
              GET STARTED
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Button>
          </Link>
          <Link href='/about-us'>
            <Button variant='secondary' size='lg'>
              SERVICES
            </Button>
          </Link>
        </div>
      </div>
      <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
        <Image
          width='1680'
          height='1680'
          src='/images/hero.webp'
          alt='mockup'
          className='min-w-full min-h-full'
        />
      </div>
    </MaxWidthWrapper>
  );
}
=======
import WordRotate from '@/components/ui/word-rotate';
import {
  ArrowRight,
  Code2,
  Gauge,
  Search,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    icon: Code2,
    label: 'Custom coded',
  },
  {
    icon: Gauge,
    label: 'Built for speed',
  },
  {
    icon: Search,
    label: 'SEO focused',
  },
];

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Hero atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[35%] top-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[140px]' />

        <div className='absolute right-[-8rem] top-[15%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.08] blur-[150px]' />

        <div className='absolute inset-x-0 top-[72%] h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        <div className='grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20 xl:min-h-[820px] xl:gap-16'>
          {/* Content */}
          <div className='lg:col-span-7 xl:col-span-6'>
            {/* Eyebrow */}
            <div className='mb-7 flex items-center gap-3'>
              <div className='flex size-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/[0.08]'>
                <Sparkles className='size-3.5 text-violet-300' />
              </div>

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Custom websites. Custom code.
              </span>
            </div>

            {/* Headline */}
            <h1 className='max-w-4xl text-[clamp(3rem,6.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white'>
              Websites built to
              <span className='block text-white/45'>
                help businesses
              </span>
            </h1>

            <WordRotate
              words={['stand out.', 'scale faster.', 'convert more.']}
              className='mt-1 max-w-4xl text-[clamp(3rem,6.5vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-violet-300'
            />

            {/* Description */}
            <p className='mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
              Fast, custom-coded websites, ecommerce experiences, and web
              applications starting at{' '}
              <span className='font-medium text-white'>$175/month</span>.
              No page builders. No WordPress. No bloated templates.
            </p>

            {/* CTAs */}
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/contact-us'
                className='group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Start your project

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>

              <Link
                href='/services/web-design'
                className='inline-flex h-14 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] px-7 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
              >
                Explore our services
              </Link>
            </div>

            {/* Benefits */}
            <div className='mt-9 flex flex-wrap gap-x-6 gap-y-3'>
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.label}
                    className='flex items-center gap-2 text-sm text-white/40'
                  >
                    <Icon className='size-4 text-white/60' />
                    {benefit.label}
                  </div>
                );
              })}
            </div>

            {/* Pricing note */}
            <div className='mt-12 flex max-w-xl items-center gap-4 border-t border-white/[0.08] pt-7'>
              <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]'>
                <span className='text-sm font-semibold text-violet-300'>
                  $175
                </span>
              </div>

              <div>
                <p className='text-sm font-medium text-white'>
                  Flexible website plans from $175/mo
                </p>

                <p className='mt-1 text-xs leading-5 text-white/35'>
                  A lower-barrier way to get a professionally built website
                  without sacrificing quality.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className='relative lg:col-span-5 xl:col-span-6'>
            {/* Outer glow */}
            <div
              aria-hidden='true'
              className='absolute -inset-10 rounded-[4rem] bg-violet-500/[0.07] blur-[80px]'
            />

            {/* Main visual shell */}
            <div className='relative mx-auto max-w-[720px]'>
              <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.03] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-3'>
                {/* browser header */}
                <div className='flex h-11 items-center gap-2 border-b border-white/[0.07] px-3'>
                  <span className='size-2.5 rounded-full bg-white/15' />
                  <span className='size-2.5 rounded-full bg-white/10' />
                  <span className='size-2.5 rounded-full bg-white/[0.07]' />

                  <div className='mx-auto hidden w-1/2 rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-center text-[10px] text-white/20 sm:block'>
                    sanovawebsolutions.com
                  </div>
                </div>

                {/* Image */}
                <div className='relative overflow-hidden rounded-[1.4rem]'>
                  <Image
                    width={1680}
                    height={1680}
                    src='/images/hero.webp'
                    alt='Custom website design and development preview'
                    priority
                    className='h-auto w-full object-cover'
                  />

                  {/* image overlays */}
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />

                  <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-violet-950/20 to-transparent' />
                </div>
              </div>

              {/* Floating badge */}
              <div className='absolute -bottom-7 left-4 rounded-2xl border border-white/[0.10] bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-8'>
                <div className='flex items-center gap-3'>
                  <div className='flex size-9 items-center justify-center rounded-xl bg-emerald-400/10'>
                    <Gauge className='size-4 text-emerald-300' />
                  </div>

                  <div>
                    <p className='text-xs font-medium text-white'>
                      Built for performance
                    </p>
                    <p className='mt-0.5 text-[11px] text-white/35'>
                      Fast. Responsive. Optimized.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary floating badge */}
              <div className='absolute -right-2 top-10 hidden rounded-2xl border border-white/[0.10] bg-black/75 px-4 py-3 shadow-2xl backdrop-blur-xl md:block xl:-right-6'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  No templates
                </p>

                <p className='mt-1 text-xs text-white/50'>
                  Designed for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
