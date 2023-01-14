import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Card = ({post, type}) => {
  const cover = post.img;
  const title = post.title.includes('-') ? post.title.split(' ').join('') : post.title.split(' ').join('-');

  const styles = {
    cardStyle: 'card bg-[#653bba] rounded-xl text-[#e8e8e8] text-center text-xl m-5 w-[85vw] sm:w-[80vw] md:w-[45vw] lg:w-[30vw] md:shadow-2xl hover:shadow-[#5d29a4]',
    imgdiv: 'relative h-[25vh] sm:h-[30vh] md:h-[30vh] lg:h-[30vh]',
  }

  const SetPostFocus = (e) => {
    const cards = Array.from(document.getElementsByClassName('card'));
    const card = e.target;
    //TODO REVERSE EFFECT ON HOVER END
    cards.map(card => card.className=cardStyle + ' blur-sm');
    card.className = cardStyle + ' blur-none';
  }

  const ShortId = post._id.substring(post._id.length-4)

  return (
    <Link id={post._id} href={'/' + type + '/posts/' + post._id + '/' + title} passHref shallow>
      <motion.button
      className={styles.cardStyle}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.01}}>
          <div className={styles.imgdiv}>
            <Image className='rounded-t-xl' src={cover} alt='card cover' layout='fill' objectFit='cover' priority='true' quality={100} />
          </div>
          <div className='p-5'><p>{post.title}</p></div>
      </motion.button>
    </Link>
  )
}