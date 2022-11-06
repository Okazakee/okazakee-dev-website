import { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context/MainContext';
import MobileNavBtn from './MobileNavBtn';
import { SocialLink2 } from './SocialLink2';

export default function MobileNavbar() {

    const { HideSearchbox, setSearchfield, searchfield, currentPage, SetCurrentPage } = useContext(MainContext);

    const styles = {
    NavbarStyle: `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`,
    defaultBtnStyle: 'nav h-fit text-[#b4b4b4]',
    selectedBtnStyle: 'nav underline underline-offset-1 h-fit text-[#e8e8e8]',
    iconStyle: 'h-8 w-8 relative mx-auto pointer-events-none'
    }

    const [socialHide, SetSocialHide] = useState(true);

    const SetBtnFocus = (e) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;

        buttons.map(button => button.className=styles.defaultBtnStyle);
        button.className = styles.selectedBtnStyle;
    }

    const OnSearchChange = (text) => {
        setSearchfield(text.target.value);
    }

    return (
        <div className={styles.NavbarStyle}>
            {socialHide ?
                <div className='flex justify-around mx-4'>
                    <MobileNavBtn page='/Bio' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/bio.png' name='Bio' btnType='selected' SetBtnFocus={SetBtnFocus}></MobileNavBtn>
                    <MobileNavBtn page='/Portfolio' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/portfolio.png' name='Portfolio' btnType='' SetBtnFocus={SetBtnFocus}></MobileNavBtn>
                    <MobileNavBtn page='' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/social.png' name='Socials' btnType='socialMenu' SetBtnFocus={SetBtnFocus}></MobileNavBtn>
                </div>
            :   <div className={`flex justify-between text-[0.7rem] mx-2 text-[#e8e8e8]`}>
                    <button onClick={() => SetSocialHide(!socialHide)}>
                        <SocialLink2 back={true} link='#' social='ArrowAltCircleLeft'></SocialLink2>
                    </button>
                    <SocialLink2 link='www.linkedin.com/in/okazakee/' social='Linkedin'></SocialLink2>
                    <SocialLink2 link='github.com/Okazakee/' social='Github'></SocialLink2>
                    <SocialLink2 link='t.me/Okazakee' social='Telegram'></SocialLink2>
                    <SocialLink2 link='twitter.com/Okazakee_DEV' social='Twitter'></SocialLink2>
                    <SocialLink2 link='www.instagram.com/okazakee.dev' social='Instagram'></SocialLink2>
                    <SocialLink2 link='www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg' social='Youtube'></SocialLink2>
                </div>}
        </div>
    )
}
