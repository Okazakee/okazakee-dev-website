import React, { useState } from 'react'
import Image from 'next/image';
import { Searchbox } from './Searchbox';

export const MobileNavbar = ({SetPageName, isMobile}) => {

    const [ShowSearchbar, SetShowSearchbar] = useState(false);

    const NavbarStyle = `bg-[#8c54fb] fixed bottom-6 left-0 right-0 z-50 py-4 rounded-3xl text-lg text-center w-[90vw] mx-auto`;
    const defaultBtnStyle = 'nav hover:underline hover:underline-offset-1 hover:text-black';
    const selectedBtnStyle = 'nav underline underline-offset-1 text-black';

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
            <div className='flex items-center justify-between mx-6'>
                <button
                onClick={(e) => SetBtnFocus(e, 'bio')}
                className={selectedBtnStyle}>
                    <div className='h-10 w-10 relative mx-auto'>
                        <Image src='/images/bio.svg' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Bio
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'portfolio')}
                className={defaultBtnStyle}>
                    <div className='h-10 w-10 relative mx-auto'>
                        <Image src='/images/bio.svg' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Portfolio
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className='h-10 w-10 relative mx-auto'>
                        <Image src='/images/bio.svg' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Blog
                </button>
                <button
                onClick={() => SetShowSearchbar(!ShowSearchbar)}
                className={defaultBtnStyle}>
                    <div className='h-10 w-10 relative mx-auto'>
                        <Image src='/images/bio.svg' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Search
                </button>
                <button
                onClick={(e) => SetBtnFocus(e, 'blog')}
                className={defaultBtnStyle}>
                    <div className='h-10 w-10 relative mx-auto'>
                        <Image src='/images/bio.svg' alt='bioBtn' layout='fill' objectFit='scale-down' priority='true' quality={100} />
                    </div>
                    Socials
                </button>
            </div>
        </div>}
            </>
    )
}
