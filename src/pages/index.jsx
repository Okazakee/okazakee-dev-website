import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navbar/Navbar';
import Bio from '../components/Bio/Bio';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import { MongoClient } from "mongodb";
import { MobileNavbar } from '../components/Navbar/MobileNavbar';

export default function Home({bio, propic, portfolio_desc, blog_desc, portfolio_post_fields}) {
  const [PageName, SetPageName] = useState('bio');
  const [isMobile, SetIsMobile] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <div className="font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] min-h-screen min-w-screen scroll-smooth">
        <div className='md:hidden' onClick={() => SetIsMobile(true)}>
          <MobileNavbar SetPageName={SetPageName} isMobile={isMobile}></MobileNavbar>
        </div>
        <div className='hidden md:block md:max-w-7xl md:mx-auto'>
          <Navigation SetPageName={SetPageName} PageName={PageName}></Navigation>
        </div>
        <div className=''>
          {PageName === 'bio'
          ? <Bio bio={bio} propic={propic}></Bio> : null}
          {PageName === 'portfolio'
          ? <Portfolio portfolio_desc={portfolio_desc} portfolio_post_fields={portfolio_post_fields}></Portfolio> : null}
          {PageName === 'blog'
          ? <Blog blog_desc={blog_desc}></Blog> : null}
        </div>
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
          .project({_id: 0})
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
          .project({_id: 0})
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