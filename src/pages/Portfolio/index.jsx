import { React, useEffect, useContext } from 'react';
import Head from 'next/head';
import { MainContext } from '../../components/context/MainContext';
import {Card} from '../../components/Common/Card';
import { motion } from 'framer-motion';

export default function Portfolio() {

  const styles = {

    cardListStyle: 'mx-2 grid justify-items-center md:grid-cols-2 lg:grid-cols-3',
    h1: 'text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl pb-2 sm:pb-5 cursor-default mx-2',
  }

  const { SetCurrentPage, currentPage, posts } = useContext(MainContext);


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
              <Card key={post._id} post={post}>{post.title}</Card>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}