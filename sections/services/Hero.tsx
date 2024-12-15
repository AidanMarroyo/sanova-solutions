import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
          Solutions Designed to Start, Scale, and Elevate Your Business
        </h1>
        <p className='mb-8 text-lg font-normal text-white sm:px-16 lg:text-xl xl:px-48'>
          Sanova Web Solutions offers a range of services to help businesses
          unlock their full potential. From tailored applications to dynamic
          marketing strategies, we provide the tools you need to thrive in
          today’s competitive landscape.
        </p>
        <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
          <Button color='info' size='lg' className='[&>span]:items-center'>
            Explore Our Services Below
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
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
