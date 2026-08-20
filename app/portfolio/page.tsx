// import { Portfolio } from '@/sections/portfolio/Portfolio';
import MaintenancePage from '@/components/MaintenancePage';
import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
  title: {
    absolute:
      'Our Work | Web Design, Ecommerce & App Projects | Sanova Web Solutions',
  },

  description:
    'Explore web design, ecommerce, custom application, and digital growth projects by Sanova Web Solutions. See how we help businesses improve their online presence, user experience, and performance.',

  keywords: [
    'Sanova Web Solutions portfolio',
    'web design portfolio',
    'website design projects',
    'web development portfolio',
    'custom website projects',
    'ecommerce portfolio',
    'ecommerce development projects',
    'custom application development',
    'business website examples',
    'website redesign projects',
    'SEO case studies',
    'digital marketing case studies',
    'small business web design portfolio',
    'Ontario web design portfolio',
    'custom business applications',
    'website development case studies',
    'Sanova Web Solutions projects',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design, Development & Digital Projects',

  alternates: {
    canonical: '/our-work',
  },

  openGraph: {
    title:
      'Our Work | Web Design, Ecommerce & App Projects | Sanova Web Solutions',

    description:
      'See websites, ecommerce platforms, custom applications, and digital projects created by Sanova Web Solutions for growing businesses.',

    url: '/our-work',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-our-work.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanova Web Solutions Web Design, Ecommerce and Application Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Our Work | Web Design, Ecommerce & App Projects | Sanova Web Solutions',

    description:
      'Explore websites, ecommerce platforms, custom applications, and digital projects built by Sanova Web Solutions.',

    images: ['/images/og/sanova-web-solutions-our-work.jpg'],
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
