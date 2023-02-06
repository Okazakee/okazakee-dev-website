import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { SocialLink } from './SocialLink';
import NavBtn from './NavBtn';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { HideSearchBox } = useContext(MainContext);

  const styles = {
    SearchBoxStyle: `min-w-fit w-full transition-all ease-in-out duration-300 ${
      HideSearchBox ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`,
    navStyle:
      'transition-all ease-in-out duration-[200ms] fixed top-0 left-0 right-0 z-50 backdrop-blur-sm',
    mainDiv:
      'flex items-center justify-between mx-auto px-2 py-4 rounded-2xl max-w-7xl',
    innerDiv: 'flex text-2xl mr-1',
    linksDiv: 'flex justify-end hover:ml-4 ml-3 mr-1',
  };

  return (
    <div className={styles.navStyle}>
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>
          <NavBtn
            HideSearch={true}
            page="/Bio"
            name="Bio"
          ></NavBtn>
          <NavBtn
            HideSearch={false}
            page="/Portfolio"
            name="Portfolio"
          ></NavBtn>
          <NavBtn
            HideSearch={false}
            page="/Blog"
            name="Blog"
          ></NavBtn>
        </div>
        <motion.div className={styles.linksDiv}>
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
}
