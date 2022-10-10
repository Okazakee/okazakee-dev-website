import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Bio({bio, propic}) {

  return (
    <>
      <Head>
        <title>Biography - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='min-h-[80vh] items-center justify-center flex'>
        <div className=''>
          <motion.div className='h-48 w-48 relative mx-auto mt-8' whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
              <Image
              className='rounded-full'
              src={propic} alt='propic' layout='fill' objectFit='cover' priority='true' quality={100} />
          </motion.div>
          <div className='flex justify-center items-center my-4'>
              <h1 className='mt-2 sm:text-3xl md:text-4xl lg:text-4xl text-2xl'>Hello, I&#39;m</h1>
              <motion.h1
              className='text-[#8c54fb] ml-4 text-4xl md:text-6xl'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}>
                OKAZAKEE
              </motion.h1>
          </div>
            <p className='mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-6xl text-justify sm:text-xl md:text-xl lg:text-[1.50rem] text-md'>
              { bio }
            </p>
        </div>
      </motion.div>
    </>
  )
}