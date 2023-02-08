import { React, useContext } from 'react';
import { Navbar, MobileNavbar, AdminHeader } from '../Navbar/Navbar';
import { MainContext } from '../context/MainContext';
import Head from 'next/head';

export default function Layout({ children }) {
  const { urlPath } = useContext(MainContext);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] transition-all ease-in-out duration-[400ms] scroll-smooth mx-auto min-h-screen w-full flex justify-center pt-5 md:pt-20">
        <div className="md:hidden">
          <MobileNavbar></MobileNavbar>
        </div>
        {!urlPath.includes('/admin') ? (
          <div className="hidden md:block">
            <Navbar></Navbar>
          </div>
        ) : (
          <AdminHeader></AdminHeader>
        )}
        {children}
      </main>
    </div>
  );
}
