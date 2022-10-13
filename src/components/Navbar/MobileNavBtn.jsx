import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function MobileNavBtn({page, selectedBtnStyle, defaultBtnStyle, iconStyle, btnimg, name, btnType, SetBtnFocus, SetHideSearchbox}) {

    return (
        <Link href={page}>
            <motion.button
            whileTap={{ scale: 0.8 }}
            className={btnType === 'selected' ? selectedBtnStyle : defaultBtnStyle}
            onClick={btnType === 'search' ? () => SetHideSearchbox(false) : (e) => SetBtnFocus(e)}>
                <div className={iconStyle}>
                    <Image src={btnimg} alt='navIcon' layout='fill' objectFit='scale-down' priority='false' quality={100} />
                </div>
                {name}
            </motion.button>
        </Link>
  )
}

export default MobileNavBtn