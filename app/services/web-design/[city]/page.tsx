import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Layout,
  MapPin,
  MonitorSmartphone,
  Search,
  Sparkles,
  Wrench,
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

const webDesignServices = [
  {
    icon: Layout,
    title: 'Custom Website Design',
    description:
      'Purpose-built layouts designed around your brand, services, customers and business goals.',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description:
      'Clean, modern development without relying on bloated page builders or generic templates.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Experience',
    description:
      'Websites designed to look and work properly across phones, tablets, laptops and desktops.',
  },
  {
    icon: Search,
    title: 'SEO-Ready Structure',
    description:
      'Clear page architecture, metadata and technical foundations built with search visibility in mind.',
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
        absolute: 'Web Design Location Not Found | Sanova Web Solutions',
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `Web Design & Development in ${city.name}, Ontario | Sanova Web Solutions`;

  const description = `Professional web design and development in ${city.name}, Ontario. Sanova Web Solutions builds fast, responsive, custom-coded, SEO-ready websites designed to help local businesses grow online.`;

  const canonical = `/services/web-design/${city.slug}`;

  const image =
    city.image ||
    '/images/og/sanova-web-solutions-web-design.jpg';

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: [
      `web design ${city.name}`,
      `web design ${city.name} Ontario`,
      `website design ${city.name}`,
      `web designer ${city.name}`,
      `web design company ${city.name}`,
      `web development ${city.name}`,
      `website development ${city.name}`,
      `web developer ${city.name}`,
      `custom web design ${city.name}`,
      `custom website development ${city.name}`,
      `custom coded websites ${city.name}`,
      `professional web design ${city.name}`,
      `responsive web design ${city.name}`,
      `SEO friendly web design ${city.name}`,
      `SEO ready websites ${city.name}`,
      `business website design ${city.name}`,
      `small business web design ${city.name}`,
      `local business web design ${city.name}`,
      `website redesign ${city.name}`,
      `Sanova Web Solutions ${city.name}`,
    ],

    authors: [
      {
        name: 'Sanova Web Solutions',
      },
    ],

    creator: 'Sanova Web Solutions',

    publisher: 'Sanova Web Solutions',

    category: 'Web Design & Development Services',

    alternates: {
      canonical,
    },

    openGraph: {
      title,

      description: `Custom web design and development for businesses in ${city.name}, Ontario. Fast, responsive, SEO-ready websites built without unnecessary bloat.`,

      url: canonical,

      siteName: 'Sanova Web Solutions',

      type: 'website',

      locale: 'en_CA',

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Web Design and Development in ${city.name}, Ontario by Sanova Web Solutions`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',

      title,

      description: `Professional custom web design and development for businesses in ${city.name}, Ontario.`,

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

export default async function CityWebDesignPage({
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
        serviceName={`Web Design in ${city.name}, Ontario`}
        serviceDescription={`Professional web design and website development services for businesses in ${city.name}, Ontario.`}
        city={city.name}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/web-design/${city.slug}`}
      />

      <BreadcrumbSchema
        items={[
          {
            name: 'Home',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            name: 'Web Design',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/web-design`,
          },
          {
            name: city.name,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/web-design/${city.slug}`,
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
              href='/services/web-design'
              className='transition-colors hover:text-white'
            >
              Web Design
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
                  Web Design · {city.name}, Ontario
                </span>
              </div>

              <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[0.98]'>
                Websites built to
                <span className='block text-white/45'>
                  make {city.name} businesses stand out.
                </span>
              </h1>

              <p className='mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
                Sanova Web Solutions designs and develops professional websites
                for businesses in {city.name} that need a stronger online
                presence, better performance and a more polished customer
                experience.
              </p>

              <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                Whether you&apos;re launching a business, replacing an outdated
                website or improving an existing one, we build around your
                brand, customers and long-term goals.
              </p>

              <div className='mt-8 space-y-3'>
                {[
                  'Custom-built around your business',
                  'Responsive across every device',
                  'SEO considered from the foundation',
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
                  Start your website

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

            {/* Website visual */}
            <div className='relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-12 rounded-[4rem] bg-violet-500/[0.06] blur-[100px]'
              />

              <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-3'>
                {/* Browser */}
                <div className='flex h-11 items-center gap-2 border-b border-white/[0.07] px-3'>
                  <span className='size-2.5 rounded-full bg-white/15' />
                  <span className='size-2.5 rounded-full bg-white/10' />
                  <span className='size-2.5 rounded-full bg-white/[0.07]' />

                  <div className='mx-auto hidden rounded-md border border-white/[0.06] bg-white/[0.03] px-4 py-1 text-[10px] text-white/20 sm:block'>
                    yourbusiness.ca
                  </div>
                </div>

                <div className='relative aspect-[4/3] overflow-hidden rounded-[1.5rem]'>
                  <Image
                    src={city.image}
                    alt={`Professional web design in ${city.name}, Ontario`}
                    fill
                    priority
                    className='object-cover'
                    sizes='(max-width: 1024px) 100vw, 55vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
                </div>
              </div>

              <div className='absolute -bottom-6 left-5 rounded-2xl border border-white/[0.1] bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-8'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Custom development
                </p>

                <p className='mt-1 text-xs text-white/40'>
                  No templates. Built around your brand.
                </p>
              </div>

              <div className='absolute -right-3 top-20 hidden rounded-2xl border border-white/[0.1] bg-black/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300'>
                  Serving
                </p>

                <div className='mt-1 flex items-center gap-1.5 text-xs text-white/45'>
                  <MapPin className='size-3' />
                  {city.name}
                </div>
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
                Website services
              </span>

              <span className='h-px w-8 bg-violet-400' />
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              Professional websites for
              <span className='block text-white/45'>
                {city.name} businesses.
              </span>
            </h2>

            <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/40 sm:text-lg'>
              Your website should make your business easier to understand,
              easier to trust and easier to contact.
            </p>
          </div>

          <div className='mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4'>
            {webDesignServices.map((service) => {
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
            <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                'Small business websites',
                'Website redesigns',
                'Landing pages',
                'Ecommerce websites',
                'SEO-ready development',
                'Responsive development',
                'Website maintenance',
                'Ongoing updates',
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

      {/* WHY WEBSITE MATTERS */}
      <section className='relative py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='grid gap-5 lg:grid-cols-2'>
            <article className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9'>
              <Sparkles className='size-5 text-violet-300' />

              <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                First impressions
              </p>

              <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                Your website should build trust quickly.
              </h2>

              <p className='mt-5 text-sm leading-7 text-white/40 sm:text-base'>
                For many customers, your website is one of the first places
                they evaluate your business. Strong design, clear messaging and
                intuitive navigation can make it easier for visitors to
                understand what you offer and what they should do next.
              </p>
            </article>

            <article className='relative overflow-hidden rounded-[2rem] border border-violet-400/15 bg-violet-400/[0.045] p-7 sm:p-9'>
              <div
                aria-hidden='true'
                className='absolute -right-24 -top-24 size-56 rounded-full bg-violet-500/[0.1] blur-[90px]'
              />

              <div className='relative'>
                <Code2 className='size-5 text-violet-300' />

                <p className='mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Built around your goals
                </p>

                <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                  Not another off-the-shelf template.
                </h2>

                <p className='mt-5 text-sm leading-7 text-white/40 sm:text-base'>
                  We build around the actual needs of your business rather than
                  forcing your content into a prebuilt layout. That gives us more
                  control over design, structure, performance and the overall
                  customer experience.
                </p>
              </div>
            </article>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* SEO CONNECTION */}
      <section className='py-20 sm:py-24 lg:py-32'>
        <MaxWidthWrapper>
          <div className='grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
            <div>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  Search foundation
                </span>
              </div>

              <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
                Websites built with
                <span className='block text-white/45'>
                  search visibility in mind.
                </span>
              </h2>

              <p className='mt-6 max-w-xl text-base leading-8 text-white/40'>
                Site structure, mobile usability, performance, metadata and
                internal linking all contribute to how search engines understand
                your website.
              </p>

              <p className='mt-4 max-w-xl text-sm leading-7 text-white/35'>
                Every site starts with a clean foundation. For businesses that
                want to invest further in organic growth, we also provide
                dedicated SEO services in {city.name}.
              </p>

              <Link
                href={`/services/seo/${city.slug}`}
                className='group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white'
              >
                SEO services in {city.name}

                <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-2 sm:p-3'>
              <div className='relative aspect-[16/10] overflow-hidden rounded-[1.5rem]'>
                <Image
                  src='/images/100score.webp'
                  alt='Website performance and technical optimization'
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
                  Web design for
                  <span className='block text-white/45'>
                    {city.name} businesses.
                  </span>
                </h2>

                <p className='mt-6 max-w-xl text-base leading-8 text-white/40'>
                  Different industries need different website structures,
                  messaging and customer journeys. We design around how people
                  actually evaluate and contact businesses like yours.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {city.industries.map((industry, index) => (
                  <div
                    key={industry}
                    className='group flex items-center gap-4 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.025] p-5 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]'
                  >
                    <div className='flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]'>
                      <Layout className='size-4 text-violet-300' />
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
          <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.04] blur-[150px]'
            />

            <MaxWidthWrapper className='relative'>
              <div className='mx-auto max-w-4xl rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12'>
                <MapPin className='size-5 text-violet-300' />

                <h2 className='mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                  Serving businesses throughout
                  <span className='block text-white/45'>
                    {city.name}.
                  </span>
                </h2>

                <p className='mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                  Our web design services are available to businesses throughout
                  {` ${city.name}`}, including:
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
            <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
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
                  We also provide website design and development services
                  throughout {city.region} and nearby Ontario communities.
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                {nearbyCities.map((nearbyCity) =>
                  nearbyCity.slug ? (
                    <Link
                      key={nearbyCity.name}
                      href={`/services/web-design/${nearbyCity.slug}`}
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
                href={`/services/seo/${city.slug}`}
                title={`SEO services in ${city.name}`}
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
                Start your {city.name} website project
              </p>

              <h2 className='mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl'>
                Build a better first impression.
                <span className='block text-white/45'>
                  Turn it into a better customer experience.
                </span>
              </h2>

              <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base'>
                If your business needs a new website or wants to improve an
                existing one, we can build a professional experience around
                your brand, customers and goals in {city.name}.
              </p>

              <Link
                href='/contact-us'
                className='group mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                Start your website

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