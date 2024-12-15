import { ServiceName, services } from '@/lib/constants';
import Hero from './Hero';
import { Metadata } from 'next';
import { CTA } from '@/components/CTA';

interface ServicePageProps {
  params: Promise<{ serviceId: string }>;
}
// Static params generation (synchronous)
export function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    params: { serviceId },
  }));
}
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services[(await params).serviceId as ServiceName];
  return {
    title: `${service.name} | Sanova Web Solutions`,
    description: service.description,
  };
}
// Page Component
export default async function Page({ params }: ServicePageProps) {
  const service = services[(await params).serviceId as ServiceName];
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <Hero service={service} />

      <CTA
        title={service.ctaTitle}
        description={service.ctaDescription}
        cta={service.ctaButton}
      />
    </div>
  );
}
