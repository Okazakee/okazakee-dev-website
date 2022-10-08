import React from 'react'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Bio({bio, propic}) {

  //TODO first load scale animation, after load only animate entrance from left to ritht

  return (
    <>
      <Head>
        <title>Biography - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='flex items-center justify-center'>
        <div className='mt-16 lg:mt-32 md:mt-20'>
          <motion.div className='h-48 w-48 relative mx-auto' whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }}>
              <Image className='rounded-full' src={propic} alt='propic' layout='fill' objectFit='cover' priority='true' quality={100} />
          </motion.div>
          <div className='flex justify-center items-center my-5'>
              <h1 className='mt-2 sm:text-3xl md:text-4xl lg:text-4xl text-3xl'>Hello, I&#39;m
              </h1>
              <motion.h1
              className='text-[#8c54fb] ml-4 text-3xl md:text-6xl'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}>
                OKAZAKEE
              </motion.h1>
          </div>
          <div className='flex justify-center mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-7xl pb-10'>
            <p className='text-justify sm:text-xl md:text-xl lg:text-[1.40rem] text-md'>
              { bio }
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}