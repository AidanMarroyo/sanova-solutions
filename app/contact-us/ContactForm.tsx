'use client';
<<<<<<< HEAD
=======

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


>>>>>>> main
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
<<<<<<< HEAD
import { useToast } from '@/hooks/use-toast';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ContactFormSchema, ContactFormValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { submitContactForm } from './action';

export function ContactForm() {
  const { toast } = useToast();
=======
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

>>>>>>> main
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      answer: '',
<<<<<<< HEAD
      // budget: '',
    },
  });
  const {
    handleSubmit,
    control,
=======
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    setError,
>>>>>>> main
    formState: { isSubmitting },
  } = form;

  const formatPhoneNumber = (value: string) => {
<<<<<<< HEAD
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
=======
    const phoneNumber = value.replace(/[^\d]/g, '').slice(0, 10);

    if (phoneNumber.length < 4) {
      return phoneNumber;
    }

    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

>>>>>>> main
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

<<<<<<< HEAD
  async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const result = await submitContactForm(formData);

    if (result.success) {
      toast({
        title: 'Success',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description:
          'There was a problem submitting your form. Please check your answers and try again.',
        variant: 'destructive',
      });
      if (result.errors) {
        Object.entries(result.errors).forEach(([key, value]) => {
          form.setError(key as keyof z.infer<typeof ContactFormSchema>, {
            type: 'manual',
            message: (value as string[])[0],
          });
        });
      }
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
=======
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
>>>>>>> main
    }
  }

  return (
<<<<<<< HEAD
    <section>
      <div className="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className='mx-auto max-w-screen-sm px-4 pb-72 pt-8 text-center lg:px-6 lg:pb-80 lg:pt-24 '>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white'>
            Let&apos;s Build Your Business Together
          </h2>
          <p className='mb-16 text-white sm:text-xl'>
            Have questions or ready to start your next project? We&apos;re here
            to help! Contact Sanova Web Solutions today to discuss your business
            goals and discover how we can help you achieve them.
          </p>
        </div>
      </div>
      <div className='mx-auto -mt-96 max-w-screen-xl px-4 py-16 sm:py-24 lg:px-6 '>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mx-auto mb-16 grid max-w-screen-md grid-cols-1 gap-8 rounded-lg border   p-6 shadow-sm border-gray-700 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] sm:grid-cols-2 lg:mb-28'
          >
            <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='John' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='john@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='(___) ___-____'
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          field.onChange(formatted);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='answer'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Question: What is 9 + 10?</FormLabel>
                    <FormControl>
                      <Input placeholder='Your answer' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <div className='grid grid-cols-1 gap-2'>
              <FormField
                control={control}
                name='budget'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Budget</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select your budget range' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='Less than $5,000'>
                          Less than $5,000
                        </SelectItem>
                        <SelectItem value='$5,000 - $10,000'>
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value='$10,000 - $20,000'>
                          $10,000 - $20,000
                        </SelectItem>
                        <SelectItem value='$20,000 - $50,000'>
                          $20,000 - $50,000
                        </SelectItem>
                        <SelectItem value='$50,000 - $100,000'>
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value='$100,000+'>$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
            <div className='grid grid-cols-1 gap-2 sm:col-span-2'>
              <FormField
                control={control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Your message here...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className='mt-4 text-sm text-white'>
                By submitting this form you agree to our&nbsp;
                <a href='#' className='hover:underline text-primary-500'>
                  terms and conditions
                </a>
                &nbsp;and our&nbsp;
                <a href='#' className='hover:underline text-primary-500'>
                  privacy policy
                </a>
                &nbsp;which explains how we may collect, use and disclose your
                personal information including to third parties.
              </p>
            </div>
            <div>
              <Button
                type='submit'
                disabled={isSubmitting}
                className='inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
        <div className='space-y-8 text-center md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3'>
          <div>
            <div className='mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-16 lg:w-16'>
              <svg
                className='h-5 w-5 text-gray-500 lg:h-8 lg:w-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
            </div>
            <p className='mb-2 text-xl font-bold text-white'>Email us:</p>
            <p className='mb-3 text-white'>
              Got questions or need more details? Send us an email, and
              we&apos;ll get back to you promptly.
            </p>
            <a
              href='mailto:abc@example.com'
              className='font-semibold hover:underline text-primary-500'
            >
              sanovasoftwareinc@gmail.com
            </a>
          </div>
          <div>
            <div className='mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-16 lg:w-16'>
              <svg
                className='h-5 w-5 text-gray-500 lg:h-8 lg:w-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
            </div>
            <p className='mb-2 text-xl font-bold text-white'>Call us:</p>
            <p className='mb-3 text-white'>
              Ready to take the next step? Reach out by phone or through our
              contact form to discuss your project.
            </p>
            <span className='font-semibold text-primary-500'>
              +1 (646) 786-5060
            </span>
          </div>
          <div>
            <div className='mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-16 lg:w-16'>
              <svg
                className='h-5 w-5 text-gray-500 lg:h-8 lg:w-8'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <p className='mb-2 text-xl font-bold text-white'>Support</p>
            <p className='mb-3 text-white'>
              Need assistance? Our dedicated team is available 24 hours a day, 5
              days a week, to provide reliable support.
            </p>
            <div className='flex items-center justify-center'>
              <Button className='[&>span]:border-primary-500 [&>span]:[&>span]:text-primary-500'>
                Support center
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
=======
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
>>>>>>> main
