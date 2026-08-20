import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  FileSearch,
  MapPin,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';


import LocalServiceSchema from '@/components/seo/LocalServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadCrumbSchema';

import {
  getCityBySlug,
  ontarioCities,
} from '@/lib/locations';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

type Props = {
  params: Promise<{
    city: string;
  }>;
};

const seoServices = [
  {
    icon: MapPin,
    title: 'Local SEO',
    description:
      'Strengthen your visibility for searches connected to your city, service area and local customers.',
  },
  {
    icon: FileSearch,
    title: 'On-Page SEO',
    description:
      'Improve page structure, content, metadata and internal linking around the searches that matter.',
  },
  {
    icon: Search,
    title: 'Technical SEO',
    description:
      'Identify crawl, indexing, performance and structural issues that can make your website harder to understand.',
  },
  {
    icon: BarChart3,
    title: 'Search Monitoring',
    description:
      'Track rankings, search impressions, website traffic and other signals to understand how visibility changes.',
  },
];

export async function generateStaticParams() {
  return ontarioCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { city: citySlug } = await params;

  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: {
        absolute: 'SEO Location Not Found | Sanova Web Solutions',
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `SEO Services in ${city.name}, Ontario | Local & Technical SEO | Sanova Web Solutions`;

  const description = `Professional SEO services in ${city.name}, Ontario. Sanova Web Solutions helps local businesses improve Google visibility through local SEO, technical SEO, keyword research, on-page optimization, and sustainable organic search strategies.`;

  const canonical = `/services/seo/${city.slug}`;

  const image =
    city.image ||
    '/images/og/sanova-web-solutions-seo.jpg';

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      `SEO ${city.name}`,
      `SEO services ${city.name}`,
      `SEO services ${city.name} Ontario`,
      `SEO company ${city.name}`,
      `SEO agency ${city.name}`,
      `SEO consultant ${city.name}`,
      `local SEO ${city.name}`,
      `local SEO services ${city.name}`,
      `technical SEO ${city.name}`,
      `organic SEO ${city.name}`,
      `on-page SEO ${city.name}`,
      `keyword research ${city.name}`,
      `Google SEO ${city.name}`,
      `Google ranking services ${city.name}`,
      `search engine optimization ${city.name}`,
      `website SEO ${city.name}`,
      `small business SEO ${city.name}`,
      `local business SEO ${city.name}`,
      `SEO expert ${city.name}`,
      `Sanova Web Solutions ${city.name}`,
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
      canonical,
    },

    openGraph: {
      title,

      description: `Local SEO, technical SEO, keyword research, on-page optimization, and organic search strategies for businesses in ${city.name}, Ontario.`,

      url: canonical,

      siteName: 'Sanova Web Solutions',

      type: 'website',

      locale: 'en_CA',

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `SEO Services in ${city.name}, Ontario by Sanova Web Solutions`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title,

      description: `Professional local and technical SEO services for businesses in ${city.name}, Ontario.`,

      images: [image],
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
}

export default async function CitySEOPage({
  params,
}: Props) {
  const { city: citySlug } = await params;

  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const nearbyCities = city.nearbyCities.map((nearbyCityName) => {
    const match = ontarioCities.find(
      (location) =>
        location.name.toLowerCase() ===
        nearbyCityName.toLowerCase()
    );

    return {
      name: nearbyCityName,
      slug: match?.slug,
    };
  });

  return (
    <main>
      <LocalServiceSchema
        serviceName={`SEO Services in ${city.name}, Ontario`}
        serviceDescription={`Search engine optimization and local SEO services for businesses in ${city.name}, Ontario.`}
        city={city.name}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/seo/${city.slug}`}
      />

      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            name: 'SEO',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/seo`,
          },
          {
            name: city.name,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/seo/${city.slug}`,
          },
        ]}
      />

      {/* HERO */}
      <section className='relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute left-[10%] top-[-16rem] h-[44rem] w-[44rem] rounded-full bg-violet-600/[0.08] blur-[170px]' />

          <div className='absolute right-[-18rem] top-[20%] h-[36rem] w-[36rem] rounded-full bg-blue-600/[0.05] blur-[160px]' />

          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
        </div>

        <MaxWidthWrapper className='relative'>
          <nav
            aria-label='Breadcrumb'
            className='mb-12 flex flex-wrap items-center gap-2 text-xs text-white/30'
          >
            <Link
              href='/'
              className='transition-colors hover:text-white'
            >
              Home
            </Link>

            <ChevronRight className='size-3' />

            <Link
              href='/services/seo'
              className='transition-colors hover:text-white'
            >
              SEO
            </Link>

            <ChevronRight className='size-3' />

            <span className='text-white/55'>
              {city.name}
            </span>
          </nav>

          <div className='grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24'>
            {/* Copy */}
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  SEO · {city.name}, Ontario
                </span>
              </div>

              <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[0.98]'>
                Get discovered
                <span className='block text-white/45'>
                  in {city.name}.
                </span>
              </h1>

              <p className='mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
                Sanova Web Solutions helps businesses in {city.name} strengthen
                their visibility on Google and build a better foundation for
                sustainable organic search growth.
              </p>

              <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                Our SEO approach combines technical improvements, content,
                local search signals and ongoing analysis around the way your
                customers actually search.
              </p>

              <div className='mt-8 space-y-3'>
                {[
                  'Local search optimization',
                  'Technical SEO foundations',
                  'Content built around search intent',
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
                  Improve your visibility

                  <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>

                <Link
                  href='/services/seo'
                  className='inline-flex h-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.025] px-7 text-sm font-medium text-white/65 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
                >
                  Explore SEO services
                </Link>
              </div>
            </div>

            {/* SEO visual */}
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-12 rounded-[4rem] bg-violet-500/[0.06] blur-[100px]'
              />

              <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-3'>
                <div className='flex h-11 items-center gap-2 border-b border-white/[0.07] px-3'>
                  <span className='size-2.5 rounded-full bg-white/15' />
                  <span className='size-2.5 rounded-full bg-white/10' />
                  <span className='size-2.5 rounded-full bg-white/[0.07]' />

                  <div className='mx-auto hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1 text-[10px] text-white/20 sm:block'>
                    Google Search
                  </div>
                </div>

                <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem]'>
                  <Image
                    src={city.image}
                    alt={`SEO services for businesses in ${city.name}, Ontario`}
                    fill
                    priority
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 55vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent' />

                  <div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8'>
                    <div className='flex items-center gap-2'>
                      <TrendingUp className='size-4 text-violet-300' />

                      <span className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                        Organic visibility
                      </span>
                    </div>

                    <p className='mt-3 max-w-md text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl'>
                      Be easier to find when customers are searching.
                    </p>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-6 right-5 rounded-2xl border border-white/[0.1] bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-8'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Local SEO
                </p>

                <p className='mt-1 text-xs text-white/40'>
                  {city.name} · {city.region}
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SEO SERVICES */}
      <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent'
        />

        <MaxWidthWrapper>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-5 flex items-center justify-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Search optimization
              </span>

              <span className='h-px w-8 bg-violet-400' />
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              SEO services for
              <span className='block text-white/45'>
                {city.name} businesses.
              </span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg'>
              Ranking well requires more than adding keywords to a page. We look
              at the full search foundation of your website and local presence.
            </p>
          </div>

          <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
            {seoServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]'
                >
                  <div
                    aria-hidden='true'
                    className='absolute -right-20 -top-20 size-44 rounded-full bg-violet-500/[0.06] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                  />

                  <div className='relative'>
                    <div className='flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                      <Icon
                        className='size-[18px]'
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className='mt-6 text-xl font-semibold tracking-[-0.025em] text-white'>
                      {service.title}
                    </h3>

                    <p className='mt-3 text-sm leading-7 text-white/40'>
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className='mt-8 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8'>
            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                'Keyword research',
                'Content optimization',
                'Google Business Profile optimization',
                'Internal linking strategies',
                'Local landing page optimization',
                'SEO audits',
                'Search performance monitoring',
                'Metadata optimization',
                'Technical website reviews',
              ].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-3 text-sm text-white/40'
                >
                  <span className='size-1.5 shrink-0 rounded-full bg-violet-300' />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* LOCAL SEO */}
      <section className='relative py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='grid gap-5 lg:grid-cols-2'>
            <article className='relative overflow-hidden rounded-[2rem] border border-violet-400/15 bg-violet-400/[0.045] p-7 sm:p-9'>
              <div
                aria-hidden='true'
                className='absolute -right-24 -top-24 size-56 rounded-full bg-violet-500/[0.1] blur-[90px]'
              />

              <div className='relative'>
                <MapPin className='size-5 text-violet-300' />

                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Local SEO
                </p>

                <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                  Compete for searches around {city.name}.
                </h2>

                <p className='mt-5 text-sm leading-7 text-white/40 sm:text-base'>
                  Local SEO helps search engines understand where your business
                  operates, what you offer and when your website may be relevant
                  to a local customer.
                </p>

                <p className='mt-4 text-sm leading-7 text-white/40 sm:text-base'>
                  That can include local content, business information,
                  Google Business Profile optimization, citations and stronger
                  connections between your website and service area.
                </p>
              </div>
            </article>

            <article className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9'>
              <Target className='size-5 text-violet-300' />

              <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                Search intent
              </p>

              <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                Reach customers already looking.
              </h2>

              <p className='mt-5 text-sm leading-7 text-white/40 sm:text-base'>
                Organic search can connect your business with people actively
                researching the products or services you provide.
              </p>

              <p className='mt-4 text-sm leading-7 text-white/40 sm:text-base'>
                We build SEO around relevant searches and user intent rather
                than chasing traffic that has little connection to your
                business.
              </p>
            </article>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SEO + WEB DESIGN */}
      <section className='py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  Website foundation
                </span>
              </div>

              <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                SEO works better on
                <span className='block text-white/45'>
                  a stronger website.
                </span>
              </h2>

              <p className='mt-6 max-w-xl text-base leading-8 text-white/40'>
                Site structure, performance, mobile usability, internal links
                and metadata all contribute to how easily search engines can
                understand a website.
              </p>

              <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                If your existing website is outdated, difficult to navigate or
                technically limiting your SEO strategy, we can also rebuild it
                around a cleaner search foundation.
              </p>

              <Link
                href={`/services/web-design/${city.slug}`}
                className='group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white'
              >
                Web design in {city.name}

                <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-2 sm:p-3'>
              <div className='relative aspect-[16/10] overflow-hidden rounded-[1.5rem]'>
                <Image
                  src='/images/100score.webp'
                  alt='Website performance and SEO optimization'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 55vw'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* INDUSTRIES */}
      {city.industries && city.industries.length > 0 && (
        <section className='py-20 sm:py-24 lg:py-32'>
          <MaxWidthWrapper>
            <div className='grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-8 bg-violet-400' />

                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                    Local industries
                  </span>
                </div>

                <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                  SEO for businesses
                  <span className='block text-white/45'>
                    across {city.name}.
                  </span>
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-white/40'>
                  Search behaviour is different from one industry to another.
                  We shape the strategy around what customers search for and
                  how they evaluate businesses like yours.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {city.industries.map((industry, index) => (
                  <div
                    key={industry}
                    className='flex items-center gap-4 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] p-5'
                  >
                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]'>
                      <Search className='size-4 text-violet-300' />
                    </div>

                    <div>
                      <p className='text-[9px] font-semibold uppercase tracking-[0.14em] text-white/20'>
                        Industry {String(index + 1).padStart(2, '0')}
                      </p>

                      <p className='mt-1 text-sm font-medium text-white/60'>
                        {industry}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* NEIGHBOURHOODS */}
      {city.neighbourhoods &&
        city.neighbourhoods.length > 0 && (
          <section className='py-20 sm:py-24 lg:py-32'>
            <MaxWidthWrapper>
              <div className='mx-auto max-w-4xl rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12'>
                <MapPin className='size-5 text-violet-300' />

                <h2 className='mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                  SEO services across
                  <span className='block text-white/45'>
                    {city.name}.
                  </span>
                </h2>

                <p className='mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                  We work with businesses throughout {city.name}, including:
                </p>

                <div className='mt-8 flex flex-wrap gap-2.5'>
                  {city.neighbourhoods.map((neighbourhood) => (
                    <span
                      key={neighbourhood}
                      className='rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-white/45'
                    >
                      {neighbourhood}
                    </span>
                  ))}
                </div>
              </div>
            </MaxWidthWrapper>
          </section>
        )}

      {/* NEARBY */}
      {nearbyCities.length > 0 && (
        <section className='py-20 sm:py-24 lg:py-32'>
          <MaxWidthWrapper>
            <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-8 bg-violet-400' />

                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                    Nearby service areas
                  </span>
                </div>

                <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                  SEO services near
                  <span className='block text-white/45'>
                    {city.name}.
                  </span>
                </h2>

                <p className='mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base'>
                  We also work with businesses throughout {city.region} and
                  nearby Ontario communities.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {nearbyCities.map((nearbyCity) =>
                  nearbyCity.slug ? (
                    <Link
                      key={nearbyCity.name}
                      href={`/services/seo/${nearbyCity.slug}`}
                      className='group flex items-center justify-between rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] px-5 py-4 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]'
                    >
                      <div className='flex items-center gap-3'>
                        <MapPin className='size-4 text-violet-300' />

                        <span className='text-sm font-medium text-white/55 transition-colors group-hover:text-white'>
                          {nearbyCity.name}
                        </span>
                      </div>

                      <ArrowRight className='size-4 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-violet-300' />
                    </Link>
                  ) : (
                    <div
                      key={nearbyCity.name}
                      className='flex items-center gap-3 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] px-5 py-4'
                    >
                      <MapPin className='size-4 text-violet-300' />

                      <span className='text-sm text-white/45'>
                        {nearbyCity.name}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className='py-20 sm:py-24'>
        <MaxWidthWrapper>
          <div className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
              More services in {city.name}
            </p>

            <div className='mt-6 grid gap-3 md:grid-cols-3'>
              <ServiceLink
                href={`/locations/${city.slug}`}
                title={`Digital services in ${city.name}`}
              />

              <ServiceLink
                href={`/services/web-design/${city.slug}`}
                title={`Web design in ${city.name}`}
              />

              <ServiceLink
                href={`/services/ecommerce/${city.slug}`}
                title={`Ecommerce in ${city.name}`}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section className='pb-20 pt-8 sm:pb-24 lg:pb-32'>
        <MaxWidthWrapper>
          <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
            <div
              aria-hidden='true'
              className='absolute left-1/2 top-[-12rem] h-[30rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/[0.1] blur-[130px]'
            />

            <div className='relative mx-auto max-w-3xl'>
              <div className='mx-auto flex size-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06]'>
                <Sparkles className='size-[18px] text-violet-300' />
              </div>

              <p className='mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Grow your visibility in {city.name}
              </p>

              <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
                Get your business
                <span className='block text-white/45'>
                  in front of more searches.
                </span>
              </h2>

              <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                If you want to strengthen your presence on Google, we can build
                an SEO strategy around your website, local market, competition
                and long-term business goals.
              </p>

              <Link
                href='/contact-us'
                className='group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Talk about your SEO

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}

function ServiceLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className='group flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]'
    >
      <span className='text-sm font-medium text-white/55 transition-colors group-hover:text-white'>
        {title}
      </span>

      <ArrowRight className='size-4 shrink-0 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-violet-300' />
    </Link>
  );
}