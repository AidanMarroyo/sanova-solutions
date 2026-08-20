import { Metadata } from 'next';
import {
  CheckCircle2,
  Link2,
  MapPin,
  Search,
  Settings2,
} from 'lucide-react';

import Hero from '../Hero';

import { Steps } from '../Steps';
import { CTA } from '@/components/CTA';
import Features from '@/app/Features';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export const metadata: Metadata = {
  title: 'Custom Web Design & Development',
  description:
    'Custom-coded web design and development from Sanova Web Solutions. Fast, responsive, SEO-ready websites built without WordPress, page builders, or unnecessary bloat.',
  alternates: {
    canonical: '/services/web-design',
  },
  openGraph: {
    title: 'Custom Web Design & Development | Sanova Web Solutions',
    description:
      'Fast, responsive, custom-coded websites designed to help businesses stand out and grow online.',
    url: '/services/web-design',
    type: 'website',
  },
};

const content = [
  {
    id: 1,
    contentTitle: '1. Faster Websites for Better Results',
    content: `A fast website creates a better first impression and reduces friction for visitors. Our custom-coded approach helps keep pages lightweight, responsive, and optimized for performance from the beginning.`,
  },
  {
    id: 2,
    contentTitle: '2. Better Conversion Experiences',
    content: `Speed, usability, and clear design all influence whether visitors take action. We build websites around the customer journey so it is easier for people to understand your offer and move toward contacting or buying from your business.`,
  },
  {
    id: 3,
    contentTitle: '3. Stronger Search Foundations',
    content: `Clean structure, responsive design, fast performance, and properly organized content all contribute to a stronger technical SEO foundation and better overall search visibility.`,
  },
  {
    id: 4,
    contentTitle: '4. Built to Support Local Growth',
    content: `For local businesses, your website works alongside your Google Business Profile, reviews, citations, and local content to help customers discover and trust your business online.`,
  },
];

const seoItems = [
  {
    icon: Settings2,
    title: 'Technical foundation',
    description:
      'We structure your website carefully from the start, including headings, internal links, metadata, crawlability, schema opportunities, and other technical SEO fundamentals.',
  },
  {
    icon: Search,
    title: 'Content optimization',
    description:
      'Keyword research and search intent help guide page structure and content so your website can target terms that matter to your customers.',
  },
  {
    icon: MapPin,
    title: 'Local SEO strategy',
    description:
      'For local businesses, we strengthen the connection between your website, Google Business Profile, service areas, citations, and locally relevant content.',
  },
  {
    icon: Link2,
    title: 'Authority building',
    description:
      'When appropriate, we help identify opportunities for citations, relevant backlinks, partnerships, and other signals that can strengthen your online authority.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        heading='WEB DESIGN'
        subheading='EXPERTLY BUILT WEBSITES WITHOUT COMPROMISE'
        description='We design and develop custom-coded websites without relying on WordPress, page builders, or bloated templates. Every site is built around your brand, your customers, and your goals—with performance, usability, and long-term growth in mind.'
        src='/images/webdesign.webp'
      />

      <Steps
        heading='WHY OUR APPROACH MAKES A DIFFERENCE'
        content={content}
      />

      <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute left-[-18rem] top-[15%] h-[36rem] w-[36rem] rounded-full bg-violet-600/[0.06] blur-[150px]' />

          <div className='absolute right-[-16rem] bottom-[5%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
        </div>

        <MaxWidthWrapper className='relative'>
          <div className='grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28'>
            {/* Intro */}
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  SEO from the foundation
                </span>
              </div>

              <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
                Great web design
                <span className='block text-white/45'>
                  should also be discoverable.
                </span>
              </h2>

              <p className='mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg'>
                Design and SEO should not be treated as separate afterthoughts.
                We build websites with search visibility, usability, and
                performance in mind from the beginning.
              </p>

              <div className='mt-8 rounded-[1.5rem] border border-violet-400/15 bg-violet-400/[0.05] p-5'>
                <div className='flex gap-3'>
                  <CheckCircle2 className='mt-0.5 size-5 shrink-0 text-violet-300' />

                  <p className='text-sm leading-7 text-white/50'>
                    Every website starts with a strong technical foundation.
                    More advanced SEO campaigns can then build on that
                    foundation as your business grows.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO features */}
            <div className='grid gap-4 sm:grid-cols-2'>
              {seoItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-7'
                  >
                    <div
                      aria-hidden='true'
                      className='pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-violet-500/[0.06] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    />

                    <div className='relative'>
                      <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                        <Icon
                          className='size-[18px]'
                          strokeWidth={1.8}
                        />
                      </div>

                      <h3 className='mt-5 text-xl font-semibold tracking-[-0.025em] text-white'>
                        {item.title}
                      </h3>

                      <p className='mt-3 text-sm leading-7 text-white/40'>
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <Features />

      <CTA
        description='Tell us what you need and we’ll help you plan the right website for your business.'
        title='Ready to build a better website?'
        cta='Start your project'
      />
    </>
  );
}