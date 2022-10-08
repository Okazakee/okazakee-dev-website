import React from 'react';
import Head from 'next/head';

export default function Blog({blog_desc}) {
  return (
    <>
      <Head>
        <title>Blog - Okazakee.dev</title>
      </Head>
      <div className="bg-[#090909] text-[#e8e8e8] text-3xl py-4 flex items-center justify-center min-h-[80vh]">
      <h1>{blog_desc}</h1>
        <div> {/* turn into component this below */}
          {/* <h1 className="flex">title: <p className="text-red-500">{ data.portfolio.post1.title }</p></h1>
          <h1>image: { content.portfolio.post1.image }</h1>
          <h1>website: { content.portfolio.post1.website }</h1>
          <h1>source code: { content.portfolio.post1.sourcecode }</h1>
          <h1>description: { content.portfolio.post1.desc }</h1> */}
        </div>
      </div>
    </>
  )
}