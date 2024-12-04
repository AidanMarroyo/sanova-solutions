import Hero from './Hero';
import { CTA } from './CTA';
import { ServiceName, services } from '@/lib/constants';

interface ServicePageProps {
  params: { serviceId: string };
}

// Static params generation (synchronous)
export function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    params: { serviceId },
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<{ title: string; description: string }> {
  const service = services[params.serviceId as ServiceName];
  return {
    title: service.name,
    description: service.description,
  };
}

// Page Component
const Page = ({ params }: { params: { serviceId: ServiceName } }) => {
  // Fetch the service based on the serviceId from the params
  const service = services[params.serviceId];

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
