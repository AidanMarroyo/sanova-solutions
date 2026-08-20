
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  heading: string;
  subheading: string;
  description: string;
  src: string;
}

function Hero({
  heading,
  subheading,
  description,
  src,
}: HeroProps) {
  return (
    <section className='relative overflow-hidden py-16 sm:py-20 lg:py-28'>
      {/* Atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[30%] top-[-8rem] h-[36rem] w-[36rem] rounded-full bg-violet-600/[0.08] blur-[150px]' />

        <div className='absolute right-[-16rem] top-[20%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Page heading */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Sanova Web Solutions
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            {heading}
          </h1>
        </div>

        {/* Main hero */}
        <div className='mt-14 grid items-center gap-14 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24'>
          {/* Content */}
          <div>
            <div className='mb-5 flex items-center gap-2'>
              <Sparkles
                className='size-4 text-violet-300'
                strokeWidth={1.8}
              />

              <span className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                Built differently
              </span>
            </div>

            <h2 className='max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
              {subheading}
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg'>
              {description}
            </p>

            <div className='mt-8 space-y-3'>
              {[
                'Custom-built around your business',
                'Performance and SEO considered from day one',
                'Ongoing support after launch',
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-3 text-sm text-white/45'
                >
                  <span className='flex size-5 items-center justify-center rounded-full bg-violet-400/[0.08]'>
                    <Check className='size-3 text-violet-300' />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/contact-us'
                className='group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Schedule a call

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>

              <Link
                href='/portfolio'
                className='inline-flex h-14 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] px-7 text-sm font-medium text-white/65 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
              >
                View our work
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute -inset-10 rounded-[4rem] bg-violet-500/[0.06] blur-[90px]'
            />

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-3'>
              {/* browser bar */}
              <div className='flex h-11 items-center gap-2 border-b border-white/[0.07] px-3'>
                <span className='size-2.5 rounded-full bg-white/15' />
                <span className='size-2.5 rounded-full bg-white/10' />
                <span className='size-2.5 rounded-full bg-white/[0.07]' />

                <div className='mx-auto hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1 text-[10px] text-white/20 sm:block'>
                  sanovawebsolutions.com
                </div>
              </div>

              <div className='relative overflow-hidden rounded-[1.4rem]'>
                <Image
                  width={1217}
                  height={1058}
                  alt={heading}
                  src={src}
                  priority
                  className='h-auto w-full object-cover'
                />

                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
              </div>
            </div>

            {/* Floating badge */}
            <div className='absolute -bottom-6 left-4 rounded-2xl border border-white/[0.10] bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-8'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                Custom development
              </p>

              <p className='mt-1 text-xs text-white/45'>
                No templates. No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;