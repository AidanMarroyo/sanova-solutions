import { Metadata } from 'next';
import React from 'react';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Sanova Web Solutions | Get Started Today',
  description:
    'Reach out to Sanova Web Solutions for custom business services. Let’s discuss how we can help your business grow.',
};

function page() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default page;
