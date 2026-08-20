import MaintenancePage from '@/components/MaintenancePage';
import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
  title: {
    absolute:
      'Industries We Serve | Web Design, SEO & Ecommerce | Sanova Web Solutions',
  },

  description:
    'Explore the industries Sanova Web Solutions serves with custom web design, SEO, ecommerce, and digital solutions for retail, healthcare, construction, professional services, technology, hospitality, and more.',

  keywords: [
    'industries we serve',
    'web design for businesses',
    'industry web design',
    'SEO for businesses',
    'ecommerce development for businesses',
    'retail web design',
    'healthcare web design',
    'construction web design',
    'professional services web design',
    'technology company web design',
    'hospitality web design',
    'restaurant web design',
    'real estate web design',
    'contractor web design',
    'small business web design',
    'local business SEO',
    'industry SEO services',
    'custom business websites',
    'Ontario web design company',
    'Sanova Web Solutions',
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
    canonical: '/industries',
  },

  openGraph: {
    title:
      'Industries We Serve | Web Design, SEO & Ecommerce | Sanova Web Solutions',

    description:
      'Sanova Web Solutions provides custom websites, SEO, ecommerce, and digital solutions tailored to businesses across a wide range of industries.',

    url: '/industries',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Industries Served by Sanova Web Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Industries We Serve | Sanova Web Solutions',

    description:
      'Custom web design, SEO, ecommerce, and digital solutions for businesses across retail, healthcare, construction, technology, hospitality, professional services, and more.',

    images: ['/images/og/sanova-web-solutions-industries.jpg'],
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
  return <MaintenancePage />;
};

export default page;
