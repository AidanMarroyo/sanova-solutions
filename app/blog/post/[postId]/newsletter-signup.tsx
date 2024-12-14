'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function NewsletterSignup() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className='bg-gray-800'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-md sm:text-center'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            Sign up for our newsletter
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-white sm:text-xl md:mb-12'>
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            <div className='mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0'>
              <div className='relative w-full'>
                <Input type='email' placeholder='Enter your email' required />
              </div>
              <Button type='submit' className='w-full sm:w-auto'>
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for subscribing!</DialogTitle>
          </DialogHeader>
          <p>We&apos;ll keep you updated with the latest news and updates.</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
