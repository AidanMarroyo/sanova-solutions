
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  ArrowRight,
  Code2,
  HeartHandshake,
  MapPin,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[50%] top-[-12rem] h-[40rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]' />

        <div className='absolute right-[-16rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Page intro */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Sanova Web Solutions
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Built with purpose.
            <span className='block text-white/45'>
              Designed to help businesses grow.
            </span>
          </h1>

          <p className='mx-auto mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Sanova was created to make professional, custom-built websites more
            accessible to businesses that want something better than templates,
            bloated platforms, and impersonal service.
          </p>
        </div>

        {/* Main visual */}
        <div className='relative mx-auto mt-16 max-w-6xl lg:mt-20'>
          <div
            aria-hidden='true'
            className='absolute -inset-10 rounded-[4rem] bg-violet-500/[0.06] blur-[100px]'
          />

          <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.5)] sm:p-3'>
            <div className='relative aspect-[16/7] overflow-hidden rounded-[1.5rem]'>
              <Image
                fill
                         src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/computer-dark.png'
                alt='Sanova Web Solutions'
                className='object-cover'
                sizes='(max-width: 1200px) 100vw, 1200px'
                priority
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent' />

              <div className='absolute bottom-0 left-0 max-w-xl p-6 sm:p-8 lg:p-10'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Canadian built
                </p>

                <p className='mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl'>
                  Custom digital experiences with real people behind them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className='mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-28'>
          {/* Founder story */}
          <div>
            <div className='sticky top-36'>
              <div className='mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                <Sparkles className='size-5' strokeWidth={1.8} />
              </div>

              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                How it began
              </p>

              <h2 className='mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                A business built
                <span className='block text-white/45'>
                  around a real problem.
                </span>
              </h2>

              <p className='mt-6 text-base leading-8 text-white/45 sm:text-lg'>
                My name is Aidan, and I&apos;m the founder and lead developer
                behind Sanova Web Solutions.
              </p>

              <p className='mt-5 text-base leading-8 text-white/45 sm:text-lg'>
                I got into web development because I enjoy solving problems
                through technology, design, and creativity. Over time, that
                turned into a larger goal: helping businesses build a stronger
                online presence without making the process complicated or
                inaccessible.
              </p>

              <p className='mt-5 text-base leading-8 text-white/45 sm:text-lg'>
                Building Sanova also gave me the opportunity to create a career
                with more flexibility while building something meaningful for
                my family. That same mindset shapes how we work with clients:
                relationships matter, communication matters, and the work
                should actually make a difference.
              </p>
            </div>
          </div>

          {/* Mission cards */}
          <div className='space-y-4'>
            <StoryCard
              icon={Code2}
              eyebrow='The problem'
              title='Good websites became unnecessarily complicated.'
            >
              <p>
                Too many small businesses are stuck choosing between expensive
                agency projects, generic website builders, or outdated websites
                that no longer represent the quality of their business.
              </p>

              <p>
                We wanted to create another option: modern, professionally
                developed websites without unnecessary complexity.
              </p>
            </StoryCard>

            <StoryCard
              icon={HeartHandshake}
              eyebrow='Our approach'
              title='Professional websites should be more accessible.'
            >
              <p>
                Sanova was built around a simpler model: custom development,
                straightforward pricing, ongoing support, and a team that stays
                involved after launch.
              </p>

              <div className='mt-6 flex items-center gap-4 rounded-2xl border border-violet-400/15 bg-violet-400/[0.05] p-4'>
                <div>
                  <p className='text-xs font-semibold uppercase tracking-[0.14em] text-violet-300'>
                    Website plans
                  </p>

                  <p className='mt-1 text-2xl font-semibold tracking-[-0.03em] text-white'>
                    Starting from $200/month
                  </p>
                </div>
              </div>
            </StoryCard>

            <StoryCard
              icon={MapPin}
              eyebrow='Where we work'
              title='Based in Ontario. Working beyond borders.'
            >
              <p>
                Sanova Web Solutions is based in Ontario, Canada, while serving
                businesses across Canada, the United States, and beyond.
              </p>

              <p>
                Being remote allows us to stay lean, communicate directly, and
                work closely with businesses regardless of where they are
                located.
              </p>
            </StoryCard>
          </div>
        </div>

        {/* Closing statement */}
        <div className='mt-20 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-10 sm:px-10 lg:mt-28 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12'>
          <div className='max-w-2xl'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
              The goal
            </p>

            <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
              Build websites businesses can actually rely on.
            </h2>

            <p className='mt-4 text-sm leading-7 text-white/40 sm:text-base'>
              Better design, better technology, better support, and a more
              straightforward experience from the first conversation onward.
            </p>
          </div>

          <Link
            href='/contact-us'
            className='group mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10 lg:mt-0'
          >
            Work with Sanova

            <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function StoryCard({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 -top-24 size-52 rounded-full bg-violet-500/[0.06] blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
      />

      <div className='relative'>
        <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
          <Icon className='size-[18px]' strokeWidth={1.8} />
        </div>

        <p className='mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
          {eyebrow}
        </p>

        <h3 className='mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl'>
          {title}
        </h3>

        <div className='mt-5 space-y-4 text-sm leading-7 text-white/40 sm:text-base'>
          {children}
        </div>
      </div>
    </article>
  );
}