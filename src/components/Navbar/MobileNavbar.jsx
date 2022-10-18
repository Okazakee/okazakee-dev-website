import React, { useState } from 'react';
import NavBtn from './MobileNavBtn';
import Searchbox from './Searchbox';

export default function MobileNavbar({SetHideSearchbox, HideSearchbox}) {

    const NavbarStyle = `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`;
    const defaultBtnStyle = 'nav h-fit text-[#b4b4b4]';
    const selectedBtnStyle = 'nav underline underline-offset-1 h-fit text-[#e8e8e8]';
    const iconStyle = 'h-8 w-8 relative mx-auto pointer-events-none';

    const SetBtnFocus = (e) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;

        buttons.map(button => button.className=defaultBtnStyle);
        button.className = selectedBtnStyle;
    }

    return (
        <>
        {HideSearchbox ?
        <div className={NavbarStyle}>
            <div className='flex justify-between mx-4'>
                <NavBtn SetHideSearchbox={SetHideSearchbox} page='/Bio' defaultBtnStyle={defaultBtnStyle} iconStyle={iconStyle} btnimg='/images/bio.png' name='Bio' btnType='selected' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn SetHideSearchbox={SetHideSearchbox} page='/Portfolio' defaultBtnStyle={defaultBtnStyle} iconStyle={iconStyle} btnimg='/images/portfolio.png' name='Portfolio' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn SetHideSearchbox={SetHideSearchbox} page='/Blog' defaultBtnStyle={defaultBtnStyle} iconStyle={iconStyle} btnimg='/images/blog.png' name='Blog' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn SetHideSearchbox={SetHideSearchbox} page='' defaultBtnStyle={defaultBtnStyle} iconStyle={iconStyle} btnimg='/images/search.png' name='Search' btnType='search' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn SetHideSearchbox={SetHideSearchbox} page='' defaultBtnStyle={defaultBtnStyle} iconStyle={iconStyle} btnimg='/images/social.png' name='Socials' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
            </div>
        </div>
        : <Searchbox isMobile={true}></Searchbox>}
        </>
    )
}
