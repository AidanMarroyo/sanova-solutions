import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Search,
  Sparkles,
} from 'lucide-react';

import WordRotate from '@/components/ui/word-rotate';

const stats = [
  {
    value: '12+',
    label: 'Projects launched',
  },
  {
    value: '100%',
    label: 'Client satisfaction',
  },
  {
    value: '1.2s',
    label: 'Average load time',
  },
];

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

export default function TestHero() {
  return (
    <section className='relative overflow-hidden'>
      {/* Hero-specific atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        {/* central violet glow */}
        <div className='absolute left-[42%] top-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[140px]' />

        {/* blue accent */}
        <div className='absolute right-[-10rem] top-[20%] h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.07] blur-[140px]' />

        {/* horizon line */}
        <div className='absolute inset-x-0 top-[68%] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent' />
      </div>

      <div className='relative mx-auto max-w-[1600px] px-4 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:px-8 lg:pb-24 lg:pt-20'>
        <div className='grid items-start gap-14 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16'>
          {/* Left */}
          <div className='flex min-h-[680px] flex-col justify-center xl:min-h-[720px]'>
            {/* Eyebrow */}
            <div className='mb-7 flex items-center gap-3'>
              <div className='flex size-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/[0.08]'>
                <Sparkles className='size-3.5 text-violet-300' />
              </div>

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Custom websites. Custom code.
              </span>
            </div>

            {/* Main headline */}
            <h1 className='max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white'>
              Websites built to
              <span className='block text-white/45'>
                help businesses
              </span>
            </h1>

            <WordRotate
              words={['stand out.', 'grow faster.', 'convert more.']}
              className='mt-1 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-violet-300'
            />

            {/* Description */}
            <p className='mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
              We design and develop fast, custom-coded websites, ecommerce
              experiences, and web solutions without page builders, bloated
              templates, or unnecessary complexity.
            </p>

            {/* CTA */}
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

            {/* Value props */}
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

            {/* Stats */}
            <div className='mt-14 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-3'>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className='text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl'>
                    {stat.value}
                  </p>

                  <p className='mt-1 text-sm text-white/35'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Discovery call */}
          <div className='relative xl:sticky xl:top-32'>
            {/* card glow */}
            <div
              aria-hidden='true'
              className='absolute -inset-8 -z-10 rounded-[3rem] bg-violet-500/[0.06] blur-3xl'
            />

            <div className='overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] shadow-2xl shadow-black/30 backdrop-blur-xl'>
              {/* Header */}
              <div className='border-b border-white/[0.08] px-6 py-6 sm:px-8'>
                <div className='mb-4 flex items-center justify-between gap-4'>
                  <div className='flex items-center gap-2'>
                    <span className='relative flex size-2.5'>
                      <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-40' />
                      <span className='relative inline-flex size-2.5 rounded-full bg-emerald-400' />
                    </span>

                    <span className='text-xs font-medium uppercase tracking-[0.15em] text-white/40'>
                      Taking new projects
                    </span>
                  </div>

                  <span className='rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/35'>
                    30 min
                  </span>
                </div>

                <h2 className='text-2xl font-semibold tracking-[-0.03em] text-white'>
                  Book a free discovery call
                </h2>

                <p className='mt-2 max-w-md text-sm leading-6 text-white/40'>
                  Tell us what you&apos;re building, what&apos;s not working,
                  or where you want your business to go next.
                </p>

                <div className='mt-5 flex flex-wrap gap-3'>
                  {[
                    'No commitment',
                    'Straightforward advice',
                    'Free consultation',
                  ].map((item) => (
                    <span
                      key={item}
                      className='flex items-center gap-1.5 text-xs text-white/35'
                    >
                      <span className='flex size-4 items-center justify-center rounded-full bg-violet-400/10'>
                        <Check className='size-2.5 text-violet-300' />
                      </span>

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Calendly */}
              <div className='relative bg-white'>
                <iframe
                  src='https://calendly.com/sanovasoftwareinc/30min?back=1'
                  title='Book a discovery call with Sanova Web Solutions'
                  className='block h-[650px] w-full'
                  frameBorder='0'
                  scrolling='no'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom continuation */}
        {/* <div className='mt-8 flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-white/20 lg:mt-16'>
          <span className='h-px w-10 bg-white/10' />
          Built differently
          <span className='h-px w-10 bg-white/10' />
        </div> */}
      </div>
    </section>
  );
}