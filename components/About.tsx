'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/lib/motionAnimations';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  MdOutlineDashboardCustomize,
  MdOutlineEdit,
  MdDataThresholding,
} from 'react-icons/md';
import { Ri24HoursLine } from 'react-icons/ri';

const About = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-extrabold leading-tight tracking-tight  sm:text-4xl'>
          {title}
        </h2>
        <p className='mt-4 text-base font-normal sm:text-xl'>
          {description ? description : null}
        </p>
      </div>
      <div className='mt-8 rounded-lg  p-4  sm:p-12 lg:mt-16'>
        <div className='grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2'>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] flex h-16 w-16 shrink-0 items-center justify-center rounded-full  lg:h-24 lg:w-24'>
              <MdOutlineDashboardCustomize size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold  sm:text-2xl'>
                Custom-Tailored Solutions
              </h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-gray-400'>
                Unique strategies designed to meet your business needs.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <Ri24HoursLine size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold  sm:text-2xl'>
                24-Hour Support, 5 Days a Week
              </h3>
              <p className='mt-2 text-base font-normal sm:text-lg  text-gray-400'>
                Fast and reliable assistance when you need it most.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <MdOutlineEdit size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold  sm:text-2xl'>
                Hosting and Unlimited Edits
              </h3>
              <p className='mt-2 text-base font-normal sm:text-l text-gray-400'>
                Stress-free website management with ongoing updates and
                maintenance.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'>
            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
              <MdDataThresholding size={40} />
            </div>
            <div>
              <h3 className='text-xl font-bold  sm:text-2xl'>Proven Results</h3>
              <p className='mt-2 text-base font-normal sm:text-lg text-gray-400'>
                Transparent, data-driven outcomes you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
