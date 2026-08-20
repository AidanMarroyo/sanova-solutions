// import { Portfolio } from '@/sections/portfolio/Portfolio';
import MaintenancePage from '@/components/MaintenancePage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute:
      'Ecommerce Development Services | Online Stores That Convert | Sanova Web Solutions',
  },

  description:
    'Grow your online business with custom ecommerce development from Sanova Web Solutions. We build fast, secure, mobile-friendly online stores designed to improve conversions, simplify management, and scale with your business.',

  keywords: [
    'ecommerce development',
    'ecommerce website development',
    'ecommerce web design',
    'online store development',
    'custom ecommerce website',
    'ecommerce development company',
    'ecommerce web design company',
    'online store design',
    'business ecommerce website',
    'small business ecommerce',
    'Shopify alternatives',
    'custom online store',
    'ecommerce SEO',
    'ecommerce website optimization',
    'ecommerce development Ontario',
    'ecommerce web design Ontario',
    'online store development Ontario',
    'Canadian ecommerce development company',
    'Sanova Web Solutions ecommerce',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Ecommerce Development Services',

  alternates: {
    canonical: '/services/ecommerce',
  },

  openGraph: {
    title:
      'Ecommerce Development Services | Sanova Web Solutions',

    description:
      'Custom ecommerce websites and online stores built for speed, usability, conversions, SEO, and long-term business growth.',

    url: '/services/ecommerce',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-ecommerce.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecommerce Development Services by Sanova Web Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ecommerce Development Services | Sanova Web Solutions',

    description:
      'Custom ecommerce websites built to help businesses sell online, improve conversions, and scale.',

    images: ['/images/og/sanova-web-solutions-ecommerce.jpg'],
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
const page = () => {
  return (
    <div>
      {/* <Portfolio /> */}
      <MaintenancePage />
    </div>
  );
};

export default page;
