import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';

interface CTAProps {
  service: {
    name: string;

    title: string;

    description: string;

    title2: string;

    list: string[];

    ctaTitle: string;

    ctaDescription: string;

    ctaButton: string;
  };
}
export function CTA({ service }: CTAProps) {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto flex max-w-screen-sm flex-col items-center text-center mb-20 lg:mb-16'>
        <h2 className='mb-4 text-4xl font-extrabold leading-tight tracking-tight'>
          {service.ctaTitle}
        </h2>
        <p className='mb-6 md:text-lg'>{service.ctaDescription}</p>
        <Button type='button' color='info' className='w-fit'>
          {service.ctaButton}
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
