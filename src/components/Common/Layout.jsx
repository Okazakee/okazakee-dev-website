import React from 'react';
import { Navbar, MobileNavbar, AdminMode } from '../Navbar/Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] transition-all ease-in-out duration-[400ms] scroll-smooth mx-auto min-h-screen w-full flex justify-center pt-5 md:pt-20">
        <div className="md:hidden">
          <MobileNavbar></MobileNavbar>
        </div>
        <div className="hidden md:block">
          <Navbar></Navbar>
        </div>
        {children}
      </main>
    </>
  );
}
