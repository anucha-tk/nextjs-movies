import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <>
      <section className='relative grid h-[300px] content-center justify-items-center md:h-[600px] lg:h-[800px]'>
        <article className='layout z-10 mb-16 flex flex-col items-center space-y-4'>
          <h2 className='text-center text-white md:text-4xl lg:text-5xl'>
            Watch movie anytime,
            <br className='md:hidden' /> everywhere
          </h2>
          <p className='max-w-xs text-center text-dimWhite md:max-w-none md:text-lg lg:text-xl'>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className='grid grid-cols-2 gap-3'>
            <button className='buttonOutlined'>Learn More</button>
            <button className='buttonContained'>Go Premium</button>
          </div>
        </article>
        <div className='absolute bottom-0 z-20 mb-16 w-full bg-gradient-to-t from-black md:h-20' />
        <div className='absolute -mt-16 h-full w-full'>
          <Image
            src='/images/couple_watch.png'
            alt='couple_watch'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
