import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

export const SocialLink = ({icon, link}) => {
  const [isHover, SetIsHover] = useState(false);
  const Icon = Icons['Fa' + icon];
  const LinkStyle = `flex items-center transition-all ease-in-out duration-[400ms] ${isHover ? 'min-w-fit opacity-100' : 'opacity-100 pointer-events-none -mr-16 w-20'}`

  return (
    <motion.a
      className='flex items-center text-xl hover:bg-[#653bba] overflow-hidden hover:rounded-xl'
      whileTap={{ scale: 0.8 }}
      href={'https://' + link}
      target="_blank"
      rel="noreferrer noopener">
        <motion.div className='flex items-center -mr-4 hover:mr-1'
        onHoverStart={() => SetIsHover(true)}
        onHoverEnd={() => SetIsHover(false)}>
          <Icon className='m-1 w-6 h-6'/>
          <p className={LinkStyle}
          >{icon}</p>
        </motion.div>
    </motion.a>
  )
}