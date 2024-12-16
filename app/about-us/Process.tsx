import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function Process() {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <p className='my-4 text-base font-normal sm:text-xl text-white'>
          OUR PROCESS
        </p>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
          We Handle Everything From Start to Finish
        </h2>
        <a
          href='#'
          className='inline-flex items-center text-lg font-medium text-primary-500 hover:text-primary-700'
        >
          Our streamlined approach ensures that your website is not only built
          with precision but also with minimal effort on your part. In just a
          few weeks, we’ll take your project from concept to completion,
          creating a custom website designed to grow your business.
          <svg
            className='ml-1 h-6 w-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
      <div className='mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-12'>
        <div className='mb-2 flex md:mb-0 md:flex-col'>
          <img
            alt=''
            src='/images/question.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 1: Complete Questionnaire
            </h3>
            <p className='text-white'>
              We’ll send you a short questionnaire with fewer than 10 questions
              about your business, services, and unique qualities. Once you fill
              it out, we’ll take it from there!
            </p>
          </div>
        </div>
        <div className='mb-2 flex md:mb-0 md:flex-col'>
          <img
            alt=''
            src='/images/design.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 2: Approve the Design
            </h3>
            <p className='text-white'>
              Our team will create a custom design draft for your site and share
              it with you via a screen-sharing session. We’ll make any revisions
              you need until you’re completely satisfied with the look and feel.
            </p>
          </div>
        </div>
        <div className='flex md:flex-col'>
          <img
            alt=''
            src='/images/dev.webp'
            className='mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full'
          />
          <div>
            <h3 className='mb-2.5 text-xl font-bold text-white md:mt-4'>
              Step 3: Development & Launch
            </h3>
            <p className='text-white'>
              After design approval, we’ll code your site from scratch, ensuring
              top-notch performance and functionality. Before the site goes
              live, you’ll get a private demo link to review everything. Once
              approved, we’ll launch your new website for the world to see!
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
