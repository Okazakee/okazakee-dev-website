import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../Navbar/MobileNavbar'
import Head from 'next/head'

export default function Layout({ children }) {
  const [HideSearchbox, SetHideSearchbox] = useState(true);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <main className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] transition-all ease-in-out duration-[400ms] scroll-smooth mx-auto min-h-screen w-full flex justify-center pt-5 md:pt-20">
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