import React from 'react';
import style from './LeftNav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from '../Hamburger/HamburgerButton';

const LeftNav = (): JSX.Element => {
  return (
    <nav className={`shrink-0 ${style.navBarWidth}`}>
      <div className='basis-auto dir'>
        <div
          className={`flex flex-col bg-white ${style.navBarWidth} h-full overflow-y-auto z-50 fixed top-0 left-0 border-r border-slate-200`}
        >
          <div className='flex'>
            <div className='flex flex-grow items-center justify-between h-16 p-3 pr-0'>
              <Link href='/'>
                <a className='flex items-center'>
                  <Image src='/logo.svg' width={30} height={30} alt='logo' />
                </a>
              </Link>
              <HamburgerButton
                onClick={() => console.log('pressed hamburger')}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;
