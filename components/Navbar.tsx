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
import { NavLink } from './NavLink';
import Logo from './Logo';
import { SecondaryNavLinks } from '@/lib/constants';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <section className='fixed inset-x-0 top-0 z-50 shadow-sm translate-y-0 md:translate-y-0/2 px-32  bg-opacity-30 backdrop-blur-md border border-white border-opacity-10'>
      <div>
        <nav className='hidden justify-between items-center xl:flex '>
          <div className='flex items-center gap-6'>
            <Link href='/'>
              <Logo />
            </Link>

            <div className='flex items-center gap-6'>
              <NavLink href='/'>Home</NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavLink href=''>About Us ▾</NavLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild className='hover:cursor-pointer'>
                    <NavLink href='/about-us'>About Us</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className='hover:cursor-pointer'>
                    <NavLink href='/faq'>FAQ</NavLink>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild className='hover:cursor-pointer'>
                    <NavLink href='/testimonials'>Testimonials</NavLink>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavLink href=''>Services ▾</NavLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild className='hover:cursor-pointer'>
                    <NavLink href='/services/web-design'>Web Design</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className='hover:cursor-pointer'>
                    <NavLink href='/services/seo'>SEO</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <NavLink href='/contact-us'>Contact Us</NavLink>
            </div>
          </div>
        </nav>
        <div className='block xl:hidden'>
          <div className='flex items-center justify-between'>
            <Link href='/'>
              <Logo />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'} title='menu-button'>
                  <Menu className='size-4' />
                </Button>
              </SheetTrigger>
              <SheetContent className='overflow-y-auto'>
                <SheetHeader>
                  <SheetTitle className='flex items-center justify-center'>
                    <Link href='/'>
                      <Logo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className='my-8 flex flex-col gap-4'>
                  <NavLink href='/'>Home</NavLink>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <NavLink href=''>About Us ▾</NavLink>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        asChild
                        className='hover:cursor-pointer'
                      >
                        <NavLink href='/about-us'>About Us</NavLink>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className='hover:cursor-pointer'
                      >
                        <NavLink href='/faq'>FAQ</NavLink>
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem
                        asChild
                        className='hover:cursor-pointer'
                      >
                        <NavLink href='/testimonials'>Testimonials</NavLink>
                      </DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <NavLink href=''>Services ▾</NavLink>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        asChild
                        className='hover:cursor-pointer'
                      >
                        <NavLink href='/services/web-design'>
                          Web Design
                        </NavLink>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className='hover:cursor-pointer'
                      >
                        <NavLink href='/services/seo'>SEO</NavLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <NavLink href='/contact-us'>Contact Us</NavLink>
                </div>
                <div className='border-t pt-4'>
                  <div className='grid grid-cols-2 justify-start'>
                    {SecondaryNavLinks.map((link) => (
                      <NavLink
                        className={cn(
                          buttonVariants({
                            variant: 'ghost',
                          }),
                          'justify-start text-muted-foreground hover:bg-transparent'
                        )}
                        key={link.id}
                        href={link.href}
                      >
                        {link.name}
                      </NavLink>
                    ))}
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
