import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Navbar/MobileNavbar'
import Head from 'next/head'

export default function Layout({ children }) {
  const [HideSearchbox, SetHideSearchbox] = useState(true);
  const NavbarStyle = `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-3xl outline outline-1 outline-[#8c54fb]`;
  const defaultBtnStyle = 'nav h-fit text-[#b4b4b4]';
  const selectedBtnStyle = 'nav underline underline-offset-1 h-fit text-[#e8e8e8]';
  const iconStyle = 'h-8 w-8 relative mx-auto pointer-events-none';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <main className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] scroll-smooth mx-auto min-h-screen w-full flex justify-center pt-5 md:pt-24">
        <div className='md:hidden'>
          <MobileNavbar HideSearchbox={HideSearchbox} SetHideSearchbox={SetHideSearchbox}></MobileNavbar>
        </div>
        <div className='hidden md:block'>
          <Navbar HideSearchbox={HideSearchbox} SetHideSearchbox={SetHideSearchbox}></Navbar>
        </div>
        {children}
      </main>
    </>
  )
}