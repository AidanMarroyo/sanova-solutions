// app/services/[serviceId]/page.tsx
import Hero from './Hero';
import { CTA } from './CTA';
import { ServiceName, services } from '@/lib/constants';

// Static params generation (synchronous)
export function generateStaticParams() {
  // Returning serviceIds as static parameters
  return Object.keys(services).map((serviceId) => ({
    serviceId: serviceId as ServiceName, // Explicitly asserting the type here
  }));
}

// Page Component
const Page = ({ params }: { params: { serviceId: ServiceName } }) => {
  // Fetch the service based on the serviceId from the params
  const service = services[params.serviceId];

  return (
    <div>
      <Hero service={service} />
      <CTA service={service} />
    </div>
  );
};

export default Page;
