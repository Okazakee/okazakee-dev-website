import React, { useState } from 'react';
import Head from 'next/head';
import { Card } from '../Common/Card';
import { motion } from 'framer-motion';

export default function Portfolio({portfolio_desc, portfolio_post_fields}) {
  const cardListStyle = 'md:flex items-center justify-start h-full w-full overflow-auto';

  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <h1 className='mx-4 mb-8 pt-4 text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl'>{portfolio_desc}</h1>
      <motion.div
      className='px-0 lg:mx-auto md:px-8 sm:px-8 max-w-7xl h-full'
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
        <div className={cardListStyle}>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
          <Card fields={portfolio_post_fields}></Card>
        </div>
      </motion.div>
    </>
  )
}