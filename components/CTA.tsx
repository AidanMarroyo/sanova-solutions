import { MaxWidthWrapper } from './ MaxWidthWrapper';
import { Button } from './ui/button';

export function CTA({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto flex max-w-screen-sm flex-col items-center text-center mb-20 lg:mb-16'>
        <h2 className='mb-4 text-4xl font-extrabold leading-tight tracking-tight'>
          {title}
        </h2>
        <p className='mb-6 md:text-lg'>{description ? description : null}</p>
        <Button type='button' color='info' className='w-fit'>
          {cta}
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
