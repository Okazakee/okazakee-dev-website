import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import Link from 'next/link';
import Image from "next/legacy/image";
import { motion } from 'framer-motion';

export const NavBtn = ({ page, name, HideSearch }) => {
  const { navStyles, urlPath } = useContext(MainContext);

  return (
    <Link href={page} passHref>
      <motion.button
        className={
          urlPath.startsWith(page)
            ? navStyles.buttons.selectedBtnStyle
            : navStyles.buttons.defaultBtnStyle
        }
        whileTap={{ scale: 0.9 }}
      >
        {' '}
        {name}
      </motion.button>
    </Link>
  );
};

export const MobileNavBtn = ({
  page,
  selectedBtnStyle,
  defaultBtnStyle,
  iconStyle,
  btnimg,
  name,
}) => {
  const { urlPath, SetSocialHide } = useContext(MainContext);

  const socialHandler = () => {
    console.log(name);
    name === 'Socials' ? SetSocialHide(false) : null;
  };

  return (
    <Link href={page} passHref>
      <motion.button
        onClick={() => socialHandler()}
        whileTap={{ scale: 0.8 }}
        className={
          urlPath.startsWith(page) ? selectedBtnStyle : defaultBtnStyle
        }
      >
        <div className={iconStyle}>
          <Image
            src={btnimg}
            alt="navIcon"
            layout="fill"
            objectFit="scale-down"
            priority="false"
            quality={100}
          />
        </div>
        {name}
      </motion.button>
    </Link>
  );
};
