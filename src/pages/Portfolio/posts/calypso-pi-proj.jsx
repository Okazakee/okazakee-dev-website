import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { MainContext } from '../../../components/context/MainContext';
import { remark } from 'remark';
import html from 'remark-html';

export default function Post({contentHtml}) {
  const router = useRouter();
  const { _id } = router.query;
  const { posts } = useContext(MainContext);

    return (
      <>
        <Head>
          <title>{posts.title} - Okazakee.dev</title>
        </Head>
        <div className='max-w-7xl'>
          <p className='flex justify-center text-2xl'>Post ID: {_id}</p>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </>
    )
}

export async function getStaticProps(posts) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  for (let i = 0; i < posts.length; i++) {
    const res = fetch(posts[i].data)
    const processedContent = remark()
                            .use(html)
                            .process(res);
    const contentHtml = processedContent.toString();
    return contentHtml
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      contentHtml,
    },
  }
}