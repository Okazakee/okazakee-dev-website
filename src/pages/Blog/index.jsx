import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
/* import { MongoClient } from "mongodb"; */

export default function Blog({blog_desc}) {
  return (
    <>
      <Head>
        <title>Blog - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="bg-[#090909] text-[#e8e8e8] text-3xl py-4 flex items-center justify-center min-h-[80vh]">
      <h1>{blog_desc}</h1>
      </motion.div>
    </>
  )
}