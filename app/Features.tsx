<<<<<<< HEAD
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
=======

import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  BadgeCheck,
  Gauge,
  Globe2,
  Headphones,
  Search,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-first by default',
    description:
      'Every site is designed with mobile users in mind first, then scaled beautifully across tablets, laptops, and desktop displays.',
  },
  {
    icon: Globe2,
    title: 'Fully responsive',
    description:
      'Layouts adapt cleanly across screen sizes so your website feels intentional and polished no matter where customers visit from.',
  },
  {
    icon: Search,
    title: 'SEO built in',
    description:
      'We build with search visibility in mind from the beginning, combining technical SEO foundations with strategies that help the right customers find you.',
  },
  {
    icon: Gauge,
    title: 'Built for speed',
    description:
      'Lean code, optimized assets, and modern development practices help keep pages fast, responsive, and free from unnecessary bloat.',
  },
  {
    icon: BadgeCheck,
    title: 'Proudly Canadian',
    description:
      'Sanova is owned and operated in Canada. We focus on direct communication, dependable service, and long-term relationships with our clients.',
  },
  {
    icon: Headphones,
    title: 'Ongoing support',
    description:
      'We stay involved after launch with updates, technical help, and ongoing guidance so you are never left managing everything alone.',
  },
];

const Features = () => {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[-18rem] top-[20%] h-[36rem] w-[36rem] rounded-full bg-violet-600/[0.07] blur-[150px]' />

        <div className='absolute right-[-16rem] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Why Sanova
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
            Your website,
            <span className='block text-white/45'>
              handled without the hassle.
            </span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            We build custom websites for businesses that want better
            performance, stronger visibility, and a team they can rely on long
            after launch.
          </p>
        </div>

        {/* Feature grid */}
        <div className='mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3'>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-8'
              >
                {/* hover glow */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-violet-500/[0.06] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                />

                <div className='relative'>
                  <div className='mb-8 flex items-start justify-between'>
                    <div className='flex size-12 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.04] text-violet-300 transition-colors duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.08]'>
                      <Icon className='size-5' strokeWidth={1.7} />
                    </div>

                    <span className='text-xs font-medium tracking-[0.12em] text-white/15'>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className='text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                    {feature.title}
                  </h3>

                  <p className='mt-4 text-sm leading-7 text-white/40 sm:text-base'>
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className='mt-12 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-6 py-7 text-center sm:px-8 md:flex-row md:text-left lg:mt-16'>
          <div>
            <p className='text-sm font-medium text-white'>
              No page builders. No bloated templates.
            </p>

            <p className='mt-1 text-sm text-white/35'>
              Just clean, custom development built around your business.
            </p>
          </div>

          <div className='rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300'>
            Built differently
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
>>>>>>> main
