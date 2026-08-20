<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { SiSpeedtest } from 'react-icons/si';
import { FiLoader } from 'react-icons/fi';
import { GrDocumentPerformance } from 'react-icons/gr';
import Image from 'next/image';

export function Speed() {
  return (
    <MaxWidthWrapper>
      <dl className='mx-auto mt-8 grid max-w-screen-md grid-cols-2 gap-8 text-white sm:grid-cols-3 lg:mt-14'>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-2xl sm:text-4xl font-extrabold'>100%</dt>
          <dd className='text-md sm:text-xl font-normal text-white'>
            Satisfaction Guaranteed
          </dd>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-2xl sm:text-4xl font-extrabold'>100%</dt>
          <dd className='text-md sm:text-xl font-normal text-white'>
            Page Speed Scores
          </dd>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-2xl sm:text-4xl font-extrabold'>5/5</dt>
          <dd className='text-md sm:text-xl font-normal text-white'>
            Google Reviews
          </dd>
        </div>
      </dl>

      <div className='mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16 '>
        <div className='sm:text-lg'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl'>
            WEBSITES DESIGNED FOR SPEED AND RESULTS
          </h2>
          <p className='mb-8 text-white lg:text-xl'>
            At Sanova Web Solutions, we build websites that outperform the
            competition with exceptional load times and top-tier Google
            PageSpeed scores. Don’t just take our word for it—test your current
            website using Google PageSpeed Insights and see how it measures up.
          </p>
          <div className='grid gap-6 border-gray-700 sm:grid-cols-2 lg:grid-cols-1'>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <FiLoader size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Faster Load Times, Better Results
                </p>
                <p className='text-white'>
                  Improved load speeds drive more traffic and boost conversions,
                  helping your business grow over time.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <GrDocumentPerformance size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Enhanced SEO and Ad Performance
                </p>
                <p className='text-white'>
                  A faster site isn’t just user-friendly—it also improves your
                  SEO rankings and the effectiveness of your Google Ads
                  campaigns.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <SiSpeedtest size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Instant Load Speeds
                </p>
                <p className='text-white'>
                  Our websites load in under one second, creating a seamless
                  user experience that keeps visitors engaged and drives more
                  conversions.
                </p>
=======

import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  ArrowUpRight,
  Gauge,
  Search,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const metrics = [
  {
    value: '100%',
    label: 'Client satisfaction',
  },
  {
    value: '100',
    label: 'Performance score',
  },
  {
    value: '5/5',
    label: 'Google reviews',
  },
];

const performanceBenefits = [
  {
    icon: Zap,
    title: 'Faster experiences',
    description:
      'Fast-loading pages reduce friction and give visitors a smoother experience from the moment they arrive.',
  },
  {
    icon: Search,
    title: 'Stronger SEO foundation',
    description:
      'Performance, mobile usability, and technical quality all contribute to a healthier search presence.',
  },
  {
    icon: Gauge,
    title: 'Built without unnecessary bloat',
    description:
      'We focus on lean code, optimized assets, and modern development practices instead of heavy page builders and oversized plugins.',
  },
];

export function Speed() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[55%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-violet-600/[0.07] blur-[150px]' />

        <div className='absolute left-[-14rem] bottom-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Metrics */}
        <div className='grid overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] sm:grid-cols-3'>
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={[
                'relative px-6 py-7 text-center sm:px-8 sm:py-8',
                index !== metrics.length - 1
                  ? 'border-b border-white/[0.08] sm:border-b-0 sm:border-r'
                  : '',
              ].join(' ')}
            >
              <p className='text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
                {metric.value}
              </p>

              <p className='mt-2 text-sm text-white/35'>
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className='mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-16 xl:gap-24'>
          {/* Content */}
          <div>
            <div className='mb-5 flex items-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Performance matters
              </span>
            </div>

            <h2 className='max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Websites engineered
              <span className='block text-white/45'>
                to feel fast.
              </span>
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg'>
              We build with performance in mind from the beginning, using clean
              code, optimized assets, and modern development practices to create
              websites that load quickly and respond smoothly.
            </p>

            {/* Benefits */}
            <div className='mt-10 space-y-7 border-t border-white/[0.08] pt-8'>
              {performanceBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className='group flex gap-4'
                  >
                    <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.07]'>
                      <Icon
                        className='size-[18px]'
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className='text-base font-semibold text-white sm:text-lg'>
                        {benefit.title}
                      </h3>

                      <p className='mt-2 max-w-lg text-sm leading-6 text-white/40 sm:text-base'>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href='https://pagespeed.web.dev/'
              target='_blank'
              rel='noopener noreferrer'
              className='group mt-10 inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white'
            >
              Test your website with PageSpeed Insights
              <ArrowUpRight className='size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </Link>
          </div>

          {/* Performance visual */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute -inset-10 rounded-[4rem] bg-violet-500/[0.06] blur-[90px]'
            />

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-3'>
              {/* Browser header */}
              <div className='flex h-11 items-center gap-2 border-b border-white/[0.07] px-3'>
                <span className='size-2.5 rounded-full bg-white/15' />
                <span className='size-2.5 rounded-full bg-white/10' />
                <span className='size-2.5 rounded-full bg-white/[0.07]' />

                <div className='mx-auto hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1 text-[10px] text-white/20 sm:block'>
                  PageSpeed Insights
                </div>
              </div>

              <div className='relative overflow-hidden rounded-[1.4rem] bg-white'>
                <Image
                  width={1168}
                  height={1016}
                  className='h-auto w-full'
                  src='/images/100score.webp'
                  alt='Google PageSpeed performance score for a Sanova website'
                  loading='lazy'
                />
              </div>
            </div>

            {/* Floating status */}
            <div className='absolute -bottom-6 left-4 rounded-2xl border border-white/[0.10] bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-8'>
              <div className='flex items-center gap-3'>
                <div className='relative flex size-9 items-center justify-center rounded-xl bg-emerald-400/10'>
                  <span className='absolute size-2 rounded-full bg-emerald-400' />
                  <span className='size-2 animate-ping rounded-full bg-emerald-400 opacity-40' />
                </div>

                <div>
                  <p className='text-xs font-medium text-white'>
                    Performance focused
                  </p>

                  <p className='mt-0.5 text-[11px] text-white/35'>
                    Speed built into the development process.
                  </p>
                </div>
>>>>>>> main
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <Image
          width='584'
          height='508'
          className='mx-auto mb-4 hidden sm:flex'
          src='/images/100score.webp'
          alt='table professor illustration'
          loading='lazy'
        />
      </div>
    </MaxWidthWrapper>
  );
}
=======
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
