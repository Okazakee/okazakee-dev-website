import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { MainContext } from '../../../components/context/MainContext';
import { remark } from 'remark';
import html from 'remark-html';
import md from 'markdown-it';
import markdown from './markdown/fedorawsl.md';


export default function Post() {
  const { posts } = useContext(MainContext);
  const content = markdown.toString();

    return (
      <>
        <Head>
          <title>{posts[2].title} - Okazakee.dev</title>
        </Head>
        <div className='max-w-5xl prose text-white'>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </>
    )
}