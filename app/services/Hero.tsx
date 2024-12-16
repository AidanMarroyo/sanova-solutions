import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
interface HeroProps {
  heading: string;
  subheading: string;
  description: string;
}

function Hero({ heading, subheading, description }: HeroProps) {
  return (
    <MaxWidthWrapper>
      <h1 className='text-5xl text-center font-extrabold mb-14'>{heading}</h1>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-white sm:text-lg'>
          <h2 className='mb-4 text-2xl font-bold tracking-tight text-white'>
            {subheading}
          </h2>
          <p className='mb-8 text-lg'>{description}</p>
          <ul className='my-7 space-y-5 border-t  pt-8 border-gray-700'></ul>
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
