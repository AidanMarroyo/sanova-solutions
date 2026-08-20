import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import Image from 'next/image';

export function Team() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl'>
          A Team Dedicated to Your Vision
        </h2>
        <p className='mt-4 text-base font-normal text-white sm:text-xl'>
          Our diverse team brings expertise in technology, design, and
          marketing. Together, we create solutions that are as unique as your
          business.
        </p>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-4'>
        <div className='group relative overflow-hidden rounded-lg'>
          <Image
            width='308'
            height='384'
            className='h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png'
            alt=''
          />
          <div className='absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4'>
            <div className='text-center'>
              <p className='text-xl font-bold text-white'>Aidan Arroyo</p>
              <p className='text-base font-medium text-gray-300'>
                CEO &amp; Founder &amp; Lead Developer
              </p>
            </div>
          </div>
        </div>
        <div className='group relative overflow-hidden rounded-lg'>
          <Image
            width='308'
            height='384'
            className='h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-2.png'
            alt=''
          />
          <div className='absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4'>
            <div className='text-center'>
              <p className='text-xl font-bold text-white'>Daniela Gomez</p>
              <p className='text-base font-medium text-gray-300'>
                UX/UI Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
