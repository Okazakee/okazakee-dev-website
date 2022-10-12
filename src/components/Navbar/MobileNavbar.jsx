import React, { useState } from 'react'
import Image from 'next/image';
import { Searchbox } from './Searchbox';
import { motion } from 'framer-motion';

export const MobileNavbar = ({SetPageName, isMobile}) => { /* //TODO ADD SWIPE GESTURES TO CHAGNE PAGE */

    const [ShowSearchbar, SetShowSearchbar] = useState(false);

    const NavbarStyle = `bg-[#8c54fb] fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5`;
    const defaultBtnStyle = 'nav h-fit text-[#e8e8e8]';
    const selectedBtnStyle = 'nav underline underline-offset-1 h-fit text-[#090909]';
    const iconStyle = 'h-8 w-8 relative mx-auto pointer-events-none';

    const SetBtnFocus = (e, page) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;
        console.log(button);

        SetPageName(page);

        buttons.map(button => button.className=defaultBtnStyle);
        button.className = selectedBtnStyle;
    }

    return (
        <>
        {ShowSearchbar
        ?
        <Searchbox isMobile={isMobile}></Searchbox> /* //TODO ADD ANIMATION ON SHOWING, ADD CLEAR BUTTON ON RIGHT, PLACE FIXED ON TOP WHEN FOCUS */
        :
        <div className={NavbarStyle}> {/* //TODO HIDE nav WHEN DOWNSCROLLING */}
            <div className='flex justify-between mx-4'>
                <motion.button
                whileTap={{ scale: 0.6 }}
                onClick={(e) => SetBtnFocus(e, 'bio')}
                className={selectedBtnStyle}>
                    <div className={iconStyle}>
                        <Image className='pointer-events-none' src='/images/bio.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='false' quality={100} />
                    </div>
                    Bio
                </motion.button>
                <motion.button
                whileTap={{ scale: 0.6 }}
                onClick={(e) => SetBtnFocus(e, 'portfolio')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image className='pointer-events-none' src='/images/portfolio.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Portfolio
                </motion.button>
                <motion.button
                whileTap={{ scale: 0.6 }}
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image className='pointer-events-none' src='/images/blog.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                  Blog
                </motion.button>
                <motion.button
                whileTap={{ scale: 0.6 }}
                onClick={() => SetShowSearchbar(!ShowSearchbar)}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image className='pointer-events-none' src='/images/search.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Search
                </motion.button>
                <motion.button
                whileTap={{ scale: 0.6 }}
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image className='pointer-events-none' src='/images/social.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Socials
                </motion.button>
            </div>
        </div>}
            </>
    )
}
