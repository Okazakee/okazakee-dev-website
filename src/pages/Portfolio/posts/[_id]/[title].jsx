import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { MongoClient, ObjectId } from 'mongodb';

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("Website");
    const res = await db
                      .collection("Portfolio")
                      .find({})
                      .toArray();

    const paths = res.map(post => {
      return {
        params: {
          _id: post._id.toString(),
          title: post.title.split(" ").join("-")
        }
      }
    });

    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps(context) {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("Website");
    const id = context.params._id;
    const res = await db
                      .collection("Portfolio")
                      .find({_id: ObjectId(id)})
                      .toArray();
    const post = JSON.parse(JSON.stringify(...res));
      return {
      // Passed to the page component as props
      props: {
        post
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in at most once every 10 seconds
      revalidate: 60, // In seconds, change to 12 hours after project is done
    }
  }

export default function Post({post}) {
    const router = useRouter();
    const { _id } = router.query;

    return (
      <>
        <Head>
          <title>{post.title} - Okazakee.dev</title>
        </Head>
        <p className='flex justify-center text-4xl mt-52'>Post ID: {_id}</p>
      </>
    )
}