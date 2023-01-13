import Image from 'next/image';
import Head from 'next/head';
import { remark } from 'remark';
import html from 'remark-html';
import { MongoClient, ObjectId } from 'mongodb';


export default function Post({post, content}) {

  return (
    <>
      <Head>
        <title>{post.title} - Okazakee.dev</title>
      </Head>
      <div className='prose prose-invert md:-mt-16 -mt-5 w-screen md:max-w-full mb-20 md:text-xl text-md mx-4'>
        <Image
            className='rounded-b-xl md:max-h-5'
            src={post.img} width={2000} height={600} alt='coverimg' layout='responsive' objectFit='cover' priority='true' quality={100} />
        <div className='mx-5 md:mx-auto md:max-w-5xl'
          dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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
        Id: post._id.toString(),
        title: post.title
      }
    }
  });

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db("Website");
    const id = context.params.Id;
    const res = await db
                      .collection("Portfolio")
                      .find({_id: ObjectId(id)})
                      .toArray();
    const post = JSON.parse(JSON.stringify(...res));

    const content = remark().use(html).processSync(post.markdown).toString();
      return {
      // Passed to the page component as props
      props: {
        post,
        content
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in at most once every 10 seconds
      revalidate: 60, // In seconds, change to 12 hours after project is done
    }
  }