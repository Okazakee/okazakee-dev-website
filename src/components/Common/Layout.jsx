import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Navbar/MobileNavbar'
import Head from 'next/head'

export default function Layout({ children }) {
  const [HideSearchbox, SetHideSearchbox] = useState(true);

  return (
    <div className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] min-h-screen min-w-screen scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <div className='md:hidden'>
        <MobileNavbar HideSearchbox={HideSearchbox} SetHideSearchbox={SetHideSearchbox}></MobileNavbar>
      </div>
      <div className='hidden md:block md:max-w-7xl md:mx-auto'>
        <Navbar HideSearchbox={HideSearchbox} SetHideSearchbox={SetHideSearchbox}></Navbar>
      </div>
      <main>{children}</main>
    </div>
  )
}