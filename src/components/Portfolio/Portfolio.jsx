import React from 'react';
import Head from 'next/head';
import { Card } from '../Common/Card';
import { motion } from 'framer-motion';

export default function Portfolio({portfolio_desc, portfolio_post_fields}) {
  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
        <div className="bg-[#090909] text-[#e8e8e8] text-3xl py-4 flex items-center justify-center min-h-fit">
            <h1 className='py-24'>{portfolio_desc}</h1>
        </div>
        <div className='flex items-center justify-center'>
          <Card fields={portfolio_post_fields}></Card>
        </div>
      </motion.div>
    </>
  )
}