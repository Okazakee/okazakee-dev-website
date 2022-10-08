import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Bio from '../components/Bio/Bio';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import { MongoClient } from "mongodb";

export default function Home({bio, propic, portfolio_desc, blog_desc, portfolio_post_fields}) {
  const [PageName, SetPageName] = useState('bio');

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <div className="bg-[#090909] text-[#e8e8e8] min-h-screen font-['White_Rabbit_Regular']">
        <Navigation SetPageName={SetPageName} PageName={PageName}></Navigation>
        {PageName === 'bio'
        ? <Bio bio={bio} propic={propic}></Bio> : null}
        {PageName === 'portfolio'
        ? <Portfolio portfolio_desc={portfolio_desc} portfolio_post_fields={portfolio_post_fields}></Portfolio> : null}
        {PageName === 'blog'
        ? <Blog blog_desc={blog_desc}></Blog> : null}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db("Website");

      const biography = await db
          .collection("Biography")
          .find({})
          .project({_id: 0})
          .sort({})
          .toArray();

          const portfolio = await db
          .collection("Portfolio")
          .find({})
          .project({_id: 0})
          .sort({})
          .toArray();

          const portfolio_posts = await db
          .collection("Portfolio")
          .find({})
          .project({Post_Id: 0})
          .sort({})
          .toArray();

          const blog = await db
          .collection("Blog")
          .find({})
          .project({_id: 0})
          .sort({})
          .toArray();

          const blog_posts = await db
          .collection("Blog")
          .find({})
          .project({Post_Id: 0})
          .sort({})
          .toArray();

          return {
            props: {

            bio: JSON.parse(JSON.stringify(...biography)).text,
            propic: JSON.parse(JSON.stringify(...biography)).img,
            portfolio_desc: JSON.parse(JSON.stringify(...portfolio)).description,
            blog_desc: JSON.parse(JSON.stringify(...blog)).description,
            portfolio_post_fields: JSON.parse(JSON.stringify(portfolio_posts))[1],
            blog_post_fields: JSON.parse(JSON.stringify(blog_posts))[1]
          }
      };
  } catch (e) {
      console.error(e);
  }
}