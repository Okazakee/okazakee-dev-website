import { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context/MainContext';
import MobileNavBtn from './MobileNavBtn';
import { SocialLinkMobile } from './SocialLinkMobile';

export default function MobileNavbar() {

    const { HideSearchBox, setSearchfield, searchfield } = useContext(MainContext);

    const styles = {
    NavbarStyle: `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`,
    defaultBtnStyle: 'nav h-fit text-[#b4b4b4]',
    selectedBtnStyle: 'nav underline underline-offset-1 h-fit text-[#e8e8e8]',
    iconStyle: 'h-8 w-8 relative mx-auto pointer-events-none'
    }

    const [socialHide, SetSocialHide] = useState(true);

    const OnSearchChange = (text) => {
        setSearchfield(text.target.value);
    }

    return (
        <div className={styles.NavbarStyle}>
            {socialHide ?
                <div className='flex justify-around mx-4'>
                    <MobileNavBtn page='/Bio' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/bio.png' name='Bio' btnType='selected'></MobileNavBtn>
                    <MobileNavBtn page='/Portfolio' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/portfolio.png' name='Portfolio' btnType=''></MobileNavBtn>
                    {/* <MobileNavBtn page='/Blog' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/blog.png' name='Blog' btnType='' ></MobileNavBtn> */}
                    <MobileNavBtn page='' socialHide={socialHide} SetSocialHide={SetSocialHide} defaultBtnStyle={styles.defaultBtnStyle} iconStyle={styles.iconStyle} btnimg='/images/social.png' name='Socials' btnType='socialMenu'></MobileNavBtn>
                </div>
            :   <div className={`flex justify-between text-[0.7rem] mx-2 text-[#e8e8e8]`}>
                    <button onClick={() => SetSocialHide(!socialHide)}>
                        <SocialLinkMobile back={true} link='#' social='ArrowAltCircleLeft'></SocialLinkMobile>
                    </button>
                    <SocialLinkMobile link='www.linkedin.com/in/okazakee/' social='Linkedin'></SocialLinkMobile>
                    <SocialLinkMobile link='github.com/Okazakee/' social='Github'></SocialLinkMobile>
                    <SocialLinkMobile link='t.me/Okazakee' social='Telegram'></SocialLinkMobile>
                    <SocialLinkMobile link='twitter.com/Okazakee_DEV' social='Twitter'></SocialLinkMobile>
                    <SocialLinkMobile link='www.instagram.com/okazakee.dev' social='Instagram'></SocialLinkMobile>
                    <SocialLinkMobile link='www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg' social='Youtube'></SocialLinkMobile>
                </div>}
        </div>
    )
}
