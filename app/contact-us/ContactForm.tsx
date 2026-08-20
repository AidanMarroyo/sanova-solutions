'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Headphones,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';


import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useToast } from '@/hooks/use-toast';
import {
  ContactFormSchema,
  ContactFormValues,
} from '@/lib/validation';

import { submitContactForm } from './action';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

const contactMethods = [
  {
    icon: Mail,
    eyebrow: 'Email',
    title: 'Send us a message',
    description:
      'Have a question or want to discuss a project? Send us an email and we’ll get back to you.',
    action: 'sanovasoftwareinc@gmail.com',
    href: 'mailto:sanovasoftwareinc@gmail.com',
  },
  {
    icon: Phone,
    eyebrow: 'Phone',
    title: 'Talk to us directly',
    description:
      'Prefer a conversation? Give us a call and tell us what you’re looking to build.',
    action: '+1 (289) 887-6512',
    href: 'tel:+12898876512',
  },
  {
    icon: Headphones,
    eyebrow: 'Support',
    title: 'Already a client?',
    description:
      'Need help with an existing website, update, or technical issue? Reach out to our support team.',
    action: 'Contact support',
    href: 'mailto:sanovasoftwareinc@gmail.com?subject=Sanova Support Request',
  },
];

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      answer: '',
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { isSubmitting },
  } = form;

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10);

    if (phoneNumber.length < 4) {
      return phoneNumber;
    }

    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  async function onSubmit(
    data: z.infer<typeof ContactFormSchema>
  ) {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(formData);

      if (!result.success) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([key, value]) => {
            setError(
              key as keyof z.infer<typeof ContactFormSchema>,
              {
                type: 'manual',
                message: (value as string[])[0],
              }
            );
          });
        }

        toast({
          title: 'Something went wrong',
          description:
            result.message ||
            'Please check your information and try again.',
          variant: 'destructive',
        });

        return;
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact notification');
      }

      toast({
        title: 'Message received',
        description:
          result.message ||
          'Thanks for reaching out. We’ll be in touch soon.',
      });

      reset();
    } catch (error) {
      console.error('Contact form error:', error);

      toast({
        title: 'Unable to send your message',
        description:
          'Something went wrong while submitting the form. Please try again or contact us directly.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-18rem] h-[44rem] w-[54rem] -translate-x-1/2 rounded-full bg-violet-600/[0.09] blur-[170px]' />

        <div className='absolute right-[-18rem] top-[45%] h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute left-[-18rem] bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-violet-600/[0.04] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Start a conversation
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Have a project in mind?
            <span className='block text-white/45'>
              Let&apos;s talk about it.
            </span>
          </h1>

          <p className='mx-auto mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Tell us about your business, your goals, or what isn&apos;t
            working with your current website. We&apos;ll help you figure out
            the right next step.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/35 sm:text-sm'>
            {[
              'No-pressure conversation',
              'Straightforward recommendations',
              'Real human response',
            ].map((item) => (
              <div
                key={item}
                className='flex items-center gap-2'
              >
                <span className='flex size-5 items-center justify-center rounded-full bg-violet-400/[0.08]'>
                  <Check className='size-3 text-violet-300' />
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main contact area */}
        <div className='mt-16 grid items-start gap-10 lg:mt-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14 xl:gap-20'>
          {/* Left information */}
          <div className='lg:sticky lg:top-32'>
            <div className='mb-8'>
              <div className='flex size-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
                <MessageSquare
                  className='size-5'
                  strokeWidth={1.8}
                />
              </div>

              <h2 className='mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                Let&apos;s build something
                <span className='block text-white/45'>
                  worth talking about.
                </span>
              </h2>

              <p className='mt-5 max-w-lg text-sm leading-7 text-white/40 sm:text-base'>
                Whether you need a new website, SEO support, ecommerce,
                or something more custom, send us the details and we&apos;ll
                take it from there.
              </p>
            </div>

            <div className='space-y-3'>
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    className='group block rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]'
                  >
                    <div className='flex gap-4'>
                      <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                        <Icon
                          className='size-[18px]'
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className='min-w-0'>
                        <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                          {method.eyebrow}
                        </p>

                        <h3 className='mt-1 text-base font-semibold text-white'>
                          {method.title}
                        </h3>

                        <p className='mt-2 text-xs leading-5 text-white/35'>
                          {method.description}
                        </p>

                        <div className='mt-3 flex items-center gap-2 text-sm font-medium text-white/55 transition-colors group-hover:text-white'>
                          <span className='truncate'>
                            {method.action}
                          </span>

                          <ArrowRight className='size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1' />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute -inset-10 rounded-[4rem] bg-violet-500/[0.05] blur-[100px]'
            />

            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
              {/* Form header */}
              <div className='border-b border-white/[0.08] px-6 py-6 sm:px-8 sm:py-7'>
                <div className='flex items-center justify-between gap-5'>
                  <div>
                    <div className='flex items-center gap-2'>
                      <Sparkles className='size-3.5 text-violet-300' />

                      <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                        Project inquiry
                      </p>
                    </div>

                    <h2 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-white'>
                      Tell us what you&apos;re working on.
                    </h2>
                  </div>

                  <div className='hidden size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] sm:flex'>
                    <ShieldCheck className='size-5 text-white/35' />
                  </div>
                </div>

                <p className='mt-3 max-w-xl text-sm leading-6 text-white/35'>
                  The more context you give us, the better we can understand
                  what you need.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='grid gap-x-5 gap-y-6 p-6 sm:grid-cols-2 sm:p-8'
                >
                  <FormField
                    control={control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          First name
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder='John'
                            autoComplete='given-name'
                            className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          Last name
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder='Doe'
                            autoComplete='family-name'
                            className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          Email
                        </FormLabel>

                        <FormControl>
                          <Input
                            type='email'
                            placeholder='john@example.com'
                            autoComplete='email'
                            className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          Phone
                        </FormLabel>

                        <FormControl>
                          <Input
                            {...field}
                            type='tel'
                            inputMode='tel'
                            autoComplete='tel'
                            placeholder='(___) ___-____'
                            className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                            onChange={(e) => {
                              field.onChange(
                                formatPhoneNumber(e.target.value)
                              );
                            }}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className='sm:col-span-2'>
                    <FormField
                      control={control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-medium text-white/65'>
                            Tell us about your project
                          </FormLabel>

                          <FormControl>
                            <Textarea
                              placeholder='What are you looking to build? Tell us about your business, your current website, goals, timeline, or anything else that would help us understand the project.'
                              className='min-h-40 resize-none rounded-xl border-white/[0.09] bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Anti-spam */}
                  <div className='sm:col-span-2'>
                    <FormField
                      control={control}
                      name='answer'
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between'>
                            <div>
                              <FormLabel className='text-sm font-medium text-white/60'>
                                Quick security check
                              </FormLabel>

                              <p className='mt-1 text-xs text-white/30'>
                                What is 9 + 10?
                              </p>
                            </div>

                            <FormControl>
                              <Input
                                placeholder='Answer'
                                inputMode='numeric'
                                className='h-11 w-full rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10 sm:w-32'
                                {...field}
                              />
                            </FormControl>
                          </div>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Legal */}
                  <div className='sm:col-span-2'>
                    <p className='text-xs leading-6 text-white/30'>
                      By submitting this form, you agree to our{' '}
                      <Link
                        href='/terms'
                        className='text-white/55 transition-colors hover:text-white'
                      >
                        Terms
                      </Link>{' '}
                      and acknowledge our{' '}
                      <Link
                        href='/privacy-policy'
                        className='text-white/55 transition-colors hover:text-white'
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Submit */}
                  <div className='sm:col-span-2'>
                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='group h-14 w-full rounded-xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-violet-500/10 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className='mr-2 size-4 animate-spin' />
                          Sending message...
                        </>
                      ) : (
                        <>
                          Send project inquiry
                          <ArrowRight className='ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}