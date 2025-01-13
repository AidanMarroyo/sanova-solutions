import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { FaMobileAlt } from 'react-icons/fa';
import { SiAircanada } from 'react-icons/si';
import Image from 'next/image';
import { TbSeo } from 'react-icons/tb';
import { GiSpeedometer } from 'react-icons/gi';
import { Ri24HoursLine } from 'react-icons/ri';
const Features = () => {
  return (
    <MaxWidthWrapper className='py-8'>
      <div className='mx-auto text-center'>
        <p className='my-4 text-base font-normal sm:text-xl'>
          WHY CHOOSE SANOVA WEB SOLUTIONS?
        </p>
        <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-white'>
          YOUR WEBSITE, HANDLED HASSLE-FREE
        </h2>
        <p className='text-base font-normal sm:text-xl'>
          At Sanova Web Solutions, we specialize in crafting tailored websites
          for small businesses across Canada and the United States. Every aspect
          of your website is carefully built from scratch to deliver optimal
          performance and maximize visibility on search engines, helping you
          attract more visitors and grow your revenue. We also provide ongoing
          support and take care of updates for you, so you’re never left
          stranded. Our focus is on building lasting partnerships with our
          clients, supporting their growth every step of the way.
        </p>
      </div>
      <div className='mt-8 p-4 sm:p-12 lg:mt-16'>
        <div className='grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <FaMobileAlt size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>
                MOBILE FIRST DESIGN
              </h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                We design your website with a mobile-first approach, ensuring
                the code is streamlined and optimized for speed and efficiency.
                This results in a highly responsive site that performs
                seamlessly across all devices.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <Image
                alt='responsive'
                height='40'
                src='/images/download.svg'
                width='40'
                className='fill-white'
              />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>
                FULLY RESPONSIVE
              </h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                Your website will be fully responsive, adapting perfectly to all
                screen sizes, from smartphones and tablets to desktops. This
                ensures your visitors enjoy a seamless and visually appealing
                experience, no matter how they access your site.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <TbSeo size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>SEO SERVICES</h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                Our in-house SEO expert specializes in local SEO strategies,
                helping your business stand out in your local market. We ensure
                your website climbs the ranks and attracts the right audience.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <GiSpeedometer size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>
                OPTIMIZED PAGE SPEED
              </h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                Did you know that a website taking more than three seconds to
                load can cause up to 50% of visitors to leave? At Sanova Web
                Solutions, we design websites that load in one second or less,
                ensuring your audience stays engaged and reaches your content
                without delays.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <SiAircanada size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>BASED IN CANADA</h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                Sanova Web Solutions is proudly owned and operated in Canada,
                with an entirely Canadian team. We don’t outsource work to
                overseas developers. Our team is dedicated and works remotely
                across Canada, ensuring top-quality service with a local touch.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <Ri24HoursLine size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold sm:text-2xl'>24/7 SUPPORT</h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-white'>
                At Sanova Web Solutions, we’re here for you around the clock.
                Whether it’s a question, an urgent update, or a technical issue,
                our team is available 24/7 to provide prompt and reliable
                support. Your website’s success is our top priority, no matter
                the time of day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Features;
