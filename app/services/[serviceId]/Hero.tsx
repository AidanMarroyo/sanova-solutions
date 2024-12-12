import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
interface HeroProps {
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

function Hero({ service }: HeroProps) {
  return (
    <MaxWidthWrapper>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-gray-200 sm:text-lg'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-white'>
            {service.title}
          </h1>
          <p className='mb-8 lg:text-xl'>{service.description}</p>
          <ul className='my-7 space-y-5 border-t  pt-8 border-gray-700'>
            <h2 className='text-white font-semibold text-2xl tracking-tight'>
              {service.title2}
            </h2>
            {service.list.map((item, index) => (
              <li key={index} className='flex space-x-3'>
                <svg
                  className='h-5 w-5 shrink-0 text-primary-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-base font-medium leading-tight text-white'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default Hero;
