import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Card = ({post}) => {
  const cover = post.img;
  const title = post.title.split(" ").join("-");
  /* const [reverse, SetReverse] = useState(false); */
  const cardStyle = 'card bg-[#653bba] rounded-xl text-[#e8e8e8] text-center text-xl m-5 w-[85vw] sm:w-[80vw] md:w-[45vw] lg:w-[30vw] md:shadow-2xl hover:shadow-[#5d29a4]'

  const SetPostFocus = (e) => {
    const cards = Array.from(document.getElementsByClassName('card'));
    const card = e.target;
    //TODO REVERSE EFFECT ON HOVER END
    cards.map(card => card.className=cardStyle + ' blur-sm');
    card.className = cardStyle + ' blur-none';
  }

  return (
    <Link href={'/Portfolio/posts/' + post._id + '/' + title} passHref>
      <motion.button
      className={cardStyle}
      whileTap={{ scale: 0.8 }}
      /* onHoverStart={(e) => SetPostFocus(e)}
      onHoverEnd={(e) => SetPostFocus(e)} */
      whileHover={{ scale: 1.01}}>
          <div className='relative h-[25vh] sm:h-[30vh] md:h-[30vh] lg:h-[30vh]'>
            <Image className='rounded-t-xl' src={cover} alt='card cover' width={2000} height={2000} layout='fill' objectFit='cover' priority='true' quality={100} />
          </div>
          <div className='p-5'><p>{post.title}</p></div>
      </motion.button>
    </Link>
  )
}