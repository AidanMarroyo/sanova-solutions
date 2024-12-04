import { z } from 'zod';

const requiredString = z.string().min(1, 'Required');

export const ContactFormSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  email: requiredString.email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  message: requiredString,
  answer: requiredString,
  budget: z.enum([
    '',
    'Less than $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
  ]),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
