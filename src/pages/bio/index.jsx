import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Image from "next/legacy/image";
import { MainContext } from '../../context/MainContext';
import { motion } from 'framer-motion';
import { MongoClient } from 'mongodb';

export default function Bio({ bio, propic }) {
  const { router, pageStyles } = useContext(MainContext);

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    clicks === 5 && router.push('/login');
  }, [clicks, router]);

  return (
    <div>
      <Head>
        <title>Biography - Okazakee.dev</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={pageStyles.biography.mainDiv}
      >
        <div className="">
          <div className={pageStyles.biography.imgDiv}>
            <Image
              className="rounded-full"
              src={propic}
              alt="propic"
              layout="fill"
              objectFit="cover"
              priority="true"
              quality={100}
              onClick={() => setClicks(clicks + 1)}
            />
          </div>
          <div className={pageStyles.biography.textDiv}>
            <h1 className={pageStyles.biography.innerText}>Hello, I&#39;m</h1>
            <h1 className={pageStyles.biography.innerText2}>OKAZAKEE</h1>
          </div>
          <p className={pageStyles.biography.bio}>{bio}</p>
        </div>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.COLLECTION_ENV);

    const biography = await db
      .collection('Biography')
      .find({})
      .project({ _id: 0 })
      .toArray();
    const bio = JSON.parse(JSON.stringify(...biography)).bio;
    const propic = JSON.parse(JSON.stringify(...biography)).img;

    return {
      props: {
        bio,
        propic,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in at most once every n seconds
      revalidate: 60, // In seconds
    };
  } catch (e) {
    console.error(e);
  }
}
