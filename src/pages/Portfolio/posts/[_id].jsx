import { useRouter } from 'next/router'
import { MongoClient } from 'mongodb';

const Post = ({post}) => {
    const router = useRouter();
    const { _id } = router.query;

    return <p className='flex justify-center text-4xl mt-52'>Post ID: {_id}</p>
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("Website");
  const res = await db
    .collection("Portfolio")
    .find({})
    .project({})
    .sort({})
    .toArray();

  const paths = res.map(post => {
    return {
      params: { _id: post._id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default Post