import Image from 'next/image';
import React from 'react';

const Description = () => {
  return (
    <section
      id='image_description'
      className='relative grid h-[300px] w-full grid-flow-row items-center justify-items-center md:h-[450px] md:justify-items-start lg:h-[600px]'
    >
      <article className='layout z-20 grid grid-flow-row justify-items-center gap-3 text-center md:justify-items-start md:gap-6 md:text-start'>
        <h2 className='text-white md:text-4xl lg:text-5xl'>
          The Best movie and <br /> video on your home.
        </h2>
        <p className='max-w-sm text-dimWhite md:max-w-lg md:text-lg lg:text-xl'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
        <button className='buttonContained'>Go Premium</button>
      </article>
      <article className='absolute h-full w-full'>
        <Image
          src='/images/man-watching.webp'
          alt='man-watching'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute z-10 h-[300px] w-full bg-black opacity-70 md:h-[450px] lg:h-[600px]' />
      </article>
    </section>
  );
};

export default Description;
