import MaintenancePage from '@/components/MaintenancePage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Industries We Serve | Solutions for Every Business',
  description:
    'Sanova Web Solutions offers custom business services for retail, tech, healthcare, and more. Tailored strategies for every industry.',
};

const page = () => {
  return <MaintenancePage />;
};

export default page;
