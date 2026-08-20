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
        </div>
      </div>
    </footer>
  );
}

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