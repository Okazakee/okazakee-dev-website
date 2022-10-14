import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {Card} from '../../components/Common/Card';
import { motion } from 'framer-motion';

function Portfolio({posts}) {
  const cardListStyle = 'md:flex items-center justify-start h-full w-full overflow-auto';
  const portfolio_desc = 'test';
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
        {posts.map((post) => (
          <Card key={post.id} fields={post}>{post.title}</Card>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakerapi.it/api/v1/books?_quantity=50')
    const posts = await res.json()

        return {
          props: {
            posts: posts.data
          },
          // Next.js will attempt to re-generate the page:
          // - When a request comes in at most once every 10 seconds
          revalidate: 60, // In seconds, change to 12 hours after project is done
        };
  } catch (e) {
      console.error(e);
  }
}
/* export async function getStaticProps() {
  try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db("Website");

      const portfolio = await db
        .collection("Portfolio")
        .find({})
        .project({_id: 0})
        .sort({})
        .toArray();
        const portfolio_desc= JSON.parse(JSON.stringify(...portfolio)).description;
        const portfolio_post_fields= JSON.parse(JSON.stringify(portfolio))[1];

        return {
          props: {
            portfolio_desc,
            portfolio_post_fields,
          },
          // Next.js will attempt to re-generate the page:
          // - When a request comes in at most once every 10 seconds
          revalidate: 60, // In seconds, change to 12 hours after project is done
        };
  } catch (e) {
      console.error(e);
  }
} */

export default Portfolio;