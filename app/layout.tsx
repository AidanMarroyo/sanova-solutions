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
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
