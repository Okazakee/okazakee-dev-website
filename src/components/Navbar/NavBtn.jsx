import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

function NavBtn({ page, name, HideSearch }) {
  const { navBtnStyles, pathname } = useContext(MainContext);

  return (
    <Link href={page} passHref>
      <motion.button
        className={
          pathname.startsWith(page)
            ? navBtnStyles.selectedBtnStyle
            : navBtnStyles.defaultBtnStyle
        }
        whileTap={{ scale: 0.9 }}
      >
        {' '}
        {name}
      </motion.button>
    </Link>
  );
}

export default NavBtn;
