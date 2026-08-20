'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Logo from './Logo';
import { cn } from '@/lib/utils';

const aboutLinks = [
  {
    label: 'About Us',
    href: '/about-us',
    description: 'Learn more about Sanova and how we work.',
  },
  {
    label: 'FAQ',
    href: '/faq',
    description: 'Answers to common questions about our services.',
  },
  {
    label: 'Blog',
    href: '/blog',
    description: 'Web design, SEO, and growth insights.',
  },
];

const serviceLinks = [
  {
    label: 'Website Services',
    href: '/services/web-design',
    description: 'Modern websites designed to turn visitors into customers.',
  },
  {
    label: 'SEO',
    href: '/services/seo',
    description: 'Search strategies built to grow your online visibility.',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <div className='mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-8'>
        <div
          className={cn(
            'relative flex h-[92px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-6',
            scrolled
              ? 'border-white/10 bg-black/70 shadow-2xl shadow-black/30 backdrop-blur-2xl'
              : 'border-white/[0.07] bg-black/35 backdrop-blur-xl'
          )}
        >
          {/* subtle navbar glow */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-24 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent'
          />

          {/* Logo */}
          <div className='relative z-10 flex items-center'>
            <Link
              href='/'
              aria-label='Sanova Web Solutions home'
              className='group flex items-center'
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav
            aria-label='Primary navigation'
            className='hidden items-center gap-1 xl:flex'
          >
            <DesktopNavLink href='/' active={isActive('/')}>
              Home
            </DesktopNavLink>

            <NavDropdown
              label='About'
              active={
                isActive('/about-us') ||
                isActive('/faq') ||
                isActive('/blog')
              }
              links={aboutLinks}
            />

            <NavDropdown
              label='Services'
              active={isActive('/services')}
              links={serviceLinks}
            />

            <DesktopNavLink
              href='/contact-us'
              active={isActive('/contact-us')}
            >
              Contact
            </DesktopNavLink>
          </nav>

          {/* Desktop CTA */}
          <div className='hidden items-center gap-3 xl:flex'>
            <Link
              href='/contact-us'
              className='group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-violet-500/10'
            >
              Start a project
              <ArrowUpRight className='size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className='flex xl:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  aria-label='Open navigation menu'
                  className='size-11 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:text-white'
                >
                  <Menu className='size-5' />
                </Button>
              </SheetTrigger>

              <SheetContent
                side='right'
                className='w-full border-white/10 bg-[#070707]/95 p-0 backdrop-blur-2xl sm:max-w-md'
              >
                <div className='relative flex min-h-full flex-col overflow-hidden'>
                  {/* Mobile background glow */}
                  <div
                    aria-hidden='true'
                    className='pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-violet-600/15 blur-[100px]'
                  />

                  <SheetHeader className='relative border-b border-white/10 px-6 py-5'>
                    <SheetTitle className='flex justify-start'>
                      <Link
                        href='/'
                        aria-label='Sanova Web Solutions home'
                      >
                        <Logo />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className='relative flex flex-1 flex-col px-6 py-8'>
                    <div className='mb-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-300'>
                      <Sparkles className='size-3.5' />
                      Navigation
                    </div>

                    <nav
                      aria-label='Mobile navigation'
                      className='flex flex-col'
                    >
                      <MobileNavLink
                        href='/'
                        active={isActive('/')}
                      >
                        Home
                      </MobileNavLink>

                      <MobileSection label='About'>
                        {aboutLinks.map((link) => (
                          <MobileSubLink
                            key={link.href}
                            href={link.href}
                            active={isActive(link.href)}
                          >
                            {link.label}
                          </MobileSubLink>
                        ))}
                      </MobileSection>

                      <MobileSection label='Services'>
                        {serviceLinks.map((link) => (
                          <MobileSubLink
                            key={link.href}
                            href={link.href}
                            active={isActive(link.href)}
                          >
                            {link.label}
                          </MobileSubLink>
                        ))}
                      </MobileSection>

                      <MobileNavLink
                        href='/contact-us'
                        active={isActive('/contact-us')}
                      >
                        Contact
                      </MobileNavLink>
                    </nav>

                    <div className='mt-auto pt-10'>
                      <Link
                        href='/contact-us'
                        className='group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-semibold text-black transition-all hover:bg-white/90'
                      >
                        Start your project
                        <ArrowUpRight className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                      </Link>

                      <p className='mt-4 text-center text-xs leading-5 text-white/40'>
                        Websites, ecommerce and SEO built for growth.
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

function DesktopNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200',
        active
          ? 'text-white'
          : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
      )}
    >
      {children}

      {active && (
        <span className='absolute inset-x-4 -bottom-[17px] h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent' />
      )}
    </Link>
  );
}

function NavDropdown({
  label,
  active,
  links,
}: {
  label: string;
  active?: boolean;
  links: {
    label: string;
    href: string;
    description: string;
  }[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'group flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium outline-none transition-colors duration-200',
          active
            ? 'text-white'
            : 'text-white/60 hover:bg-white/[0.04] hover:text-white'
        )}
      >
        {label}

        <ChevronDown className='size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180' />

        {active && (
          <span className='absolute bottom-0 h-px w-10 bg-violet-400/80' />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='center'
        sideOffset={16}
        className='w-[340px] rounded-2xl border-white/10 bg-[#0a0a0a]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl'
      >
        {links.map((link) => (
          <DropdownMenuItem
            key={link.href}
            asChild
            className='rounded-xl p-0 focus:bg-transparent'
          >
            <Link
              href={link.href}
              className='group block rounded-xl px-4 py-3.5 outline-none transition-colors hover:bg-white/[0.05]'
            >
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-white'>
                  {link.label}
                </span>

                <ArrowUpRight className='size-4 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300' />
              </div>

              <p className='mt-1 max-w-[270px] text-xs leading-5 text-white/40'>
                {link.description}
              </p>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center justify-between border-b border-white/[0.07] py-5 text-2xl font-medium tracking-tight transition-colors',
        active ? 'text-white' : 'text-white/65 hover:text-white'
      )}
    >
      {children}

      <ArrowUpRight
        className={cn(
          'size-5',
          active ? 'text-violet-300' : 'text-white/20'
        )}
      />
    </Link>
  );
}

function MobileSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className='border-b border-white/[0.07] py-5'>
      <p className='mb-4 text-2xl font-medium tracking-tight text-white'>
        {label}
      </p>

      <div className='flex flex-col gap-1 pl-3'>
        {children}
      </div>
    </div>
  );
}

function MobileSubLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative rounded-lg px-3 py-2.5 text-sm transition-colors',
        active
          ? 'bg-white/[0.05] text-violet-300'
          : 'text-white/45 hover:bg-white/[0.04] hover:text-white'
      )}
    >
      {children}
    </Link>
  );
}