import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MainContext } from '../../context/MainContext';
import { motion } from 'framer-motion';
import { MongoClient, Db } from 'mongodb';

interface BioPageProps {
  bio: string,
  propic: string
}

export default function Bio({ bio, propic }: BioPageProps) {
  const { router, pageStyles } = useContext(MainContext);

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicks(0);
    }, 5000);

    if (clicks === 5) {
      router.push('/cms');
    }

    return () => clearTimeout(timer);
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
              placeholder="blur"
              blurDataURL={pageStyles.biography.blurDataURL}
              alt="propic"
              priority={true}
              quality={100}
              onClick={() => setClicks(clicks + 1)}
              fill
              sizes="100vw"
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
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db(process.env.COLLECTION_ENV);

    const biography = await db
      .collection('Biography')
      .find({})
      .project({ _id: 0 })
      .toArray();

    const bio = biography[0].bio;
    const propic = biography[0].img;

    return {
      props: {
        bio,
        propic,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in at most once every n seconds
      revalidate: 43200, // In seconds
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        bio: '',
        propic: '',
      },
      revalidate: 43200,
    };
  }
}
