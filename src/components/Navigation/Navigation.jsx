import React, { useState } from 'react';
import { Searchbox } from './Searchbox';
import { motion } from 'framer-motion';
import { SocialLink } from './SocialLink';

export default function Navigation({SetPageName, PageName}) {

  const defaultBtnStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb]';
  const selectedBtnStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';
  const searchBoxStyle = `min-w-fit w-full transition-all ease-in-out duration-300 ${PageName === 'bio' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

  const SetBtnFocus = (e, page) => { //thanks to Jack Rendor for this solution.
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    SetPageName(page);

    buttons.map(button => button.className=defaultBtnStyle);
    button.className = selectedBtnStyle;
  }

    return (
      <div className='sticky top-0 z-50 flex items-center justify-between mx-auto px-2 max-w-7xl py-4 backdrop-blur-[2px] rounded-b-xl'>
        <div className='flex text-2xl mr-1'>
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
          </div>
        <div className={searchBoxStyle}>
          <Searchbox></Searchbox>
        </div>
        <motion.div
        className='flex justify-end hover:ml-4 ml-3'>
          <SocialLink link='www.linkedin.com/in/okazakee/' icon='Linkedin'></SocialLink>
          <SocialLink link='github.com/Okazakee/' icon='Github'></SocialLink>
          <SocialLink link='t.me/Okazakee' icon='Telegram'></SocialLink>
          <SocialLink link='twitter.com/Okazakee_DEV' icon='Twitter'></SocialLink>
          <SocialLink link='www.instagram.com/okazakee.dev' icon='Instagram'></SocialLink>
          <SocialLink link='www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg' icon='Youtube'></SocialLink>
        </motion.div>
      </div>
    );
}