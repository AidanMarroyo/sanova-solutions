import { Metadata } from 'next';
import {
  collection,
  getDocs,
  limit,
  query,
} from 'firebase/firestore';

import Blog from './Blog';

import {
  firestore,
  postToJSON,
} from '@/lib/firebase';

export const dynamic = 'force-dynamic';



export const metadata: Metadata = {
  title: {
    absolute:
      'Web Design, SEO, Ecommerce & Digital Marketing Blog | Sanova Web Solutions',
  },

  description:
    'Explore expert web design, SEO, ecommerce, website development, and digital marketing insights from Sanova Web Solutions. Practical strategies to help businesses improve visibility, attract customers, and grow online.',

  keywords: [
    'web design blog',
    'SEO blog',
    'ecommerce blog',
    'digital marketing blog',
    'website development blog',
    'small business SEO tips',
    'web design tips',
    'SEO tips for businesses',
    'ecommerce tips',
    'website optimization',
    'local SEO tips',
    'Google SEO tips',
    'small business website tips',
    'online business growth',
    'digital growth strategies',
    'website conversion optimization',
    'business website advice',
    'Canadian web design blog',
    'Ontario SEO blog',
    'Sanova Web Solutions blog',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Web Design, SEO & Digital Marketing',

  alternates: {
    canonical: '/blog',
  },

  openGraph: {
    title:
      'Web Design, SEO, Ecommerce & Digital Marketing Blog | Sanova Web Solutions',

    description:
      'Read practical web design, SEO, ecommerce, development, and digital marketing insights designed to help businesses build a stronger online presence and grow.',

    url: '/blog',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',

    images: [
      {
        url: '/images/og/sanova-web-solutions-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanova Web Solutions Web Design, SEO and Ecommerce Blog',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Web Design, SEO & Ecommerce Blog | Sanova Web Solutions',

    description:
      'Web design, SEO, ecommerce, development, and digital growth strategies for businesses looking to compete and grow online.',

    images: ['/images/og/sanova-web-solutions-blog.jpg'],
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

export default async function BlogPage() {
  const ref = collection(firestore, 'posts');

  const postsQuery = query(ref, limit(6));

  const querySnapshot = await getDocs(postsQuery);

  const posts = querySnapshot.docs.map((doc) => {
    const documentData = doc.data();

    /*
     * Your posts appear to be nested inside `data`,
     * so serialize that data manually.
     */
    const post = documentData.data;

    return {
      ...post,
      createdAt: post?.createdAt?.toMillis?.() ?? post?.createdAt ?? 0,
      updatedAt: post?.updatedAt?.toMillis?.() ?? post?.updatedAt ?? 0,
    };
  });

  return <Blog post={posts} />;
}