import { Metadata } from 'next';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'About Sanova Solutions | Empowering Business Growth',
  description:
    'Learn about Sanova Solutions—our mission, values, and the passionate team dedicated to helping businesses start, scale, and thrive globally.',
};

function page({}: Props) {
  return <div>page</div>;
}

export default page;
