import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Code2,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';


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
      'Technical, local and content-focused strategies designed to strengthen your visibility in search.',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce',
    description:
      'Fast, user-friendly online stores built to make browsing and purchasing easier.',
  },
  {
    icon: Wrench,
    title: 'Website Support',
    description:
      'Website redesigns, improvements, maintenance and ongoing technical support.',
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
        absolute: 'Location Not Found | Sanova Web Solutions',
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `Web Design, SEO & Ecommerce in ${city.name}, Ontario | Sanova Web Solutions`;

  const description = `Professional web design, SEO, ecommerce development, and website services for businesses in ${city.name}, Ontario. Sanova Web Solutions builds fast, modern, search-friendly websites designed to help local businesses grow online.`;

  const canonical = `/locations/${city.slug}`;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      `web design ${city.name}`,
      `web design ${city.name} Ontario`,
      `${city.name} web design`,
      `website design ${city.name}`,
      `web development ${city.name}`,
      `website development ${city.name}`,
      `SEO ${city.name}`,
      `SEO services ${city.name}`,
      `SEO company ${city.name}`,
      `local SEO ${city.name}`,
      `ecommerce development ${city.name}`,
      `ecommerce web design ${city.name}`,
      `small business web design ${city.name}`,
      `business website design ${city.name}`,
      `custom websites ${city.name}`,
      `digital marketing ${city.name}`,
      `web design company ${city.name}`,
      `Sanova Web Solutions ${city.name}`,
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
      canonical,
    },

    openGraph: {
      title,

      description: `Web design, SEO, ecommerce development, and digital solutions for businesses in ${city.name}, Ontario.`,

      url: canonical,

      siteName: 'Sanova Web Solutions',

      type: 'website',

      locale: 'en_CA',

      images: [
        {
          url:
            city.image ||
            '/images/og/sanova-web-solutions-ontario-locations.jpg',
          width: 1200,
          height: 630,
          alt: `Web Design and SEO Services in ${city.name}, Ontario`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title,

      description: `Professional web design, SEO, ecommerce development, and website services for businesses in ${city.name}, Ontario.`,

      images: [
        city.image ||
          '/images/og/sanova-web-solutions-ontario-locations.jpg',
      ],
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

export default async function CityPage({
  params,
}: Props) {
  const { city: citySlug } = await params;

  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  /*
   * Convert nearby city names into actual location pages when
   * that city exists in our location data.
   */
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
      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            name: 'Locations',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/locations`,
          },
          {
            name: city.name,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/locations/${city.slug}`,
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
          {/* Visible breadcrumbs */}
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
              href='/locations'
              className='transition-colors hover:text-white'
            >
              Ontario Locations
            </Link>

            <ChevronRight className='size-3' />

            <span className='text-white/55'>
              {city.name}
            </span>
          </nav>

          <div className='grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24'>
            {/* Hero copy */}
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  {city.name}, Ontario
                </span>
              </div>

              <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[0.98]'>
                Web design & SEO
                <span className='block text-white/45'>
                  for {city.name} businesses.
                </span>
              </h1>

              <p className='mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
                Sanova Web Solutions helps businesses in {city.name} build
                professional websites, strengthen their search visibility and
                create a better online experience for their customers.
              </p>

              {city.description && (
                <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                  {city.description}
                </p>
              )}

              <div className='mt-8 space-y-3'>
                {[
                  'Custom-coded websites',
                  'SEO-focused foundations',
                  `Built for businesses in ${city.name}`,
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
                  Start your project

                  <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>

                <Link
                  href='/services/web-design'
                  className='inline-flex h-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.025] px-7 text-sm font-medium text-white/65 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
                >
                  Explore web design
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-12 rounded-[4rem] bg-violet-500/[0.06] blur-[100px]'
              />

              <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-3'>
                <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem]'>
                  <Image
                    src={city.image}
                    alt={`Web design and SEO services in ${city.name}, Ontario`}
                    fill
                    priority
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 55vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent' />

                  <div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8'>
                    <div className='flex items-center gap-2'>
                      <MapPin className='size-4 text-violet-300' />

                      <span className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                        Serving {city.name}
                      </span>
                    </div>

                    <p className='mt-3 max-w-md text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl'>
                      Digital solutions built around your local market.
                    </p>
                  </div>
                </div>
              </div>

              <div className='absolute -bottom-6 right-5 rounded-2xl border border-white/[0.1] bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:right-8'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  {city.region}
                </p>

                <p className='mt-1 text-xs text-white/40'>
                  Ontario service area
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SERVICES */}
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
                What we build
              </span>

              <span className='h-px w-8 bg-violet-400' />
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Website services for
              <span className='block text-white/45'>
                {city.name} businesses.
              </span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg'>
              From a new company website to SEO and ongoing improvements, we
              create digital solutions designed around your business and the
              customers you want to reach.
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
            <p className='text-sm leading-7 text-white/40'>
              We work with small businesses, growing companies and organizations
              throughout {city.name} and the surrounding {city.region} area.
              Projects can include custom website development, ecommerce,
              search engine optimization, local SEO, website redesigns,
              maintenance and ongoing improvements.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* INDUSTRIES */}
      {city.industries && city.industries.length > 0 && (
        <section className='relative py-20 sm:py-24 lg:py-32'>
          <MaxWidthWrapper>
            <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-8 bg-violet-400' />

                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                    Local industries
                  </span>
                </div>

                <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                  Helping businesses
                  <span className='block text-white/45'>
                    across {city.name}.
                  </span>
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-white/40'>
                  Different industries compete online in different ways. We
                  shape the website structure, content and search strategy
                  around how customers actually discover businesses like yours.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {city.industries.map((industry, index) => (
                  <div
                    key={industry}
                    className='group flex items-center gap-4 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]'
                  >
                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]'>
                      <Building2 className='size-4 text-violet-300' />
                    </div>

                    <div>
                      <p className='text-[9px] font-semibold uppercase tracking-[0.14em] text-white/20'>
                        Industry {String(index + 1).padStart(2, '0')}
                      </p>

                      <p className='mt-1 text-sm font-medium text-white/65'>
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
          <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]'
            />

            <MaxWidthWrapper className='relative'>
              <div className='mx-auto max-w-4xl rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12'>
                <div className='flex size-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06]'>
                  <MapPin className='size-[18px] text-violet-300' />
                </div>

                <h2 className='mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                  Serving {city.name} and
                  <span className='block text-white/45'>
                    surrounding communities.
                  </span>
                </h2>

                <p className='mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                  Our web design and SEO services are available to businesses
                  throughout {city.name}, including communities such as:
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

      {/* NEARBY CITIES */}
      {nearbyCities.length > 0 && (
        <section className='py-20 sm:py-24 lg:py-32'>
          <MaxWidthWrapper>
            <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20'>
              <div>
                <div className='mb-5 flex items-center gap-3'>
                  <span className='h-px w-8 bg-violet-400' />

                  <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                    Nearby service areas
                  </span>
                </div>

                <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                  Web design near
                  <span className='block text-white/45'>
                    {city.name}.
                  </span>
                </h2>

                <p className='mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base'>
                  We also work with businesses throughout the surrounding{' '}
                  {city.region} region.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {nearbyCities.map((nearbyCity) =>
                  nearbyCity.slug ? (
                    <Link
                      key={nearbyCity.name}
                      href={`/locations/${nearbyCity.slug}`}
                      className='group flex items-center justify-between rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] px-5 py-4 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]'
                    >
                      <div className='flex items-center gap-3'>
                        <MapPin className='size-4 text-violet-300' />

                        <span className='text-sm font-medium text-white/55 group-hover:text-white'>
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

      {/* FINAL CTA */}
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
                Grow your business in {city.name}
              </p>

              <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
                Build a website that
                <span className='block text-white/45'>
                  works harder for your business.
                </span>
              </h2>

              <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                Whether you need a new website, ecommerce store, redesign or
                help improving your search visibility, we can build a digital
                strategy around your goals in {city.name}.
              </p>

              <Link
                href='/contact-us'
                className='group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Tell us about your project

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}