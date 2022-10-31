import { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Link from 'next/link'
import { motion } from 'framer-motion'

function BtnWide({page, selectedBtnStyle, defaultBtnStyle, name, btnType, SetBtnFocus, HideSearch}) {

    const { SetHideSearchbox } = useContext(MainContext);

    const manageBtns = (e) => {
        if (!HideSearch){
            SetBtnFocus(e);
            SetHideSearchbox(false);
        } else if (HideSearch) {
            SetBtnFocus(e);
            SetHideSearchbox(true);
        }
    }

    return (
        <Link href={page} passHref prefetch>
            <motion.button
                className={btnType === 'selected' ? selectedBtnStyle : defaultBtnStyle}
                onClick={(e) => manageBtns(e)}
                whileTap={{ scale: 0.9 }}
                > {name}
            </motion.button>
        </Link>
  )
}

export default BtnWide;