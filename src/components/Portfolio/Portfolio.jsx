import React from 'react';
import Head from 'next/head';
import { Card } from './Card';

export default function Portfolio({portfolio_desc, portfolio_post_fields}) {
  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
        <div className="bg-[#090909] text-[#e8e8e8] text-3xl py-4 flex items-center justify-center min-h-fit">
          <h1 className='py-24'>{portfolio_desc}</h1>
        </div>
      <div className='flex items-center justify-center'>
        <Card fields={portfolio_post_fields}></Card>
      </div>
    </>
  )
}