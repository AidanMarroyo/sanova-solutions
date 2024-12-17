import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import Image from 'next/image';

export function Intro() {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <h2 className='mb-4 font-normal text-base text-white'>
          SANOVA WEB SOLUTIONS
        </h2>
        <h1 className='text-5xl font-extrabold mb-14'>ABOUT US</h1>
      </div>
      <div className='mx-auto mt-8 max-w-5xl lg:mt-16'>
        <Image
          width='1024'
          height='460'
          alt='About Us'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/computer-dark.png'
          className='w-full rounded-lg shadow-lg'
        />
      </div>
      <div className='mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16'>
        <div>
          <div>
            <h3 className='text-2xl font-extrabold'>
              WEBSITES DESIGNED WITH PURPOSE AND INTEGRITY
            </h3>

            <p className='mt-4 text-lg font-normal text-white'>
              Sanova Web Solutions began with a mission: to empower
              entrepreneurs and businesses to achieve their full potential. With
              a passion for innovation and a commitment to excellence, we’ve
              helped clients turn ideas into thriving ventures. Based in Dundas,
              Ontario, we proudly serve businesses locally and globally.
            </p>
          </div>

          <div className='mt-8'>
            <h3 className='text-2xl font-extrabold'>
              WHY SANOVA WEB SOLUTIONS?
            </h3>

            <p className='mt-4 text-lg font-normal text-white'>
              Throughout my experience working with businesses of all sizes, I
              realized a common problem: many small businesses simply don’t have
              the budget to pay thousands of dollars upfront for a high-quality
              website. Others who do invest often end up with poorly designed,
              outdated websites that fail to meet modern standards.
            </p>
            <p className='mt-4 text-lg font-normal text-white'>
              This disconnect inspired me to reshape the way I approach web
              development. I created a model designed to make professional
              websites affordable, accessible, and impactful:{' '}
              <span className='font-extrabold'>$0 Down + $175/month</span>
            </p>
            <p className='mt-4 text-lg font-normal text-white'>
              Throughout my experience working with businesses of all sizes, I
              realized a common problem: many small businesses simply don’t have
              the budget to pay thousands of dollars upfront for a high-quality
              website. Others who do invest often end up with poorly designed,
              outdated websites that fail to meet modern standards.
            </p>
          </div>
        </div>
        <div className='space-y-8'>
          <div>
            <h3 className='text-2xl font-extrabold '>HOW IT ALL BEGAN</h3>
            <p className='mt-2 text-lg font-normal text-white'>
              My name is Aidan, and I’m the founder and lead developer of Sanova
              Web Solutions. My journey into web development began with a desire
              to solve problems through innovation and creativity.
            </p>

            <p className='font-normal text-lg text-white my-2'>
              As a father of two, I’ve always been motivated to provide for my
              family while being present for life’s most important moments. Web
              development has given me the opportunity to work from home,
              allowing me to build a career I love while watching my children
              grow up. This balance is what fuels my passion for creating
              solutions that make a real difference for small businesses.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
