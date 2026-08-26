
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/lib/constants';
import { Metadata } from 'next';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';



export const metadata: Metadata = {
  title: {
    absolute:
      'Web Design, SEO & Ecommerce FAQs | Sanova Web Solutions',
  },

  description:
    'Get answers to frequently asked questions about Sanova Web Solutions, website design, SEO, ecommerce development, pricing, project timelines, support, hosting, and our development process.',

  keywords: [
    'Sanova Web Solutions FAQ',
    'web design FAQ',
    'website development FAQ',
    'SEO FAQ',
    'ecommerce FAQ',
    'web design pricing',
    'website development cost',
    'how much does a website cost',
    'how long does it take to build a website',
    'SEO services questions',
    'ecommerce development questions',
    'website hosting questions',
    'website maintenance questions',
    'small business website FAQ',
    'web design process',
    'custom website development process',
    'website support services',
    'Ontario web design FAQ',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design, SEO & Ecommerce',

  alternates: {
    canonical: '/faq',
  },

  openGraph: {
    title:
      'Web Design, SEO & Ecommerce FAQs | Sanova Web Solutions',

    description:
      'Find answers about website pricing, development timelines, SEO, ecommerce, hosting, support, and working with Sanova Web Solutions.',

    url: '/faq',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanova Web Solutions Web Design, SEO and Ecommerce FAQs',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Web Design, SEO & Ecommerce FAQs | Sanova Web Solutions',

    description:
      'Answers to common questions about web design, SEO, ecommerce, pricing, timelines, hosting, support, and our development process.',

    images: ['/images/og/sanova-web-solutions-faq.jpg'],
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

export default function FAQPage() {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-14rem] h-[40rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]' />

        <div className='absolute right-[-14rem] bottom-[5%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Frequently asked questions
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Questions?
            <span className='block text-white/45'>
              We&apos;ve got answers.
            </span>
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Everything you need to know about working with Sanova, from our
            website process and pricing to SEO, support, hosting, and ongoing
            updates.
          </p>
        </div>

        {/* FAQ */}
        <div className='mx-auto mt-16 max-w-5xl lg:mt-20'>
          <Accordion
            type='single'
            collapsible
            className='space-y-4'
          >
            {faq.map((term, index) => (
              <AccordionItem
                key={term.section}
                value={`item-${index}`}
                className='overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-0 transition-colors data-[state=open]:border-white/[0.14] data-[state=open]:bg-white/[0.04]'
              >
                <AccordionTrigger className='group px-6 py-6 text-left hover:no-underline sm:px-8 sm:py-7'>
                  <div className='flex items-center gap-4'>
                    <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.07]'>
                      <HelpCircle
                        className='size-[18px]'
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-white/20'>
                        Category 0{index + 1}
                      </p>

                      <h2 className='mt-1 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                        {term.section}
                      </h2>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className='px-6 pb-7 pt-0 sm:px-8 sm:pb-8'>
                  <div className='ml-0 border-t border-white/[0.07] pt-6 sm:ml-[60px]'>
                    <div className='space-y-7'>
                      {term.details.map((detail, detailIndex) => (
                        <div
                          key={`${detail.title}-${detailIndex}`}
                          className='group'
                        >
                          <h3 className='text-base font-semibold text-white sm:text-lg'>
                            {detail.title}
                          </h3>

                          <div className='mt-2 max-w-3xl space-y-4'>
                            {detail.description.map((paragraph, paragraphIndex) => (
                              <p
                                key={paragraphIndex}
                                className='text-sm leading-7 text-white/40 sm:text-base'
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact fallback */}
        <div className='mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-6 py-8 sm:px-8 lg:mt-16'>
          <div className='flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left'>
            <div className='flex flex-col items-center gap-4 md:flex-row'>
              <div className='flex size-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06]'>
                <MessageCircleQuestion
                  className='size-5 text-violet-300'
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className='text-base font-semibold text-white'>
                  Still have a question?
                </p>

                <p className='mt-1 text-sm text-white/35'>
                  Tell us what you&apos;re trying to build and we&apos;ll point
                  you in the right direction.
                </p>
              </div>
            </div>

            <Link
              href='/contact-us'
              className='inline-flex h-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.03] px-6 text-sm font-medium text-white/65 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
            >
              Contact Sanova
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}