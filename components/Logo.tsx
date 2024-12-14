import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <Image
        height='300'
        width='300'
        src='/images/sanova-dark.png'
        className='w-48'
        alt='Sanova Solutions'
      />
    </div>
  );
};

export default Logo;
