import Image from 'next/image';
import Head from 'next/head';
import { remark } from 'remark';
import html from 'remark-html';
import { MongoClient, ObjectId } from 'mongodb';

export default function Post({ post, content }) {
  return (
    <div>
      <Head>
        <title>{post.title} - Okazakee.dev</title>
      </Head>
      <div className="mx-4">
        <Image
          className="rounded w-full lg:h-[20em] h-[15em] object-cover object-center"
          src={post.img}
          placeholder='blur'
          blurDataURL='qB7o3X8wR4o~ofaJV@tSTNaIV?o#kDVskCkW4T.8fSogfkV?ozbH$uNfjZbcadjZo#oI?^IAWAogWAa|f,aeE4xWofoeayfQofae'
          width={2000}
          height={600}
          alt="coverimg"
          quality={100}
        />
      </div>
      <div
        className="prose prose-invert mb-20 mt-5 mx-5 md:max-w-5xl md:text-xl text-md"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.COLLECTION_ENV);
  const res = await db.collection('Portfolio').find({}).toArray();

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
    .collection('Portfolio')
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
