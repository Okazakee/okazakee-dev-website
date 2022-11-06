import { useEffect, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Link from 'next/link'
import { motion } from 'framer-motion'

function NavBtn({page, name, btnType, HideSearch}) {

  const { SelectionHandler, navBtnStyles, currentPage } = useContext(MainContext);

  const btnHandler = (e) => {
    SelectionHandler(e)
  }

  useEffect(() => {

    }, [currentPage]);

  return (
    <Link href={page} passHref>
      <motion.button
        className={btnType === 'selected' ? navBtnStyles.selectedBtnStyle : navBtnStyles.defaultBtnStyle}
        onClick={(e) => btnHandler(e)}
        whileTap={{ scale: 0.9 }}
        > {name}
      </motion.button>
    </Link>
  )
}

export default NavBtn;