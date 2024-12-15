import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { SiSpeedtest } from 'react-icons/si';
import { FiLoader } from 'react-icons/fi';
import { GrDocumentPerformance } from 'react-icons/gr';
import Image from 'next/image';

export function Speed() {
  return (
    <MaxWidthWrapper>
      <dl className='mx-auto mt-8 grid max-w-screen-md grid-cols-2 gap-8 text-white sm:grid-cols-3 lg:mt-14'>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-4xl font-extrabold'>100%</dt>
          <dd className='text-xl font-normal text-white'>
            Satisfaction Guaranteed
          </dd>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-4xl font-extrabold'>100%</dt>
          <dd className='text-xl font-normal text-white'>Page Speed Scores</dd>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <dt className='mb-2 text-4xl font-extrabold'>5/5</dt>
          <dd className='text-xl font-normal text-white'>Google Reviews</dd>
        </div>
      </dl>

      <div className='mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16 '>
        <div className='sm:text-lg'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl'>
            Websites Designed for Speed and Results
          </h2>
          <p className='mb-8 text-white lg:text-xl'>
            At Sanova Web Solutions, we build websites that outperform the
            competition with exceptional load times and top-tier Google
            PageSpeed scores. Don’t just take our word for it—test your current
            website using Google PageSpeed Insights and see how it measures up.
          </p>
          <div className='grid gap-6 border-gray-700 sm:grid-cols-2 lg:grid-cols-1'>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <FiLoader size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Faster Load Times, Better Results
                </p>
                <p className='text-white'>
                  Improved load speeds drive more traffic and boost conversions,
                  helping your business grow over time.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <GrDocumentPerformance size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Enhanced SEO and Ad Performance
                </p>
                <p className='text-white'>
                  A faster site isn’t just user-friendly—it also improves your
                  SEO rankings and the effectiveness of your Google Ads
                  campaigns.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='mr-4 shrink-0'>
                <SiSpeedtest size={30} color='#D4AF37' />
              </div>
              <div>
                <p className='mb-1 text-2xl font-extrabold tracking-tight text-white'>
                  Instant Load Speeds
                </p>
                <p className='text-white'>
                  Our websites load in under one second, creating a seamless
                  user experience that keeps visitors engaged and drives more
                  conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          width='584'
          height='508'
          className='mx-auto mb-4 hidden sm:flex'
          src='/images/100score.webp'
          alt='table professor illustration'
          loading='lazy'
        />
      </div>
    </MaxWidthWrapper>
  );
}
