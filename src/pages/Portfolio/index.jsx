import { React, useEffect, useContext } from 'react';
import Head from 'next/head';
import { MainContext } from '../../components/context/MainContext';
import {Card} from '../../components/Common/Card';
import { motion } from 'framer-motion';
import { MongoClient } from 'mongodb';

export default function Portfolio({posts}) {

  const styles = {

    cardListStyle: 'mx-2 grid justify-items-center md:grid-cols-2 lg:grid-cols-3',
    h1: 'text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl pb-2 sm:pb-5 cursor-default mx-2',
  }

  const { SetCurrentPage, currentPage } = useContext(MainContext);


  return (
    <>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <motion.div
      className='pb-20'
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}>
        <div>
          <h1 className={styles.h1}>
            Welcome to my <label className='text-[#8c54fb]'>portfolio!</label> Here you can find my personal projects.
          </h1>
          <div className={styles.cardListStyle}>
            {posts.map((post) => (
              <Card key={post._id} type={"Portfolio"} post={post}>{post.title}</Card>
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
    const db = client.db(process.env.COLLECTION_ENV);
    const res = await db
                    .collection("Portfolio")
                    .find({})
                    .project({_id: 1, title: 1, img: 1})
                    .toArray();

                    const posts = JSON.parse(JSON.stringify(res));
      return {
        props: {
          posts,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in at most once every 10 seconds
        revalidate: 60, // In seconds, change to 12 hours after project is done
      };

  } catch (e) {
      console.error(e);
  }
}