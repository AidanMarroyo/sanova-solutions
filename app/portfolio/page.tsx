// import { Portfolio } from '@/sections/portfolio/Portfolio';
import MaintenancePage from '@/components/MaintenancePage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Work | Success Stories by Sanova Solutions',
  description:
    'Discover how Sanova Solutions has transformed businesses through custom applications, e-commerce, and marketing strategies.',
};

const page = () => {
  return (
    <div>
      {/* <Portfolio /> */}
      <MaintenancePage />
    </div>
  );
};

export default page;
