import React, { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion'

function BtnWide({page, selectedBtnStyle, defaultBtnStyle, name, btnType, SetBtnFocus, SetHideSearchbox, HideSearch}) {

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
        <Link href={page}>
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