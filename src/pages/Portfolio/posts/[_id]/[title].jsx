import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { MongoClient, ObjectId } from 'mongodb';

const Post = ({post}) => {
    const router = useRouter();
    const { _id, title } = router.query;

    return (
      <>
        <Head>
          <title>{title} - Okazakee.dev</title>
        </Head>
        <p className='flex justify-center text-4xl mt-52'>Post ID: {_id}</p>
      </>
    )
}

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
    props: {post}
  }
}

export default Post