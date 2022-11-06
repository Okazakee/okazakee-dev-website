import React from 'react';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { MainContext } from '../../../components/context/MainContext';
import { remark } from 'remark';
import html from 'remark-html';
import md from 'markdown-it';
import markdown from './markdown/calypso.md';


export default function Post2() {
  const { posts } = useContext(MainContext);
  const content = markdown.toString();

    return (
      <>
        <Head>
          <title>{posts[1].title} - Okazakee.dev</title>
        </Head>
        <div className='prose prose-invert md:-mt-16 -mt-5 w-screen md:max-w-full mb-20 md:text-xl text-sm'>
          <Image
              className='rounded-b-xl'
              src={posts[1].img} width={2000} height={600} alt='coverimg' layout='responsive' objectFit='cover' priority='true' quality={100} />
          <div className='mx-5 md:mx-auto md:max-w-5xl' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </>
    )
}