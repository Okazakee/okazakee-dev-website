import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import Head from 'next/head';
import { Card } from '../../components/common/Card';
import { motion } from 'framer-motion';
import { MongoClient } from 'mongodb';

export default function Portfolio({ posts }) {
  const { pageStyles } = useContext(MainContext);

  return (
    <div>
      <Head>
        <title>Portfolio - Okazakee.dev</title>
      </Head>
      <motion.div
        className="pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <h1 className={pageStyles.portfolio.h1}>
            Welcome to my <label className="text-[#8c54fb]">portfolio!</label>{' '}
            Here you can find my personal projects.
          </h1>
          <div className={pageStyles.portfolio.cardListStyle}>
            {posts.map((post) => (
              <Card key={post._id} type={'portfolio'} post={post}>
                {post.title}
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.COLLECTION_ENV);
    const res = await db
      .collection('Portfolio')
      .find({})
      .project({ _id: 1, title: 1, img: 1 })
      .toArray();

    const posts = JSON.parse(JSON.stringify(res));
    return {
      props: {
        posts,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in at most once every n seconds
      revalidate: 60, // In seconds
    };
  } catch (e) {
    console.error(e);
  }
}
