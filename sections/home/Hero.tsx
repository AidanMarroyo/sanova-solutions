'use client';

import { GlobeDemo } from '@/sections/home/GlobeDemo';
import React from 'react';
import WordRotater from './WordRotater';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type Props = {};

function Hero({}: Props) {
  return (
    <section className='container mx-auto flex flex-col sm:flex-row justify-center items-center my-48'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0, transition: { times: [0, 1] } }}
      >
        <h1 className='text-3xl md:text-4xl font-bold w-full lg:w-[800px] lg:text-7xl pl-38'>
          Empowering Businesses to <WordRotater />
        </h1>
        <Button className='ml-38 my-6'>Get Started Today</Button>
      </motion.div>
      <GlobeDemo />
    </section>
  );
}

export default Hero;
