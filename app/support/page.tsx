import MaintenancePage from '@/components/MaintenancePage';

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Submit a Support Ticket | Sanova Solutions',
  description:
    "Need assistance? Submit a support ticket to get fast and effective help from Sanova Solutions' expert team. We're here to assist you.",
};

function page() {
  return (
    <div>
      <MaintenancePage />
    </div>
  );
}

export default page;
