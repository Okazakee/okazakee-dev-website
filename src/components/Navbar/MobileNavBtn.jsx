import { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function MobileNavBtn({page, selectedBtnStyle, defaultBtnStyle, iconStyle, btnimg, name, btnType, socialHide, SetSocialHide, SetBtnFocus}) {

    const handler = (e) => {
        btnType === 'socialMenu' ? SetSocialHide(!socialHide) : SetBtnFocus(e);
    }

    return (
        <Link href={page} passHref>
            <motion.button
            whileTap={{ scale: 0.8 }}
            className={btnType === 'selected' ? selectedBtnStyle : defaultBtnStyle}
            onClick={(e) => handler(e)}>
                <div className={iconStyle}>
                    <Image src={btnimg} alt='navIcon' layout='fill' objectFit='scale-down' priority='false' quality={100} />
                </div>
                {name}
            </motion.button>
        </Link>
  )
}

export default MobileNavBtn