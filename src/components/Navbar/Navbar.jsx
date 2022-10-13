import React, { useState } from 'react';
import { Searchbox } from './Searchbox';
import { motion } from 'framer-motion';
import { SocialLink } from './SocialLink';

export default function Navbar() {

  const defaultBtnStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb]';
  const selectedBtnStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';
  const searchBoxStyle = `min-w-fit w-full transition-all ease-in-out duration-300 ${'bio' === 'bio' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

  const SetBtnFocus = (e) => { //thanks to Jack Rendor for this solution.
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    buttons.map(button => button.className=defaultBtnStyle);
    button.className = selectedBtnStyle;
  }

    return (
      <div className='sticky top-0 z-50 flex items-center justify-between mx-auto px-2 py-4 backdrop-blur-[2px] rounded-b-xl'>
        <div className='flex text-2xl mr-1'>
          <motion.button
            onClick={(e) => SetBtnFocus(e)}
            className={selectedBtnStyle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            > Bio
          </motion.button>
          <motion.button
            onClick={(e) => SetBtnFocus(e)}
            className={defaultBtnStyle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            > Portfolio
          </motion.button>
          <motion.button
            onClick={(e) => SetBtnFocus(e)}
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
        className='flex justify-end hover:ml-4 ml-3 mr-1'>
          <SocialLink link='www.linkedin.com/in/okazakee/' social='Linkedin'></SocialLink>
          <SocialLink link='github.com/Okazakee/' social='Github'></SocialLink>
          <SocialLink link='t.me/Okazakee' social='Telegram'></SocialLink>
          <SocialLink link='twitter.com/Okazakee_DEV' social='Twitter'></SocialLink>
          <SocialLink link='www.instagram.com/okazakee.dev' social='Instagram'></SocialLink>
          <SocialLink link='www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg' social='Youtube'></SocialLink>
        </motion.div>
      </div>
    );
}