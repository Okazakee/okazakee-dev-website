import React, { useState } from 'react'
import Image from 'next/image';
import { Searchbox } from './Searchbox';

export const MobileNavbar = ({SetPageName, isMobile}) => {

    const [ShowSearchbar, SetShowSearchbar] = useState(false);

    const NavbarStyle = `bg-[#8c54fb] fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[7vh] mx-auto pt-2`;
    const defaultBtnStyle = 'nav hover:underline hover:underline-offset-1 hover:text-black h-fit';
    const selectedBtnStyle = 'nav underline underline-offset-1 text-black h-fit';
    const iconStyle = 'h-6 w-6 relative mx-auto';

    const SetBtnFocus = (e, page) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;

        SetPageName(page);

        buttons.map(button => button.className=defaultBtnStyle);
        button.className = selectedBtnStyle;
      }

    return (
        <>
        {ShowSearchbar
        ?
        <Searchbox isMobile={isMobile}></Searchbox>
        :
        <div className={NavbarStyle}>
            <div className='flex justify-between mx-5'>
                <button
                onClick={(e) => SetBtnFocus(e, 'bio')}
                className={selectedBtnStyle}>
                    <div className={iconStyle}>
                        <Image src='/images/bio.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Bio
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'portfolio')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image src='/images/portfolio.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Portfolio
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image src='/images/blog.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Blog
                </button>
                <button
                onClick={() => SetShowSearchbar(!ShowSearchbar)}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image src='/images/search.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Search
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className={iconStyle}>
                        <Image src='/images/social.png' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Socials
                </button>
            </div>
        </div>}
            </>
    )
}
