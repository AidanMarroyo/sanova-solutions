import { Menu } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ModeToggle } from './ModeToggle';
import { NavLink } from './NavLink';
import Logo from './Logo';

const Navbar = () => {
  return (
    <section className='fixed inset-x-0 top-0 z-50 shadow-sm translate-y-0 md:translate-y-0/2 px-32  bg-opacity-30 backdrop-blur-md border border-white border-opacity-10'>
      <div>
        <nav className='hidden justify-between items-center xl:flex '>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <Logo />
            </div>
            <div className='flex items-center gap-6'>
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/about-us'>About Us</NavLink>
              <NavLink href='/services'>Services</NavLink>
              <NavLink href='/portfolio'>Portfolio</NavLink>
              <NavLink href='/blog'>Blog</NavLink>
              <NavLink href='/contact-us'>Contact Us</NavLink>
            </div>
          </div>
          <div className='flex gap-4'>
            <ModeToggle />
          </div>
        </nav>
        <div className='block xl:hidden'>
          <div className='flex items-center justify-between'>
            <Logo />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className='size-4' />
                </Button>
              </SheetTrigger>
              <SheetContent className='overflow-y-auto'>
                <SheetHeader>
                  <SheetTitle className='flex items-center justify-center'>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <div className='my-8 flex flex-col gap-4'>
                  <NavLink href='/' className='font-semibold'>
                    Home
                  </NavLink>
                  <NavLink href='/about-us' className='font-semibold'>
                    About Us
                  </NavLink>
                  <NavLink href='/services' className='font-semibold'>
                    Services
                  </NavLink>
                  <NavLink href='/portfolio' className='font-semibold'>
                    Portfolio
                  </NavLink>
                  <NavLink href='/blog' className='font-semibold'>
                    Blog
                  </NavLink>
                  <NavLink href='/contact-us' className='font-semibold'>
                    Contact Us
                  </NavLink>
                </div>
                <div className='border-t pt-4'>
                  <div className='grid grid-cols-2 justify-start'>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href='#'
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className='mt-2 flex flex-col gap-3'></div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
