import { Metadata } from 'next';
import React from 'react';
import { ContactForm } from './ContactForm';



export const metadata: Metadata = {
  title: {
    absolute:
      'Contact Sanova Web Solutions | Web Design, SEO & Ecommerce Services',
  },

  description:
    'Contact Sanova Web Solutions to discuss your website, SEO, ecommerce, or digital growth needs. Get in touch today to start building a stronger online presence for your business.',

  keywords: [
    'contact Sanova Web Solutions',
    'web design consultation',
    'SEO consultation',
    'ecommerce consultation',
    'website development consultation',
    'web design company Ontario',
    'SEO company Ontario',
    'custom website services',
    'business website consultation',
    'digital marketing consultation',
    'website development Ontario',
    'small business web design Ontario',
    'Sanova Web Solutions contact',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design, SEO & Digital Services',

  alternates: {
    canonical: '/contact',
  },

  openGraph: {
    title:
      'Contact Sanova Web Solutions | Web Design, SEO & Ecommerce Services',

    description:
      'Have a website, SEO, ecommerce, or digital growth project in mind? Contact Sanova Web Solutions and let’s discuss how we can help your business grow online.',

    url: '/contact',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/contact-sanova-web-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Sanova Web Solutions',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Contact Sanova Web Solutions | Web Design, SEO & Ecommerce Services',

    description:
      'Contact Sanova Web Solutions for web design, SEO, ecommerce development, and digital growth services.',

    images: ['/images/og/contact-sanova-web-solutions.jpg'],
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
      <ContactForm />
    </div>
  );
}

export default page;
