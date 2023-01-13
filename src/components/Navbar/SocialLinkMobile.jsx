import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

export const SocialLinkMobile = ({social, link, back}) => {
  const [isHover, SetIsHover] = useState(false);
  const Icon = Icons['Fa' + social];

  const styles = {
    mainLink: `flex items-center transition-all ease-in-out overflow-hidden rounded-lg`,
    iconStyle: `text-[#ffffff] w-[2rem] h-[2rem] mx-auto bg-gradient-to-b rounded-xl p-1 from-[#0bb1ff] to-[#8c54fb] ${back ? 'mb-2' : null}`
  }

  return (
    <a
      className={styles.mainLink}
      href={'https://' + link}
      target="_blank"
      rel="noreferrer noopener">
        <motion.button className='' whileTap={{ scale: 0.8 }}>
          <Icon className={styles.iconStyle}/>
          {back ? null : social}
        </motion.button>
    </a>
  )
}