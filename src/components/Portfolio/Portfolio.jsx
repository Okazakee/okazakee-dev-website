import React, { useState } from 'react';
import Head from 'next/head';
import { Card } from '../Common/Card';
import { motion } from 'framer-motion';

export default function Portfolio({portfolio_desc, portfolio_post_fields}) {
  const cardListStyle = ` items-center justify-start px-0  md:px-8 sm:px-8 pt-4 overflow-x-scroll min-h-full`;

  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <motion.div
      className='px-0 lg:mx-auto md:px-8 sm:px-8 max-w-7xl min-h-full'
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
        <h1 className='mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-7xl py-10 text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl'>{portfolio_desc}</h1>
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