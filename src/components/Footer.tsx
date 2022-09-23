import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='layout grid grid-flow-row divide-y divide-gray-500'>
      <nav className='grid grid-flow-col py-3'>
        <div className='flex flex-row items-center justify-around space-x-2 md:flex-col  md:justify-center md:space-y-4'>
          <BiMoviePlay className='h-10 w-10 fill-orange-400' />
          <div className='flex flex-row space-x-2'>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1d]'>
              <FaFacebook className='fill-white' />
            </div>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1d]'>
              <FaInstagram className='fill-white' />
            </div>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1d]'>
              <FaTwitter className='fill-white' />
            </div>
            <div className='flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1d]'>
              <FaYoutube className='fill-white' />
            </div>
          </div>
        </div>
        <div className='col-span-2 hidden flex-row justify-around md:flex'>
          <div className='flex flex-col space-y-2'>
            <h6 className='text-white'>Movies</h6>
            <div className='grid grid-cols-2 gap-3'>
              {[
                'Drama',
                'Family',
                'Reality',
                'Comedy',
                'Action',
                'Horror',
                'Trailer',
                'Documentary',
                'Romance',
                'Kids',
              ].map((e) => (
                <p key={e} className='text-dimWhite'>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <h6 className='text-white'>Support</h6>
            <div className='grid grid-cols-1 gap-3'>
              {[
                'Help Center',
                'FAQ',
                'Contact us',
                'Ticket Support',
                'My Account',
              ].map((e) => (
                <p key={e} className='text-dimWhite'>
                  {e}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <h6 className='text-white'>About Movies</h6>
            <div className='grid grid-cols-1 gap-3'>
              {['About Us', 'Career', 'News & Article', 'Legal Notice'].map(
                (e) => (
                  <p key={e} className='text-dimWhite'>
                    {e}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className='flex flex-row justify-center py-6 md:justify-between'>
        <div className='hidden flex-row space-x-2 md:flex'>
          <h6 className='text-xs text-dimWhite'>Term of use</h6>
          <h6 className='text-xs text-dimWhite'>Privacy Policy</h6>
          <h6 className='text-xs text-dimWhite'>Cookie Policy</h6>
        </div>
        <div className='flex text-xs text-dimWhite'>
          Copyright Ⓒ 2022 Movies
        </div>
      </div>
    </footer>
  );
};

export default Footer;
