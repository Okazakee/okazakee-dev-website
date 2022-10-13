import React, { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion'

function BtnWide({page, selectedBtnStyle, defaultBtnStyle, name, btnType, SetBtnFocus, SetHideSearchbox}) {

    return (
        <Link href={page}>
            <motion.button
                className={btnType === 'selected' ? selectedBtnStyle : defaultBtnStyle}
                onClick={(e) => SetBtnFocus(e) }
                whileTap={{ scale: 0.9 }}
                > {name}
            </motion.button>
        </Link>
  )
}

export default BtnWide;