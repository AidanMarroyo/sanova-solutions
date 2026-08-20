import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';


import { ontarioCities } from '@/lib/locations';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';



export const metadata: Metadata = {
  title: {
    absolute:
      'Ontario Web Design, SEO & Ecommerce Locations | Sanova Web Solutions',
  },

  description:
    'Explore Sanova Web Solutions web design, SEO, ecommerce development, and digital services for businesses across Ontario. Find local service pages for cities and communities throughout the province.',

  keywords: [
    'Ontario web design',
    'Ontario SEO services',
    'Ontario ecommerce development',
    'web design company Ontario',
    'SEO company Ontario',
    'website development Ontario',
    'custom websites Ontario',
    'small business web design Ontario',
    'local SEO Ontario',
    'ecommerce web design Ontario',
    'digital marketing Ontario',
    'web development Ontario',
    'Ontario website design',
    'Ontario business websites',
    'Sanova Web Solutions Ontario',
    'web design locations Ontario',
    'SEO locations Ontario',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design, SEO & Ecommerce Services',

  alternates: {
    canonical: '/locations',
  },

  openGraph: {
    title:
      'Ontario Web Design, SEO & Ecommerce Locations | Sanova Web Solutions',

    description:
      'Professional web design, SEO, ecommerce development, and digital solutions for businesses across cities and communities throughout Ontario.',

    url: '/locations',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-ontario-locations.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanova Web Solutions Web Design and SEO Services Across Ontario',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ontario Web Design, SEO & Ecommerce Locations | Sanova Web Solutions',

    description:
      'Explore web design, SEO, ecommerce development, and digital services for businesses across Ontario.',

    images: ['/images/og/sanova-web-solutions-ontario-locations.jpg'],
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

const services = [
  {
    icon: Code2,
    title: 'Custom Web Design',
    description:
      'Custom-coded websites designed around your brand, customers and business goals.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Technical, local and content-focused SEO strategies built to improve search visibility.',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce',
    description:
      'Fast, intuitive ecommerce experiences designed to make shopping and purchasing easier.',
  },
  {
    icon: Wrench,
    title: 'Website Support',
    description:
      'Redesigns, improvements, maintenance and ongoing technical support as your business grows.',
  },
];

export default function LocationsPage() {
  const citiesByRegion = ontarioCities.reduce<
    Record<string, typeof ontarioCities>
  >((groups, city) => {
    if (!groups[city.region]) {
      groups[city.region] = [];
    }

    groups[city.region].push(city);

    return groups;
  }, {});

  const regions = Object.entries(citiesByRegion);

  return (
    <main>
      {/* HERO */}
      <section className='relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28'>
        {/* Atmosphere */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute left-[15%] top-[-16rem] h-[42rem] w-[42rem] rounded-full bg-violet-600/[0.08] blur-[160px]' />

          <div className='absolute right-[-14rem] top-[15%] h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
        </div>

        <MaxWidthWrapper className='relative'>
          <div className='grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
            {/* Copy */}
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  Serving businesses across Ontario
                </span>
              </div>

              <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
                Web design & SEO
                <span className='block text-white/45'>
                  across Ontario.
                </span>
              </h1>

              <p className='mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
                Sanova Web Solutions helps businesses across Ontario build
                stronger websites, improve their search visibility and create
                better digital experiences for their customers.
              </p>

              <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                Explore our service areas below to see web design, ecommerce
                development and SEO services available for businesses in your
                city.
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                <div className='rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/45'>
                  {ontarioCities.length} Ontario locations
                </div>

                <div className='rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/45'>
                  {regions.length} service regions
                </div>
              </div>
            </div>

            {/* Ontario visual */}
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-12 rounded-[4rem] bg-violet-500/[0.06] blur-[100px]'
              />

              <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-3'>
                <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem]'>
                  <Image
                    src='/images/ontario.jpg'
                    alt='Ontario, Canada'
                    fill
                    priority
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 55vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent' />

                  <div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8'>
                    <div className='flex items-center gap-2 text-violet-300'>
                      <MapPin className='size-4' />

                      <span className='text-xs font-semibold uppercase tracking-[0.16em]'>
                        Ontario, Canada
                      </span>
                    </div>

                    <p className='mt-3 max-w-md text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl'>
                      Digital services built for businesses throughout the
                      province.
                    </p>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-6 right-5 rounded-2xl border border-white/[0.1] bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-8'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Ontario focused
                </p>

                <p className='mt-1 text-xs text-white/40'>
                  Local strategy. Custom execution.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SERVICE AREAS */}
      <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <div className='absolute left-[-18rem] top-[20%] h-[34rem] w-[34rem] rounded-full bg-violet-600/[0.04] blur-[150px]' />

          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
        </div>

        <MaxWidthWrapper className='relative'>
          <div className='max-w-3xl'>
            <div className='mb-5 flex items-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Service areas
              </span>
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Find your city.
              <span className='block text-white/45'>
                Explore local services.
              </span>
            </h2>

            <p className='mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg'>
              Select your area to learn more about the website and SEO services
              available for businesses in your local market.
            </p>
          </div>

          <div className='mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2'>
            {regions.map(([region, cities], regionIndex) => (
              <article
                key={region}
                className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.035] sm:p-8'
              >
                <div
                  aria-hidden='true'
                  className='absolute -right-24 -top-24 size-52 rounded-full bg-violet-500/[0.05] blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />

                <div className='relative'>
                  <div className='flex items-start justify-between gap-5 border-b border-white/[0.07] pb-6'>
                    <div>
                      <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                        Region {String(regionIndex + 1).padStart(2, '0')}
                      </p>

                      <h3 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-white'>
                        {region}
                      </h3>
                    </div>

                    <div className='flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/30'>
                      <MapPin className='size-4' />
                    </div>
                  </div>

                  <div className='mt-5 grid gap-1 sm:grid-cols-2'>
                    {[...cities]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((city) => (
                        <Link
                          key={city.slug}
                          href={`/locations/${city.slug}`}
                          className='group/link flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm text-white/45 transition-all hover:bg-white/[0.04] hover:text-white'
                        >
                          <span>{city.name}</span>

                          <ArrowRight className='size-3.5 -translate-x-1 text-white/15 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100 group-hover/link:text-violet-300' />
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SERVICES */}
      <section className='relative py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mb-5 flex items-center justify-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                What we do
              </span>

              <span className='h-px w-8 bg-violet-400' />
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Digital services for
              <span className='block text-white/45'>
                Ontario businesses.
              </span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg'>
              From a company&apos;s first website to an established business
              looking for stronger search visibility, we build digital
              solutions around real business goals.
            </p>
          </div>

          <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]'
                >
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
                </article>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* FINAL CTA */}
      <section className='pb-20 sm:pb-24 lg:pb-32'>
        <MaxWidthWrapper>
          <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
            <div
              aria-hidden='true'
              className='absolute left-1/2 top-[-12rem] h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[130px]'
            />

            <div className='relative mx-auto max-w-3xl'>
              <div className='mx-auto flex size-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
                <Sparkles className='size-[18px]' />
              </div>

              <p className='mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Don&apos;t see your city?
              </p>

              <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
                We work with businesses
                <span className='block text-white/45'>
                  throughout Ontario.
                </span>
              </h2>

              <p className='mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base'>
                Tell us where your business is located and what you&apos;re
                looking to accomplish. We can help you determine the right
                website or SEO strategy.
              </p>

              <Link
                href='/contact-us'
                className='group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Start your project

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}