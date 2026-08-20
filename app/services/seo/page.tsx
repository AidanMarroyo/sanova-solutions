import { Metadata } from 'next';
import {
  BarChart3,
  Clock3,
  FileSearch,
  Link2,
  MapPin,
  Search,
  Settings2,
  TrendingUp,
} from 'lucide-react';

import Hero from '../Hero';
import { Steps } from '../Steps';
import { CTA } from '@/components/CTA';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';




export const metadata: Metadata = {
  title: {
    absolute:
      'SEO Services | Local, Technical & Organic Search Growth | Sanova Web Solutions',
  },

  description:
    'Grow your visibility with SEO services from Sanova Web Solutions, including technical SEO, local SEO, keyword research, content strategy, on-page optimization, and sustainable organic search growth.',

  keywords: [
    'SEO services',
    'SEO company',
    'SEO agency',
    'local SEO services',
    'technical SEO services',
    'organic SEO services',
    'keyword research services',
    'SEO content strategy',
    'on-page SEO',
    'website SEO optimization',
    'small business SEO',
    'local business SEO',
    'SEO consultant Ontario',
    'SEO services Ontario',
    'SEO company Ontario',
    'local SEO Ontario',
    'Google search optimization',
    'organic search growth',
    'website ranking services',
    'Sanova Web Solutions SEO',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'SEO Services',

  alternates: {
    canonical: '/services/seo',
  },

  openGraph: {
    title:
      'SEO Services | Local, Technical & Organic Search Growth | Sanova Web Solutions',

    description:
      'Technical SEO, local search optimization, keyword research, content strategy, and on-page SEO designed to improve visibility and build sustainable organic growth.',

    url: '/services/seo',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-seo.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services by Sanova Web Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'SEO Services | Local, Technical & Organic SEO | Sanova Web Solutions',

    description:
      'Improve your search visibility with technical SEO, local SEO, keyword research, content strategy, and sustainable organic growth.',

    images: ['/images/og/sanova-web-solutions-seo.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const businessTypes = [
  {
    id: 1,
    contentTitle: 'Local Service Businesses',
    content:
      'From contractors and commercial cleaners to home-service companies, we help local businesses strengthen their visibility across traditional search results and Google Maps through stronger websites, local content, and Google Business Profile optimization.',
  },
  {
    id: 2,
    contentTitle: 'B2B Companies',
    content:
      'For B2B companies, SEO can become a consistent lead-generation channel. We build strategies around the way prospective customers research problems, compare solutions, and search for the services or products your business provides.',
  },
  {
    id: 3,
    contentTitle: 'Educational Organizations',
    content:
      'Schools, training programs, studios, and educational organizations can use local and informational search content to reach prospective students and families actively researching programs in their area.',
  },
  {
    id: 4,
    contentTitle: 'Growing Businesses',
    content:
      'Whether you operate a clinic, ecommerce company, professional service firm, or another growing business, we build SEO strategies around your audience, competition, search demand, and long-term growth goals.',
  },
];

const seoProcess = [
  {
    number: '01',
    icon: Settings2,
    title: 'Technical SEO foundation',
    description:
      'We identify technical issues that can make it harder for search engines and users to navigate your website.',
    bullets: [
      'Crawl and indexing review',
      'Broken links and redirect issues',
      'Heading and page structure',
      'Metadata and schema opportunities',
      'Mobile and performance review',
    ],
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Keyword & content strategy',
    description:
      'We research how your customers search and build a content structure around relevant topics, services, products, and locations.',
    bullets: [
      'Keyword and search-intent research',
      'Service and landing page planning',
      'Local content opportunities',
      'Content gaps and competitor analysis',
      'On-page optimization',
    ],
  },
  {
    number: '03',
    icon: MapPin,
    title: 'Local search optimization',
    description:
      'For location-based businesses, we strengthen the signals connecting your website, business information, and local search presence.',
    bullets: [
      'Google Business Profile review',
      'Business information consistency',
      'Location and service-area content',
      'Citation opportunities',
      'Local ranking and visibility tracking',
    ],
  },
  {
    number: '04',
    icon: Link2,
    title: 'Authority & backlinks',
    description:
      'We look for relevant opportunities to strengthen authority through credible mentions, citations, relationships, and backlinks.',
    bullets: [
      'Relevant directory opportunities',
      'Competitor backlink research',
      'Industry-specific opportunities',
      'Strategic outreach',
      'Link-quality review',
    ],
  },
];

const timeline = [
  {
    icon: Search,
    period: 'First 1–3 months',
    title: 'Foundation & opportunities',
    description:
      'Technical fixes, keyword research, content planning, on-page improvements, and quick-win opportunities usually happen first.',
  },
  {
    icon: TrendingUp,
    period: '3–6 months',
    title: 'Early traction',
    description:
      'Depending on the site, competition, and existing authority, businesses may begin seeing clearer movement in rankings, impressions, traffic, and leads.',
  },
  {
    icon: BarChart3,
    period: '6+ months',
    title: 'Compounding growth',
    description:
      'Competitive SEO typically rewards consistency. Strong content, authority building, optimization, and ongoing measurement can compound over time.',
  },
];

export default function Page() {
  return (
    <>
      <Hero
        heading='SEO SERVICES'
        subheading='SEARCH VISIBILITY BUILT FOR LONG-TERM GROWTH'
        description='SEO is more competitive than ever, which means ranking requires more than adding a few keywords to a website. We combine technical SEO, content strategy, local optimization, and ongoing analysis to help businesses strengthen their organic visibility and reach the right customers.'
        src='/images/webseo.webp'
      />

      <Steps
        heading='WHO CAN BENEFIT FROM SEO?'
        content={businessTypes}
      />

      {/* SEO PROCESS */}
      <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute left-[-18rem] top-[10%] h-[36rem] w-[36rem] rounded-full bg-violet-600/[0.06] blur-[150px]' />

          <div className='absolute right-[-16rem] bottom-[5%] h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
        </div>

        <MaxWidthWrapper className='relative'>
          <div className='grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28'>
            {/* Intro */}
            <div>
              <div className='lg:sticky lg:top-36'>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-8 bg-violet-400' />

                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                    Our SEO approach
                  </span>
                </div>

                <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
                  SEO is a system,
                  <span className='block text-white/45'>
                    not a single tactic.
                  </span>
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-white/45 sm:text-lg'>
                  Strong organic growth comes from combining technical quality,
                  useful content, local relevance, authority, and consistent
                  measurement.
                </p>

                <div className='mt-8 rounded-[1.5rem] border border-violet-400/15 bg-violet-400/[0.05] p-5'>
                  <p className='text-sm leading-7 text-white/50'>
                    We focus on building the foundations that make your website
                    easier to understand, easier to discover, and more useful
                    to the people searching for what you offer.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className='space-y-4'>
              {seoProcess.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8'
                  >
                    <div
                      aria-hidden='true'
                      className='pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-violet-500/[0.06] blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                    />

                    <div className='relative'>
                      <div className='flex items-start justify-between gap-6'>
                        <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                          <Icon
                            className='size-[18px]'
                            strokeWidth={1.8}
                          />
                        </div>

                        <span className='text-xs font-semibold tracking-[0.14em] text-white/15'>
                          {item.number}
                        </span>
                      </div>

                      <h3 className='mt-6 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl'>
                        {item.title}
                      </h3>

                      <p className='mt-3 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                        {item.description}
                      </p>

                      <div className='mt-6 grid gap-2.5 sm:grid-cols-2'>
                        {item.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            className='flex items-center gap-2.5 text-sm text-white/40'
                          >
                            <span className='size-1.5 shrink-0 rounded-full bg-violet-300' />
                            {bullet}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* TIMELINE */}
      <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-5 flex items-center justify-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                SEO timelines
              </span>

              <span className='h-px w-8 bg-violet-400' />
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              How long does
              <span className='block text-white/45'>
                SEO take?
              </span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
              There is no universal SEO timeline. Competition, your existing
              website, domain authority, market size, and the quality of your
              current search presence all affect how quickly progress appears.
            </p>
          </div>

          <div className='mt-14 grid gap-4 lg:mt-20 lg:grid-cols-3'>
            {timeline.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.period}
                  className='relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8'
                >
                  <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                    <Icon
                      className='size-[18px]'
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className='mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                    {item.period}
                  </p>

                  <h3 className='mt-2 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                    {item.title}
                  </h3>

                  <p className='mt-4 text-sm leading-7 text-white/40'>
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className='mt-8 flex items-start gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6'>
            <Clock3 className='mt-0.5 size-5 shrink-0 text-violet-300' />

            <p className='text-sm leading-7 text-white/40'>
              SEO is generally best viewed as a long-term growth channel. If
              your business needs immediate visibility while organic rankings
              develop, paid search can complement an SEO strategy.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <CTA
        description='Tell us where your business is today and where you want to rank. We’ll help you identify the strongest opportunities.'
        title='Ready to grow your search visibility?'
        cta='Talk to Sanova'
      />
    </>
  );
}