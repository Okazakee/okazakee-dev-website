import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SocialLink, SocialLinkMobile } from './SocialLink';
import { NavBtn, MobileNavBtn } from './NavBtn';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AdminHeader = () => {
  const { navStyles, urlPath } = useContext(MainContext);

  return (
    <div className={navStyles.default.adminNav}>
      <div className="flex">
        <div className={navStyles.default.mainDiv}>
          <div className="text-center mt-5 md:mt-0 md:text-xl">
            {urlPath.endsWith('/auth') && (
              <p>
                <label className="text-[#8c54fb]">Authentication</label> -
                Please login to enter in the CMS
              </p>
            )}
            {urlPath.endsWith('/cms') && (
              <p>
                <label className="text-[#8c54fb]">CMS</label> - Edit pages
                content and manage users
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block fixed left-1/2 -translate-x-1/2 bottom-5">
        <div className="flex">
          <div className="flex items-center">
            <Image
              width={32}
              height={32}
              src="/images/admin.png"
              alt="admin_icon"
              className="mr-2"
            ></Image>
            <p>Administrator Mode</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block fixed right-5 bottom-3">
        <MobileNavBtn
          page="/bio"
          defaultBtnStyle="text-[#b4b4b4] hover:text-[#e8e8e8]"
          iconStyle={navStyles.mobile.iconStyle}
          btnimg="/images/exit.png"
          name="Exit"
        ></MobileNavBtn>
      </div>
    </div>
  );
};

export const AdminMobileHeader = () => {
  const { navStyles } = useContext(MainContext);

  return (
    <div className={navStyles.mobile.NavbarStyle}>
      <div className="flex justify-around  mx-4">
        <div className="flex text-lg mb-2 items-center">
          <Image
            width={40}
            height={40}
            src="/images/admin.png"
            alt="admin_icon"
            className="mr-2"
          ></Image>
          <p>Administrator Mode</p>
        </div>
        <MobileNavBtn
          page="/bio"
          defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
          iconStyle={navStyles.mobile.iconStyle}
          btnimg="/images/exit.png"
          name="Exit"
        ></MobileNavBtn>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const { navStyles } = useContext(MainContext);
  const pdfLink = process.env.NEXT_PUBLIC_PDF_URL;

  return (
    <div className={navStyles.default.navStyle}>
      <div className={navStyles.default.mainDiv}>
        <div className={navStyles.default.innerDiv}>
          <NavBtn HideSearch={true} page="/bio" name="Bio"></NavBtn>
          <NavBtn
            HideSearch={false}
            page="/portfolio"
            name="Portfolio"
          ></NavBtn>
          {/* <NavBtn HideSearch={false} page="/blog" name="Blog"></NavBtn> */}
          <NavBtn HideSearch={true} page={pdfLink} name="Resume"></NavBtn>
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
            page="/bio"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/bio.png"
            name="Bio"
          ></MobileNavBtn>
          <MobileNavBtn
            page="/portfolio"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/portfolio.png"
            name="Portfolio"
          ></MobileNavBtn>
          {/* <MobileNavBtn
            page="/blog"
            socialHide={socialHide}
            defaultBtnStyle={navStyles.mobile.defaultBtnStyle}
            iconStyle={navStyles.mobile.iconStyle}
            btnimg="/images/blog.png"
            name="Blog"
          ></MobileNavBtn> */}
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
