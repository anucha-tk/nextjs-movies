import React from 'react';

type IDrawer = {
  children: React.ReactNode;
  isOpen: boolean;
  closeDrawer: () => void;
};

export default function Drawer({ children, isOpen, closeDrawer }: IDrawer) {
  return (
    <>
      <main
        className={`fixed h-screen px-[30px] duration-500 ${
          isOpen
            ? 'left-0 top-0 w-2/3 max-w-xs bg-white ease-in-out'
            : 'left-[-100%] top-0 ease-in'
        }`}
      >
        <section>{children}</section>
      </main>
      <div
        className='right-0 z-10 h-full w-full cursor-pointer'
        onClick={closeDrawer}
      />
    </>
  );
}
