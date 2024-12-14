import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import WordRotate from '@/components/ui/word-rotate';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <MaxWidthWrapper className='grid lg:grid-cols-12 lg:gap-8 xl:gap-0'>
      <div className='mr-auto place-self-center lg:col-span-7'>
        <p className='mb-3 max-w-2xl text-white md:text-lg lg:mb-4 lg:text-xl'>
          CUSTOM WEB SOLUTIONS, CUSTOM CODED
        </p>
        <h1 className='max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-6xl'>
          WEB SOLUTIONS EMPOWERING BUSINESSES TO
        </h1>
        <WordRotate
          words={['SCALE', 'SUCCEED']}
          className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-6xl '
        />
        <p className='mb-6 max-w-xl text-white md:text-lg lg:mb-8 lg:text-xl'>
          100% hand-coded websites, web applications, and custom web solutions
          starting at $200/mo. No page builders, No Wordpress, No bloatware.
        </p>
        <div className='flex w-fit items-center gap-5'>
          <Link href='/contact-us'>
            <Button className='[&>span]:items-center p' size='lg'>
              GET STARTED
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Button>
          </Link>
          <Link href='/about-us'>
            <Button variant='secondary' size='lg'>
              SERVICES
            </Button>
          </Link>
        </div>
      </div>
      <div className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
        <Image
          width={513}
          height={384}
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
          alt='mockup'
        />
      </div>
    </MaxWidthWrapper>
  );
}
