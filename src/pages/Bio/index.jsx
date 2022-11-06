import { React, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MainContext } from '../../components/context/MainContext';
import { motion } from 'framer-motion';

export default function Bio() {

  const styles = {
    mainDiv: 'flex items-center mb-[10vh] lg:mb-[20vh]',
    imgDiv: 'h-48 w-48 relative mx-auto',
    textDiv: 'flex justify-center items-center my-4',
    innerText: 'mt-2 sm:text-3xl md:text-4xl lg:text-4xl text-2xl',
    innerText2: 'text-[#8c54fb] ml-4 text-4xl md:text-6xl',
    bio: 'mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-6xl text-justify sm:text-xl md:text-xl lg:text-[1.50rem] text-md'
  }

  const data = {
    bio: `My real name is Cristian, aka Okazakee on the web, I'm a 23 years old junior Web Developer from Italy. I grew up aside my nerdy stuff since young age, I'm an IT enthusiast and I love Open Source, I worked as video editor in post production for years and in late 2021 I decided to switch my path to Web Development. I am working in different personal projects and dream to become a Full Stack developer in some years. Feel free to check my portfolio and my social profiles!`,
    propic: 'https://github.com/Okazakee/Global-Assets/blob/main/propic%20jpg.jpg?raw=true'
  };

  const { SetCurrentPage, currentPage } = useContext(MainContext);

  /* useEffect(() => {
    SetCurrentPage('Portfolio')
  }, []); */

  return (
    <>
      <Head>
        <title>Biography - Okazakee.dev</title>
      </Head>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={styles.mainDiv}>
        <div className=''>
          <div className={styles.imgDiv}>
              <Image
              className='rounded-full'
              src={data.propic} alt='propic' layout='fill' objectFit='cover' priority='true' quality={100} />
          </div>
          <div className={styles.textDiv}>
              <h1 className={styles.innerText}>Hello, I&#39;m</h1>
              <h1
              className={styles.innerText2}>
                OKAZAKEE
              </h1>
          </div>
            <p className={styles.bio}>
              { data.bio }
            </p>
        </div>
      </motion.div>
    </>
  )
}