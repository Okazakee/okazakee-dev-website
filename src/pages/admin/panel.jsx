import React from 'react';
import Head from 'next/head';

export default function AdminPanel() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <h1 className="flex justify-items-center justify-center">
          ADMIN PANEL PAGE
        </h1>
      </div>
    </div>
  );
}
