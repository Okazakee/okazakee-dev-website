import React, { useState } from 'react';
import Searchbox from './Searchbox';
import { SocialLink } from './SocialLink';
import NavBtnWide from './NavBtn';
import { motion } from 'framer-motion';

export default function Navbar({SetHideSearchbox, HideSearchbox, isDark}) {

  const defaultBtnStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all';
  const selectedBtnStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';
  const searchBoxStyle = `min-w-fit w-full transition-all ease-in-out duration-300 ${HideSearchbox ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;
  const navStyle = 'transition-all ease-in-out duration-[200ms] fixed top-0 left-0 right-0 z-50 backdrop-blur-md'

  const SetBtnFocus = (e) => { //thanks to Jack Rendor for this solution.
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    buttons.map(button => button.className=defaultBtnStyle);
    button.className = selectedBtnStyle;
  }

    return (
      <div className={navStyle}>
        <div className='flex items-center justify-between mx-auto px-2 py-4 rounded-2xl max-w-7xl'>
          <div className='flex text-2xl mr-1'>
            <NavBtnWide HideSearch={true} SetHideSearchbox={SetHideSearchbox} page='/Bio' selectedBtnStyle={selectedBtnStyle} defaultBtnStyle={defaultBtnStyle} name='Bio' btnType='selected' SetBtnFocus={SetBtnFocus}></NavBtnWide>
            <NavBtnWide HideSearch={false} SetHideSearchbox={SetHideSearchbox} page='/Portfolio' selectedBtnStyle={selectedBtnStyle} defaultBtnStyle={defaultBtnStyle} name='Portfolio' btnType='search' SetBtnFocus={SetBtnFocus}></NavBtnWide>
            <NavBtnWide HideSearch={false} SetHideSearchbox={SetHideSearchbox} page='/Blog' selectedBtnStyle={selectedBtnStyle} defaultBtnStyle={defaultBtnStyle} name='Blog' btnType='search' SetBtnFocus={SetBtnFocus}></NavBtnWide>
          </div>
          <div className={searchBoxStyle}>
            <Searchbox isMobile={false}></Searchbox>
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
      </div>
    );
}