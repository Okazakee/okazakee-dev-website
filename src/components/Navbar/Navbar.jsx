import React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { MainContext } from '../context/MainContext';
import { SocialLink, SocialLinkMobile } from './SocialLink';
import { NavBtn, MobileNavBtn } from './NavBtn';
import { motion } from 'framer-motion';

export const AdminHeader = () => {
  const { urlPath, navStyles } = useContext(MainContext);

  return (
    <div>
      {urlPath.includes('/admin') && (
        <div className={navStyles.default.adminDiv}>
          <div className="flex text-xl mr-1">
            <div className="flex items-center">
              <img src="/images/admin.png" className="h-10 w-10 mr-5"></img>
              <p className="mr-2">Administrator Mode |</p>
              {urlPath.endsWith('/auth') && (
                <p>Please login to enter the CMS</p>
              )}
              {urlPath.endsWith('/CMS') && (
                <p>CMS - Edit pages content and manage users</p>
              )}
            </div>
          </div>
          <div className={navStyles.default.innerDiv}>
            <Link href="/">
              <motion.button
                className={navStyles.buttons.defaultBtnStyle}
                whileTap={{ scale: 0.9 }}
              >
                Exit
              </motion.button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const { navStyles } = useContext(MainContext);

  return (
    <div className={navStyles.default.navStyle}>
      <div className={navStyles.default.mainDiv}>
        <div className={navStyles.default.innerDiv}>
          <NavBtn HideSearch={true} page="/Bio" name="Bio"></NavBtn>
          <NavBtn
            HideSearch={false}
            page="/Portfolio"
            name="Portfolio"
          ></NavBtn>
          <NavBtn HideSearch={false} page="/Blog" name="Blog"></NavBtn>
        </div>
        <motion.div className={navStyles.default.linksDiv}>
          <SocialLink
            link="www.linkedin.com/in/okazakee/"
            social="Linkedin"
          ></SocialLink>
          <SocialLink link="github.com/Okazakee/" social="Github"></SocialLink>
          <SocialLink link="t.me/Okazakee" social="Telegram"></SocialLink>
          <SocialLink
            link="twitter.com/Okazakee_DEV"
            social="Twitter"
          ></SocialLink>
          <SocialLink
            link="www.instagram.com/okazakee.dev"
            social="Instagram"
          ></SocialLink>
          <SocialLink
            link="www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg"
            social="Youtube"
          ></SocialLink>
        </motion.div>
      </div>
    </div>
  );
};

export const MobileNavbar = () => {
  const { setSearchfield, SetSocialHide, socialHide, navStyles } =
    useContext(MainContext);

  const OnSearchChange = (text) => {
    setSearchfield(text.target.value);
  };

  return (
    <div className={navStyles.mobile.NavbarStyle}>
      {socialHide ? (
        <div className="flex justify-around mx-4">
          <MobileNavBtn
            page="/Bio"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/bio.png"
            name="Bio"
          ></MobileNavBtn>
          <MobileNavBtn
            page="/Portfolio"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/portfolio.png"
            name="Portfolio"
          ></MobileNavBtn>
          <MobileNavBtn
            page="/Blog"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/blog.png"
            name="Blog"
          ></MobileNavBtn>
          <MobileNavBtn
            page=""
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/social.png"
            name="Socials"
          ></MobileNavBtn>
        </div>
      ) : (
        <div
          className={`flex justify-between text-[0.7rem] mx-2 text-[#e8e8e8]`}
        >
          <button onClick={() => SetSocialHide(true)}>
            <SocialLinkMobile
              back={true}
              link="#"
              social="ArrowAltCircleLeft"
            ></SocialLinkMobile>
          </button>
          <SocialLinkMobile
            link="www.linkedin.com/in/okazakee/"
            social="Linkedin"
          ></SocialLinkMobile>
          <SocialLinkMobile
            link="github.com/Okazakee/"
            social="Github"
          ></SocialLinkMobile>
          <SocialLinkMobile
            link="t.me/Okazakee"
            social="Telegram"
          ></SocialLinkMobile>
          <SocialLinkMobile
            link="twitter.com/Okazakee_DEV"
            social="Twitter"
          ></SocialLinkMobile>
          <SocialLinkMobile
            link="www.instagram.com/okazakee.dev"
            social="Instagram"
          ></SocialLinkMobile>
          <SocialLinkMobile
            link="www.youtube.com/channel/UCUogIMOIHwCt3dlL-_CtMg"
            social="Youtube"
          ></SocialLinkMobile>
        </div>
      )}
    </div>
  );
};

export const SearchBox = ({ isMobile, searchChange }) => {
  const SearchBoxStyle = `text-[#653bba] bg-[#e8e8e8] outline-none transition-all duration-500 ease-in-out px-2 placeholder:text-center placeholder:opacity-80 placeholder:text-[#5b39a0]
  ${
    isMobile
      ? 'fixed bottom-7 left-0 right-0 z-10 focus:-translate-y-[350px] h-[3rem] rounded-2xl text-xl w-[90vw] mx-auto opacity-50 focus:opacity-100 text-center'
      : 'w-[12rem] focus:w-full hover:w-[15rem] focus:my-0 rounded-xl text-xl opacity-30 focus:opacity-80 hover:opacity-60'
  }`;

  return (
    <div>
      <input
        className={SearchBoxStyle}
        type="search"
        placeholder="Search posts..."
        onChange={searchChange}
      />
    </div>
  );
};
