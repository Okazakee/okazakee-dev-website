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
        <meta name="description" content="Welcome to the personal website of Cristian (Okazakee), a passionate and skilled Web Developer from Italy. Explore Cristian's portfolio and bio, showcasing expertise in web development and a commitment to Open Source."></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
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
