import React, { useState } from 'react';
import { Searchbox } from '../Portfolio/Searchbox';
import { motion } from 'framer-motion';
import { SocialLink } from './SocialLink';

export default function Navigation({SetPageName, PageName}) {

  const defaultBtnStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb]';
  const selectedBtnStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';
  const searchBoxStyle = `ml-3 transition-opacity ease-in-out duration-200 ${PageName === 'bio' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

  const SetBtnFocus = (e, page) => { //thanks to Jack Rendor for this solution.
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    SetPageName(page);

    buttons.map(button => button.className=defaultBtnStyle);
    button.className = selectedBtnStyle;
  }

    return (
      <div className='flex justify-between px-0 lg:mx-auto md:px-8 sm:px-8 max-w-7xl pt-4'>
        <div className='flex text-2xl'>
          <motion.button
            onClick={(e) => SetBtnFocus(e, 'bio')}
            className={selectedBtnStyle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            > Bio
          </motion.button>
          <motion.button
            onClick={(e) => SetBtnFocus(e, 'portfolio')}
            className={defaultBtnStyle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            > Portfolio
          </motion.button>
          <motion.button
            onClick={(e) => SetBtnFocus(e, 'blog')}
            className={defaultBtnStyle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            > Blog
          </motion.button>
          <div className={searchBoxStyle}>
            <Searchbox></Searchbox>
          </div>
          </div>
        <div className='flex h-full'>
          <SocialLink link='www.linkedin.com/in/okazakee/' icon='FaLinkedin'></SocialLink>
          <SocialLink link='github.com/Okazakee/' icon='FaGithub'></SocialLink>
          <SocialLink link='t.me/Okazakee' icon='FaTelegram'></SocialLink>
          <SocialLink link='twitter.com/Okazakee_DEV' icon='FaTwitter'></SocialLink>
          <SocialLink link='www.instagram.com/okazakee.dev' icon='FaInstagram'></SocialLink>
          <SocialLink link='www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg' icon='FaYoutube'></SocialLink>
        </div>
      </div>
    );
}