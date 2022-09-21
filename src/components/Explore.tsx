import { Tab } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';

import { useGetMoviesQuery } from '@/store/movieApi';

const Explore = () => {
  const { data: moviesAll } = useGetMoviesQuery();
  const newMovies = moviesAll?.slice(0, 5);
  const popularMovies = moviesAll?.slice(5, 10);
  const topRatedMovies = moviesAll?.slice(10, 15);
  const videoForEveryOne = moviesAll?.slice(15, 20);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }
  const categories = {
    'New Release Movies': newMovies,
    'Popular Movies': popularMovies,
    'Top 100': topRatedMovies,
  };
  return (
    <>
      <section
        id='movie_card'
        className='flex flex-col space-y-6 md:space-y-8 lg:space-y-10 xl:mt-10'
      >
        <article
          id='explore movie'
          className='flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10'
        >
          <h2 className='text-center font-semibold text-white md:text-3xl lg:text-4xl'>
            Explore our most popular
          </h2>
          <div className='flex w-full flex-col space-y-3 md:space-y-6'>
            <Tab.Group>
              <Tab.List className='grid w-full grid-cols-3 gap-2 rounded-full lg:gap-4'>
                {Object.keys(categories).map((category) => {
                  const trimCategory = category.split(' ')[0];
                  return (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'buttonOutlined w-full py-2 text-xs font-normal md:py-4 md:text-lg',
                          selected && 'buttonContained'
                        )
                      }
                    >
                      <span className='md:hidden'>{trimCategory}</span>
                      <span className='hidden md:inline-block'>{category}</span>
                    </Tab>
                  );
                })}
              </Tab.List>
              <Tab.Panels className='mt-2'>
                {Object.values(categories).map((movies, idx) => (
                  <Tab.Panel key={idx}>
                    <div className='grid h-48 w-full grid-cols-3 grid-rows-1 gap-2 md:grid-cols-5 md:gap-4 lg:h-80 lg:gap-6'>
                      {movies?.map((movie) => (
                        <div
                          className='relative h-full w-full overflow-hidden rounded-lg bg-white'
                          key={movie._id}
                        >
                          <Image
                            key={movie._id}
                            src={movie.image}
                            alt={movie.title}
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </article>

        <article
          id='video_for_everOne'
          className='flex flex-col space-y-6 pt-14 md:space-y-8 lg:space-y-10'
        >
          <h2 className='text-center font-semibold text-white md:text-3xl lg:text-4xl'>
            Video for EveryOne
          </h2>
          <div className='grid h-48 w-full grid-cols-3 grid-rows-1 gap-2 md:h-60 md:grid-cols-4 md:gap-4 lg:h-80 lg:gap-6'>
            {videoForEveryOne?.map((movie) => (
              <div
                className='grid grid-cols-1 grid-rows-2 items-center overflow-hidden rounded-lg bg-[#1d1d1d] lg:grid-rows-3 [&:nth-child(5)]:hidden [&:nth-child(4)]:hidden  md:[&:nth-child(4)]:grid'
                key={movie._id}
              >
                <div className='relative h-full w-full lg:row-span-2'>
                  <Image
                    key={movie._id}
                    src={movie.image}
                    alt={movie.title}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='grid h-full grid-flow-row gap-3 overflow-hidden p-2 text-center'>
                  <h6 className='truncate text-xs font-semibold text-white lg:text-lg'>
                    {movie.title}
                  </h6>
                  <p className='overflow-hidden text-center text-xs text-dimWhite'>
                    {movie.description.substring(0, 120)}
                    {movie.description.length > 120 && '...'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default Explore;
