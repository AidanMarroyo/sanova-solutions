'use server';
import { z } from 'zod';

const requiredString = z.string().min(1, 'This field is required');

const ContactFormSchema = z.object({
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

export async function submitContactForm(formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    answer: formData.get('answer'),
    // budget: formData.get('budget'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Check if the answer to the question is correct
  if (validatedFields.data.answer !== '19') {
    return {
      success: false,
      errors: { answer: ['Incorrect answer. Please try again.'] },
    };
  }

  // Here you would typically save the form data to a database
  // or send an email. For this example, we'll just return a success message.
  console.log('Form submitted:', validatedFields.data);

  return {
    success: true,
    message: "Thank you for your message. We'll be in touch soon!",
  };
}
