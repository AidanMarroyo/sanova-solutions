<<<<<<< HEAD
import { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title:
    'Sanova Web Solutions | Custom Websites, Ecommerce & SEO Services for Businesses',
  description:
    'Boost your business with Sanova Web Solutions. We offer custom websites, e-commerce solutions, and seo strategies tailored for success.',
=======
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://sanovawebsolutions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Sanova Web Solutions | Custom Websites, Ecommerce & SEO Services',
    template: '%s | Sanova Web Solutions',
  },

  description:
    'Sanova Web Solutions builds high-performance custom websites, ecommerce experiences, and SEO strategies designed to help businesses grow online.',

  applicationName: 'Sanova Web Solutions',

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',
  publisher: 'Sanova Web Solutions',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Sanova Web Solutions',
    title: 'Sanova Web Solutions | Websites Built to Grow Businesses',
    description:
      'Custom websites, ecommerce solutions, and SEO strategies built to help businesses stand out and grow online.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sanova Web Solutions | Websites Built to Grow Businesses',
    description:
      'Custom websites, ecommerce solutions, and SEO strategies designed for growth.',
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

>>>>>>> main
  icons: {
    icon: '/favicon.ico',
  },
};

<<<<<<< HEAD
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={`antialiased`}>
        <div className='fixed top-0 left-0 -z-10 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Navbar />
          <main className='relative z-0 lg:mt-60 mt-52 mx-auto'>
            {children}
          </main>
          <Toaster />
          <Footer />
=======
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className='min-h-dvh overflow-x-hidden bg-[#050505] font-sans text-white antialiased selection:bg-violet-500/30 selection:text-white'>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className='relative flex min-h-dvh flex-col'>
            {/* Global Sanova background */}
            <div
              aria-hidden='true'
              className='pointer-events-none fixed inset-0 z-0 overflow-hidden'
            >
              {/* Base */}
              <div className='absolute inset-0 bg-[#050505]' />

              {/* Top brand glow */}
              <div className='absolute -top-[30rem] left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[160px]' />

              {/* Left blue glow */}
              <div className='absolute left-[-20rem] top-[30%] h-[40rem] w-[40rem] rounded-full bg-blue-600/10 blur-[160px]' />

              {/* Right violet glow */}
              <div className='absolute right-[-20rem] top-[55%] h-[40rem] w-[40rem] rounded-full bg-violet-700/10 blur-[160px]' />

              {/* Subtle grid */}
              <div
                className='absolute inset-0 opacity-[0.035]'
                style={{
                  backgroundImage: `
                    linear-gradient(to right, white 1px, transparent 1px),
                    linear-gradient(to bottom, white 1px, transparent 1px)
                  `,
                  backgroundSize: '72px 72px',
                  maskImage:
                    'linear-gradient(to bottom, black 0%, black 45%, transparent 95%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 0%, black 45%, transparent 95%)',
                }}
              />

              {/* Top spotlight */}
              <div className='absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]' />
            </div>

            {/* Accessibility */}
            <a
              href='#main-content'
              className='fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0'
            >
              Skip to content
            </a>

            {/* Site */}
            <div className='relative z-20'>
              <Navbar />
            </div>

            <main
              id='main-content'
              className='relative z-10 flex-1 pt-24 md:pt-28'
            >
              {children}
            </main>

            <div className='relative z-10'>
              <Footer />
            </div>

            <Toaster />
          </div>
>>>>>>> main
        </ThemeProvider>
      </body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> main
