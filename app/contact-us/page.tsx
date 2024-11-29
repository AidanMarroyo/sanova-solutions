import { Metadata } from 'next';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'Contact Sanova Solutions | Get Started Today',
  description:
    'Reach out to Sanova Solutions for custom business services. Let’s discuss how we can help your business grow.',
};

function page({}: Props) {
  return <div>page</div>;
}

export default page;
