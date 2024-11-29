import { ContactForm } from '@/sections/contact/ContactForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Sanova Solutions | Get Started Today',
  description:
    'Reach out to Sanova Solutions for custom business services. Let’s discuss how we can help your business grow.',
};

function page() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default page;
