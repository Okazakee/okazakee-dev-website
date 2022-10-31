import { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context/MainContext';
import NavBtn from './MobileNavBtn';
import Searchbox from './Searchbox';

export default function MobileNavbar() {

    const { HideSearchbox, setSearchfield, searchfield } = useContext(MainContext);

    const styles = {
    NavbarStyle: `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`,
    defaultBtnStyle: 'nav h-fit text-[#b4b4b4]',
    selectedBtnStyle: 'nav underline underline-offset-1 h-fit text-[#e8e8e8]',
    iconStyle: 'h-8 w-8 relative mx-auto pointer-events-none'
    }

    const SetBtnFocus = (e) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;

        buttons.map(button => button.className=styles.defaultBtnStyle);
        button.className = styles.selectedBtnStyle;
    }

    const OnSearchChange = (text) => {
        setSearchfield(text.target.value);
    }

    useEffect(() => {
        console.log(searchfield);
      }, [setSearchfield])

    return (
        <>
        {HideSearchbox ?
        <div className={styles.NavbarStyle}>
            <div className='flex justify-between mx-4'>
                <NavBtn page='/Bio' defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/bio.png' name='Bio' btnType='selected' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn page='/Portfolio' defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/portfolio.png' name='Portfolio' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn page='/Blog' defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/blog.png' name='Blog' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn page='' defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/search.png' name='Search' btnType='search' SetBtnFocus={SetBtnFocus}></NavBtn>
                <NavBtn page='' defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/social.png' name='Socials' btnType='' SetBtnFocus={SetBtnFocus}></NavBtn>
            </div>
        </div>
        : <Searchbox isMobile={true} searchChange={OnSearchChange}></Searchbox>}
        </>
    )
}
