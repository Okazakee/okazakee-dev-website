import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Card = ({post}) => {
  const cover = post.img;
  const title = post.title.split(" ").join("-");
  /* const [reverse, SetReverse] = useState(false); */
  const cardStyle = 'card z-5 bg-[#653bba] rounded-b-lg text-[#e8e8e8] text-center text-xl m-4'

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
      /* onHoverStart={(e) => SetPostFocus(e)}
      onHoverEnd={(e) => SetPostFocus(e)} */
      whileHover={{ scale: 1.2}}>
          <Image className='' src={cover} alt='card cover' width={300} height={150} layout='intrinsic' priority='true' quality={100} />
          <p className='py-5'>{post.title}</p>
      </motion.button>
    </Link>
  )
}