import * as React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import Drawer from '@/components/layout/Drawer';
import UnstyledLink from '@/components/links/UnstyledLink';

type Links = {
  href: string;
  label: string;
  type: 'button' | 'a';
  buttonStyle?: string;
}[];

const links: Links = [
  {
    href: '/',
    label: 'Sign in',
    type: 'button',
    buttonStyle:
      'rounded-full border-2 border-orange-500 px-3 py-2 font-semibold text-dark',
  },
  {
    href: '/',
    type: 'button',
    label: 'Go Premium',
    buttonStyle:
      'rounded-full bg-orange-500 px-6 py-2 font-semibold text-white',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function closeDrawer() {
    setIsOpen(!isOpen);
  }

  const navLinks = (
    <>
      {links.map(({ href, label, type, buttonStyle: style }) => (
        <>
          {type === 'a' ? (
            <UnstyledLink
              key={href}
              href={href}
              className='hover:text-gray-600'
            >
              {label}
            </UnstyledLink>
          ) : (
            <button key={href} className={style}>
              {label}
            </button>
          )}
        </>
      ))}
    </>
  );

  return (
    <header className='sticky top-0 z-50 mt-4 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <div className='flex h-full items-center space-x-2'>
          <BiMoviePlay className='h-8 w-8 cursor-pointer fill-orange-500 md:h-12 md:w-12' />
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            Movies
          </UnstyledLink>
        </div>
        <nav>
          <AiOutlineMenu
            className='flex h-8 w-8 cursor-pointer fill-orange-500 md:hidden'
            onClick={closeDrawer}
          />
          <ul className='hidden items-center md:grid md:auto-cols-fr md:grid-flow-col md:gap-4'>
            {navLinks}
          </ul>
          <div
            className={
              isOpen
                ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden'
                : ''
            }
          >
            <Drawer isOpen={isOpen} closeDrawer={closeDrawer}>
              <div className='layout my-4 flex h-14 w-full items-center justify-between'>
                <div className='flex h-full items-center space-x-2'>
                  <BiMoviePlay className='h-8 w-8 fill-orange-500 md:h-12 md:w-12' />
                  <UnstyledLink
                    href='/'
                    className='font-bold hover:text-gray-600'
                  >
                    Movies
                  </UnstyledLink>
                </div>
                <MdClose
                  className='h-8 w-8 cursor-pointer fill-orange-500'
                  onClick={closeDrawer}
                />
              </div>
              <ul className='grid items-center gap-3'>{navLinks}</ul>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  );
}
