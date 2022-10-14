import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

export const SocialLink = ({social, link}) => {
  const [isHover, SetIsHover] = useState(false);
  const Icon = Icons['Fa' + social];
  const LinkStyle = `flex items-center justify-center transition-all ease-in-out duration-[400ms] ${isHover ? 'w-28 pr-1 opacity-100' : 'opacity-0  -mr-16 w-16'}`
  const iconStyle = `m-1 w-6 h-6 ml-2`; //TODO check if is fixable the margin left stuff, i don't like that space between icons

  return (
    <motion.a
      className='flex items-center transition-all ease-in-out text-xl hover:bg-[#653bba] overflow-hidden rounded-xl'
      whileTap={{ scale: 0.8 }}
      href={'https://' + link}
      target="_blank"
      rel="noreferrer noopener">
        <motion.div className='flex items-center'
        onHoverStart={() => SetIsHover(true)}
        onHoverEnd={() => SetIsHover(false)}>
          <Icon className={iconStyle}/>
          <p className={LinkStyle} onHoverStart={() => SetIsHover(true)}
          >{social}</p>
        </motion.div>
    </motion.a>
  )
}