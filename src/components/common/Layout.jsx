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
        {!urlPath.includes('/cms') && !urlPath.includes('/login') ? (
          <div className="md:hidden">
            <MobileNavbar />
          </div>
        ) : (
          <div className="sm:hidden">
            <AdminMobileHeader />
          </div>
        )}
        {!urlPath.includes('/cms') && !urlPath.includes('/login') ? (
          <div className="hidden sm:block">
            <Navbar />
          </div>
        ) : (
          <AdminHeader />
        )}
        {children}
      </main>
    </div>
  );
}
