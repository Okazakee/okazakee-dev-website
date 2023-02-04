import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-[#090909] text-[#e8e8e8] min-h-screen font-['White_Rabbit_Regular'] flex justify-items-center justify-center">
        <h1 className="flex justify-items-center justify-center">ADMIN PAGE</h1>
      </div>
    </div>
  );
}
