import MaintenancePage from '@/components/MaintenancePage';

import { Metadata } from 'next';




export const metadata: Metadata = {
  title: {
    absolute:
      'Submit a Support Ticket | Customer Support | Sanova Web Solutions',
  },

  description:
    'Submit a support ticket to Sanova Web Solutions for help with your website, ecommerce store, application, hosting, SEO, or other digital services.',

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Customer Support',

  alternates: {
    canonical: '/support',
  },

  openGraph: {
    title:
      'Submit a Support Ticket | Sanova Web Solutions',

    description:
      'Need help with your website, ecommerce store, application, hosting, SEO, or digital services? Submit a support request to Sanova Web Solutions.',

    url: '/support',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',
  },

  twitter: {
    card: 'summary',

    title:
      'Submit a Support Ticket | Sanova Web Solutions',

    description:
      'Submit a support request for help with your Sanova Web Solutions website, application, ecommerce, hosting, or digital services.',
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
      <MaintenancePage />
    </div>
  );
}

export default page;
