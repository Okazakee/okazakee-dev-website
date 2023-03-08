import { React, useContext } from 'react';
import {
  Navbar,
  MobileNavbar,
  AdminHeader,
  AdminMobileHeader,
} from '../navbar/Navbar';
import { MainContext } from '../../context/MainContext';
import Head from 'next/head';

export default function Layout({ children }) {
  const { navStyles, urlPath } = useContext(MainContext);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={navStyles.layout}>
        {!urlPath.includes('/cms') ? (
          <div className="md:hidden">
            <MobileNavbar></MobileNavbar>
          </div>
        ) : (
          <div className="sm:hidden">
            <AdminMobileHeader></AdminMobileHeader>
          </div>
        )}
        {!urlPath.includes('/cms') ? (
          <div className="hidden sm:block">
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
