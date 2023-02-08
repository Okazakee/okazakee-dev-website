import { useContext } from 'react';
import Link from 'next/link';
import { MainContext } from '../context/MainContext';
import { SocialLink, SocialLinkMobile } from './SocialLink';
import { NavBtn, MobileNavBtn } from './NavBtn';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { HideSearchBox, urlPath, navBtnStyles } = useContext(MainContext);

  const styles = {
    SearchBoxStyle: `min-w-fit w-full transition-all ease-in-out duration-300 ${
      HideSearchBox ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`,
    navStyle:
      'transition-all ease-in-out duration-[200ms] fixed top-0 left-0 right-0 z-50 backdrop-blur-sm',
    mainDiv:
      'flex items-center justify-between mx-auto px-2 py-4 rounded-2xl max-w-7xl',
    adminDiv:
      'flex items-center justify-between mx-auto px-10 py-4 rounded-2xl max-w-7xl',
    innerDiv: 'flex text-2xl mr-1',
    linksDiv: 'flex justify-end hover:ml-4 ml-3 mr-1',
  };

  return (
    <div className={styles.navStyle}>
      {!urlPath.includes('/admin') ? (
        <div className={styles.mainDiv}>
          <div className={styles.innerDiv}>
            <NavBtn HideSearch={true} page="/Bio" name="Bio"></NavBtn>
            <NavBtn
              HideSearch={false}
              page="/Portfolio"
              name="Portfolio"
            ></NavBtn>
            <NavBtn HideSearch={false} page="/Blog" name="Blog"></NavBtn>
          </div>
          <motion.div className={styles.linksDiv}>
            <SocialLink
              link="www.linkedin.com/in/okazakee/"
              social="Linkedin"
            ></SocialLink>
            <SocialLink
              link="github.com/Okazakee/"
              social="Github"
            ></SocialLink>
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
      ) : (
        <div className={styles.adminDiv}>
          <div className="flex text-xl mr-1">
            <div className="flex items-center">
              <img src="/images/admin.png" className="h-10 w-10 mr-5"></img>
              <p className="mr-2">Administrator Mode |</p>
              {urlPath.endsWith('/auth') && <p>AUTHENTICATION</p>}
              {urlPath.endsWith('/panel') && <p>EDITOR MODE</p>}
            </div>
          </div>
          <div className={styles.innerDiv}>
            <Link href="/">
              <motion.button
                className={navBtnStyles.defaultBtnStyle}
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

export const MobileNavbar = () => {
  const {
    HideSearchBox,
    searchfield,
    setSearchfield,
    SetSocialHide,
    socialHide,
  } = useContext(MainContext);

  const styles = {
    NavbarStyle: `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`,
    defaultBtnStyle: 'nav h-fit text-[#b4b4b4]',
    selectedBtnStyle: 'nav underline underline-offset-1 h-fit text-[#e8e8e8]',
    iconStyle: 'h-8 w-8 relative mx-auto pointer-events-none',
  };

  const OnSearchChange = (text) => {
    setSearchfield(text.target.value);
  };

  return (
    <div className={styles.NavbarStyle}>
      {socialHide ? (
        <div className="flex justify-around mx-4">
          <MobileNavBtn
            page="/Bio"
            socialHide={socialHide}
            defaultBtnStyle={styles.defaultBtnStyle}
            iconStyle={styles.iconStyle}
            btnimg="/images/bio.png"
            name="Bio"
          ></MobileNavBtn>
          <MobileNavBtn
            page="/Portfolio"
            socialHide={socialHide}
            defaultBtnStyle={styles.defaultBtnStyle}
            iconStyle={styles.iconStyle}
            btnimg="/images/portfolio.png"
            name="Portfolio"
          ></MobileNavBtn>
          <MobileNavBtn
            page="/Blog"
            socialHide={socialHide}
            defaultBtnStyle={styles.defaultBtnStyle}
            iconStyle={styles.iconStyle}
            btnimg="/images/blog.png"
            name="Blog"
          ></MobileNavBtn>
          <MobileNavBtn
            page=""
            socialHide={socialHide}
            defaultBtnStyle={styles.defaultBtnStyle}
            iconStyle={styles.iconStyle}
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

export const AdminMode = () => {
  return <div>AdminMode</div>;
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
