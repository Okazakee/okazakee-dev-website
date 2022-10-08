import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation/Navigation';
import Bio from '../components/Bio/Bio';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import { MongoClient } from "mongodb";

export default function Home({bio, propic, description}) {
  const [PageName, SetPageName] = useState('bio');

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <div className="bg-[#090909] text-[#e8e8e8] min-h-screen font-['White_Rabbit_Regular']">
        <Navigation SetPageName={SetPageName}></Navigation>
        {PageName === 'bio'
        ? <Bio bio={bio} propic={propic}></Bio> : null}
        {PageName === 'portfolio'
        ? <Portfolio description={description}></Portfolio> : null}
        {PageName === 'blog'
        ? <Blog></Blog> : null}
      </div>
    </div>
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
          console.log(JSON.parse(JSON.stringify(...portfolio)));

          const blog = await db
          .collection("Biography")
          .find({})
          .project({_id: 0})
          .sort({})
          .toArray();
      return {
          props: {

            bio: JSON.parse(JSON.stringify(...biography)).text,
            propic: JSON.parse(JSON.stringify(...biography)).img,
            description: JSON.parse(JSON.stringify(...portfolio))
          }
      };
  } catch (e) {
      console.error(e);
  }
}