import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube, FaInstagram, FaTwitter, } from 'react-icons/fa'

export default function Navigation({SetPageName}) {

  const defaultStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb]';
  const selectedStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';

  const ButtonSel = (e, page) => {
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    SetPageName(page);

    buttons.map(x => x.className=defaultStyle);
    button.className=selectedStyle;
  }

    return (
      <div className='flex justify-between px-0 lg:mx-auto md:px-8 sm:px-8 max-w-7xl pt-4'>
        <div className='flex text-2xl'>
              <motion.button
                id={'default'}
                onClick={(e) => ButtonSel(e, 'bio')}
                className={selectedStyle}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                > Bio
              </motion.button>
              <motion.button
                onClick={(e) => ButtonSel(e, 'portfolio')}
                className={defaultStyle}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                > Portfolio
              </motion.button>
              <motion.button
                onClick={(e) => ButtonSel(e, 'blog')}
                className={defaultStyle}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                > Blog
              </motion.button>
              {/* add blog PageName later */}
        </div>
        <div className='flex h-full'>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://www.linkedin.com/in/okazakee/" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaLinkedin className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://github.com/Okazakee/" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaGithub className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://t.me/Okazakee" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaTelegram className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://twitter.com/Okazakee_DEV" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaTwitter className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://www.instagram.com/okazakee.dev" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaInstagram className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
            <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}
            href="https://www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg" target="_blank" rel="noreferrer noopener" className="customLink">
                <FaYoutube className='m-1 w-6 h-6 hover:text-[#8c54fb]'/></motion.a>
        </div>
      </div>
    );
}