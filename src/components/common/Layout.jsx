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
        <meta
          name="og:description"
          content="Welcome to the personal website of Cristian (Okazakee), a passionate and skilled Web Developer from Italy. Explore Cristian's portfolio and bio, showcasing expertise in web development and a commitment to Open Source."
        ></meta>
        <meta property="og:title" content="Okazakee's personal website!" />
        <meta property="og:image" content="https://okazakee-dev-storage.s3.eu-west-3.amazonaws.com/okazakee.dev/Biography/propic_hd.jpg" />
        <meta property="og:url" content="https://okazakee.dev/" />
        <meta property="og:type" content="website"></meta>
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
