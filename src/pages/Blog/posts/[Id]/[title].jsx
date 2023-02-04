import Image from 'next/image';
import Head from 'next/head';
import { remark } from 'remark';
import html from 'remark-html';
import { MongoClient, ObjectId } from 'mongodb';

export default function Post({ post, content }) {
  return (
    <>
      <Head>
        <title>{post.title} - Okazakee.dev</title>
      </Head>
      <div className="prose prose-invert w-screen md:max-w-full mb-20 md:text-xl text-md mx-4">
        <Image
          className="rounded-xl md:max-h-5"
          src={post.img}
          width={2000}
          height={600}
          alt="coverimg"
          layout="responsive"
          objectFit="cover"
          priority="true"
          quality={100}
        />
        <div
          className="mt-5 mx-5 md:mx-auto md:max-w-5xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.COLLECTION_ENV);
  const res = await db.collection('Blog').find({}).toArray();

  const paths = res.map((post) => {
    return {
      params: {
        Id: post._id.toString(),
        title: post.title,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps(context) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.COLLECTION_ENV);
  const id = context.params.Id;
  const res = await db
    .collection('Blog')
    .find({ _id: ObjectId(id) })
    .toArray();
  const post = JSON.parse(JSON.stringify(...res));

  const content = remark().use(html).processSync(post.markdown).toString();
  return {
    // Passed to the page component as props
    props: {
      post,
      content,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in at most once every n seconds
    revalidate: 60, // In seconds
  };
}
