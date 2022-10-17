import React, { useState } from 'react';
import Head from 'next/head';
import {useHorizontalScroll} from '../../components/Utils/useHorizontalScroll';
import {Card} from '../../components/Common/Card';
import { motion } from 'framer-motion';
import { MongoClient } from 'mongodb';

export default function Portfolio({data}) {
  const scrollRef = useHorizontalScroll();
  const cardListStyle = '';

  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <motion.div
      className='items-center justify-center flex min-h-full'
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
        <div>
          <h1 className='text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl'>
            Welcome to my portfolio! Here you can find my personal projects.
          </h1>
          <div className={cardListStyle} ref={scrollRef}>
            {data.map((post) => (
              <Card key={post._id} post={post}>{post.title}</Card>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("Website");
    const res = await db
                    .collection("Portfolio")
                    .find({})
                    .toArray();
    const data = JSON.parse(JSON.stringify(res));

      return {
        props: {
          data,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in at most once every 10 seconds
        revalidate: 60, // In seconds, change to 12 hours after project is done
      };

  } catch (e) {
      console.error(e);
  }
}