import { Intro } from '@/app/about-us/Intro';
import { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { Process } from './Process';
// import { Team } from './Team';
import Features from '../Features';


export const metadata: Metadata = {
  title: {
    absolute:
      'About Sanova Web Solutions | Web Design, Development & SEO Experts',
  },

  description:
    'Learn about Sanova Web Solutions, a Canadian web design and digital solutions company helping businesses grow with custom websites, e-commerce development, SEO, and modern digital strategies.',

  keywords: [
    'Sanova Web Solutions',
    'about Sanova Web Solutions',
    'web design company',
    'web development company',
    'Canadian web design company',
    'Ontario web design company',
    'website development Ontario',
    'custom website development',
    'small business web design',
    'business website development',
    'ecommerce web development',
    'SEO services Ontario',
    'SEO company Ontario',
    'digital solutions company',
    'website design services',
    'professional web design',
    'Next.js web development',
    'React web development',
    'local business web design',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design & Development',

  alternates: {
    canonical: '/about',
  },

  openGraph: {
    title:
      'About Sanova Web Solutions | Web Design, Development & SEO Experts',

    description:
      'Discover Sanova Web Solutions and how we help businesses build a stronger online presence through professional web design, custom development, e-commerce, SEO, and digital growth strategies.',

    url: '/about',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/about-sanova-web-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanova Web Solutions - Web Design, Development and SEO',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'About Sanova Web Solutions | Web Design, Development & SEO Experts',

    description:
      'Learn how Sanova Web Solutions helps businesses grow online with custom websites, e-commerce development, SEO, and modern digital solutions.',

    images: ['/images/og/about-sanova-web-solutions.jpg'],
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

function page() {
  return (
    <div>
      <Intro />
      <Process />
      <Features />
      {/* <Team /> */}
      <CTA
        title='Let’s Build Your Success Story'
        description=''
        cta='Get in Touch'
      />
    </div>
  );
}

export default page;
