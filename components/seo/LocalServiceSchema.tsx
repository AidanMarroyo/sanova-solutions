type LocalServiceSchemaProps = {
  serviceName: string;
  serviceDescription: string;
  city: string;
  province?: string;
  url: string;
};

export default function LocalServiceSchema({
  serviceName,
  serviceDescription,
  city,
  province = 'Ontario',
  url,
}: LocalServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: serviceName,

    description: serviceDescription,

    url,

    provider: {
      '@type': 'Organization',
      name: 'Sanova Web Solutions',
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },

    areaServed: {
      '@type': 'City',
      name: city,

      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: province,
      },
    },

    serviceType: serviceName,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}