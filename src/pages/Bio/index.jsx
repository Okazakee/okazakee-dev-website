import { React, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MainContext } from '../../components/context/MainContext';
import { motion } from 'framer-motion';
import { MongoClient } from 'mongodb';

export default function Bio({bio, propic}) {

  const styles = {
    mainDiv: 'flex items-center mb-[10vh] lg:mb-[20vh]',
    imgDiv: 'h-48 w-48 relative mx-auto',
    textDiv: 'flex justify-center items-center my-4',
    innerText: 'mt-2 sm:text-3xl md:text-4xl lg:text-4xl text-2xl',
    innerText2: 'text-[#8c54fb] ml-4 text-4xl md:text-6xl',
    bio: 'mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-6xl text-justify sm:text-xl md:text-xl lg:text-[1.50rem] text-md'
  }

  const { SetCurrentPage, currentPage } = useContext(MainContext);

  /* useEffect(() => {
    SetCurrentPage('Portfolio')
  }, []); */

  return (
    <>
      <Head>
        <title>Biography - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={styles.mainDiv}>
        <div className=''>
          <div className={styles.imgDiv}>
              <Image
              className='rounded-full'
              src={propic} alt='propic' layout='fill' objectFit='cover' priority='true' quality={100} />
          </div>
          <div className={styles.textDiv}>
              <h1 className={styles.innerText}>
                Hello, I&#39;m
              </h1>
              <h1 className={styles.innerText2}>
                OKAZAKEE
              </h1>
          </div>
            <p className={styles.bio}>
              { bio }
            </p>
        </div>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db("Website");

      const biography = await db
                              .collection("Biography")
                              .find({})
                              .project({_id: 0})
                              .toArray();
        const bio = JSON.parse(JSON.stringify(...biography)).text;
        const propic= JSON.parse(JSON.stringify(...biography)).img;

        return {
          props: {
            bio,
            propic,
          },
          // Next.js will attempt to re-generate the page:
          // - When a request comes in at most once every 10 seconds
          revalidate: 60, // In seconds, change to 12 hours after project is done
        };
  } catch (e) {
      console.error(e);
  }
}