import React from 'react';
import Hero from './Hero';
import { CTA } from './CTA';
import { ServiceName, services } from '@/lib/constants';
import { Metadata } from 'next';

interface PageProps {
  params: { serviceId: string };
}

export async function generateMetadata({
  params,
}: {
  params: PageProps['params'];
}): Promise<Metadata> {
  const { serviceId } = await params; // Await params before accessing serviceId
  const service = services[serviceId as ServiceName];

  // Fallback for non-matching keys
  if (!service) {
    console.warn(`Service key not found: ${serviceId}`);
    return {
      title: 'Service Not Found | Sanova Solutions',
    };
  }

  return {
    title: `${service.name} | Sanova Solutions`,
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { serviceId } = await params; // Awaiting params
  const service = services[serviceId as ServiceName];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Hero service={service} />
      <CTA service={service} />
    </div>
  );
};

export default Page;
