import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';

export const SocialLink = ({icon, link}) => {
    const Icon = Icons[icon];

    return (
    <motion.a
        className="customLink hover:text-[#8c54fb]"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.8 }}
        href={'https://' + link}
        target="_blank"
        rel="noreferrer noopener">
        <Icon className='m-1 w-6 h-6'/>
    </motion.a>
  )
}