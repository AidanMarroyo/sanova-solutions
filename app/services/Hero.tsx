import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
interface HeroProps {
  heading: string;
  subheading: string;
  description: string;
  src: string;
}

function Hero({ heading, subheading, description, src }: HeroProps) {
  return (
    <MaxWidthWrapper>
      <div className='text-center '>
        <h2 className='mb-4 font-normal text-base text-white'>
          SANOVA WEB SOLUTIONS
        </h2>
        <h1 className='text-5xl font-extrabold mb-14'>{heading}</h1>
      </div>
      <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
        <div className='text-white sm:text-lg'>
          <h2 className='mb-4 text-2xl font-bold tracking-tight text-white'>
            {subheading}
          </h2>
          <p className='mb-8 text-lg'>{description}</p>
          <ul className='my-7 space-y-5 border-t  pt-8 border-gray-700'></ul>
          <Link href='/contact-us'>
            <Button className='[&>span]:items-center p mt-4' size='lg'>
              SCHEDULE A CALL
            </Button>
          </Link>
        </div>

        <Image
          width='1217'
          height='1058'
          alt={heading}
          src={src}
          className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default Hero;
