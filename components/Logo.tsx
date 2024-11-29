import React from 'react';

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <img
        src='/images/sanova-dark.png'
        className='w-48'
        alt='Sanova Solutions'
      />
    </div>
  );
};

export default Logo;
