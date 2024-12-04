import React from 'react';
import Hero from './Hero';
import { CTA } from './CTA';
import { ServiceName, services } from '@/lib/constants';
import { Metadata } from 'next';

interface PageProps {
  params: { serviceId: string };
}

export async function generateMetadata({
  params: { serviceId },
}: PageProps): Promise<Metadata> {
  const service = services[serviceId as ServiceName];

  // Fallback for non-matching keys
  if (!service) {
    console.warn(`Service key not found: }`);
    return {
      title: 'Service Not Found | Sanova Solutions',
    };
  }

  return {
    title: `${service.name} | Sanova Solutions`,
  };
}

function page() {
  return (
    <div>
      <Hero />
      <CTA />
    </div>
  );
}

export default page;
