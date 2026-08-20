
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Headphones,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sellingPoints = [
  {
    icon: Code2,
    title: 'Custom-built design',
    description:
      'Every website is designed around your brand, goals, and audience instead of being forced into a pre-built template.',
  },
  {
    icon: Gauge,
    title: 'Performance focused',
    description:
      'Lean code, optimized assets, and modern development practices help keep your website fast, responsive, and easy to use.',
  },
  {
    icon: Search,
    title: 'SEO ready',
    description:
      'Strong technical foundations and search-focused structure help your business compete for visibility from day one.',
  },
  {
    icon: Headphones,
    title: 'Real ongoing support',
    description:
      'You get direct access to a real team that can handle updates, improvements, and technical support as your business grows.',
  },
];

export default function UniqueSellingProposition() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute right-[-18rem] top-[15%] h-[38rem] w-[38rem] rounded-full bg-violet-600/[0.07] blur-[150px]' />

        <div className='absolute left-[-15rem] bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        <div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24'>
          {/* Content */}
          <div>
            <div className='mb-5 flex items-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                What we offer
              </span>
            </div>

            <h2 className='max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Professional websites
              <span className='block text-white/45'>
                built for real growth.
              </span>
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg'>
              We make high-quality websites accessible to small businesses and
              growing companies with an all-in-one approach that covers design,
              development, hosting, updates, and ongoing support.
            </p>

            <div className='mt-6 rounded-2xl border border-violet-400/15 bg-violet-400/[0.05] px-5 py-4'>
              <p className='text-sm leading-6 text-white/55'>
                <span className='font-medium text-white'>
                  Need something more advanced?
                </span>{' '}
                We also build custom web applications, ecommerce platforms, and
                tailored solutions for larger or more complex projects.
              </p>
            </div>

            {/* Selling points */}
            <div className='mt-10 grid gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-2'>
              {sellingPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className='group'>
                    <div className='mb-4 flex items-center gap-3'>
                      <div className='flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.07]'>
                        <Icon className='size-4' strokeWidth={1.8} />
                      </div>

                      <h3 className='text-base font-semibold text-white'>
                        {item.title}
                      </h3>
                    </div>

                    <p className='text-sm leading-6 text-white/40'>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className='mt-10'>
              <Link
                href='/contact-us'
                className='group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Schedule a call
                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute -inset-8 rounded-[3rem] bg-violet-500/[0.06] blur-[80px]'
            />

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl'>
              <div className='relative overflow-hidden rounded-[1.5rem]'>
                <Image
                  width={900}
                  height={900}
                  alt='Custom website design created by Sanova Web Solutions'
                  src='/images/customsite.webp'
                  className='h-auto w-full object-cover'
                />

                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
              </div>
            </div>

            {/* Floating proof card */}
            <div className='absolute -bottom-6 left-4 rounded-2xl border border-white/[0.10] bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-8'>
              <div className='flex items-center gap-3'>
                <div className='flex size-9 items-center justify-center rounded-xl bg-violet-400/10'>
                  <Check className='size-4 text-violet-300' />
                </div>

                <div>
                  <p className='text-xs font-medium text-white'>
                    Built around your business
                  </p>

                  <p className='mt-0.5 text-[11px] text-white/35'>
                    No templates. No shortcuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}