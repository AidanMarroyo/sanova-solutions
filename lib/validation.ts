import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const ContactFormSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredString.email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  message: requiredString,
  answer: requiredString,
  // budget: z.enum([
  //   '',
  //   'Less than $5,000',
  //   '$5,000 - $10,000',
  //   '$10,000 - $20,000',
  //   '$20,000 - $50,000',
  //   '$50,000 - $100,000',
  //   '$100,000+',
  // ]),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

export const BlogPostSchema = z.object({
  title: requiredString,
  title2: z.string().optional(),
  description: requiredString.max(
    160,
    'Description must be less than 160 characters'
  ),
  content: requiredString.max(
    10000,
    'Content must be less than 10,000 characters'
  ),
  createdAt: z.string().transform((val) => new Date(val).toISOString()),
  photo: requiredString.url('Invalid URL'),
});

export type BlogPostValues = z.infer<typeof BlogPostSchema>;
