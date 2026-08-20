<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='rounded-none '>
      <div className='mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 justify-items-center'>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase  text-white'>
              Company
            </h2>
            <ul className=' text-white'>
              <li className='mb-4'>
                <Link href='/about-us' className='hover:underline'>
                  About
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/faq' className='hover:underline'>
                  FAQ
                </Link>
              </li>
              {/* <li className='mb-4'>
                <Link href='/testimonials' className='hover:underline'>
                  Testimonials
                </Link>
              </li> */}
              <li className='mb-4'>
                <Link href='/contact-us' className='hover:underline'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase  text-white'>
              Services
            </h2>
            <ul className=' text-white'>
              <li className='mb-4'>
                <Link href='/services/web-design' className='hover:underline'>
                  Website Services
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/services/seo' className='hover:underline'>
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase  text-white'>
              Help center
            </h2>
            <ul className=' text-white'>
              <li className='mb-4'>
                <a
                  href='https://x.com/sanovaweb'
                  className='hover:underline hover:cursor-pointer'
                  target='_blank'
                >
                  X
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://www.facebook.com/people/Sanova-Web-Solutions/61571478268730/'
                  className='hover:underline hover:cursor-pointer'
                  target='_blank'
                >
                  Facebook
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://www.instagram.com/sanovawebsolutions'
                  className='hover:underline'
                  target='_blank'
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold uppercase  text-white'>
              Legal
            </h2>
            <ul className=' text-white'>
              <li className='mb-4'>
                <Link href='/privacy-policy' className='hover:underline'>
                  Privacy Policy
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/licensing' className='hover:underline'>
                  Licensing
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/terms' className='hover:underline'>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className='my-6 border-gray-200 border-gray-700 sm:mx-auto lg:my-8' />
        <div className='text-center'>
          <Link
            href='/'
            className='mb-5 flex items-center justify-center text-2xl font-semibold lg:-space-x-32 md:-space-x-20'
          >
            <Image
              src='/images/logo.png'
              alt='Sanova Web Solutions Logo'
              className='w-1/4 -mr-2'
              width={300}
              height={300}
            />
            <Image
              width={300}
              height={300}
              src='/images/name.png'
              alt='Sanova Web Solutions Logo'
              className='w-1/4 -ml-2'
            />
          </Link>
          <span className='block text-center text-sm  text-white'>
            © 2024&nbsp;
            <Link href='#' className='hover:underline'>
              Sanova Web Solutions
            </Link>
            . All Rights Reserved.
          </span>
          <ul className='mt-5 flex justify-center space-x-5'>
            <li>
              <a
                href='https://www.facebook.com/people/Sanova-Web-Solutions/61571478268730/'
                className='  text-white hover:text-white'
                title='Facebook'
                target='_blank'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/sanovawebsolutions/'
                className='  text-white hover:text-white'
                title='Instagram'
                target='_blank'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <a
              href='https://x.com/sanovaweb'
              className='text-white hover:text-white'
              title='X'
              target='_blank'
            >
              <svg
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M2.3 2L12 11.7 21.7 2 22 2.3 12.3 12 22 21.7 21.7 22 12 12.3 2.3 22 2 21.7 11.7 12 2 2.3z' />
              </svg>
            </a>
            <li>
              <a
                href='https://github.com/sanova-solutions'
                className='  text-white hover:text-white'
                title='GitHub'
                target='_blank'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
          </ul>
=======
import Link from 'next/link';
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
} from 'lucide-react';

import Logo from './Logo';

const companyLinks = [
  { label: 'About', href: '/about-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

const serviceLinks = [
  { label: 'Website Services', href: '/services/web-design' },
  { label: 'SEO', href: '/services/seo' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Licensing', href: '/licensing' },
  { label: 'Terms', href: '/terms' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sanovawebsolutions/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Sanova-Web-Solutions/61571478268730/',
    icon: Facebook,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/sanova-solutions',
    icon: Github,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative overflow-hidden border-t border-white/[0.08]'>
      {/* Footer background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute inset-0 bg-[#050505]' />

        <div className='absolute -bottom-64 left-1/2 h-[34rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />
      </div>

      <div className='relative mx-auto max-w-[1600px] px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24'>
        {/* CTA */}
        <div className='relative mb-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-10 sm:px-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-violet-500/10 blur-[100px]'
          />

          <div className='relative max-w-2xl'>
            <div className='mb-5 flex items-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Ready to grow?
              </span>
            </div>

            <h2 className='max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl'>
              Build something your business can be proud of.
            </h2>

            <p className='mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base'>
              Whether you need a better website, stronger search visibility,
              or a complete digital presence, Sanova can help you build it.
            </p>
          </div>

          <div className='relative mt-8 lg:mt-0 lg:pl-8'>
            <Link
              href='/contact-us'
              className='group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-violet-500/10'
            >
              Start your project

              <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className='grid gap-14 lg:grid-cols-[1.4fr_2fr] lg:gap-20'>
          {/* Brand */}
          <div>
            <Link
              href='/'
              aria-label='Sanova Web Solutions home'
              className='inline-flex'
            >
              <Logo />
            </Link>

            <p className='mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-base'>
              Custom websites, ecommerce experiences, and SEO strategies
              designed to help businesses stand out, compete, and grow online.
            </p>

            {/* Social */}
            <div className='mt-8 flex items-center gap-3'>
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='group flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white'
                  >
                    <Icon className='size-[18px] transition-transform duration-200 group-hover:scale-105' />
                  </a>
                );
              })}

              {/* X */}
              <a
                href='https://x.com/sanovaweb'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='X'
                className='group flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white'
              >
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='size-[17px] fill-current transition-transform duration-200 group-hover:scale-105'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3'>
            <FooterColumn
              title='Company'
              links={companyLinks}
            />

            <FooterColumn
              title='Services'
              links={serviceLinks}
            />

            <FooterColumn
              title='Legal'
              links={legalLinks}
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-16 border-t border-white/[0.08] pt-7 md:mt-20'>
          <div className='flex flex-col gap-5 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between'>
            <p>
              © {currentYear} Sanova Web Solutions. All rights reserved.
            </p>

            <p>
              Designed and built by{' '}
              <Link
                href='/'
                className='text-white/55 transition-colors hover:text-white'
              >
                Sanova
              </Link>
              .
            </p>
          </div>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
}
<<<<<<< HEAD
=======

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3 className='mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/35'>
        {title}
      </h3>

      <ul className='space-y-3.5'>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className='group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-200 hover:text-white'
            >
              {link.label}

              <ArrowUpRight className='size-3 -translate-x-1 translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-50' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> main
