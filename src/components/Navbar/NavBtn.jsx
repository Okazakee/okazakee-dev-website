import { useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import Link from 'next/link'
import { motion } from 'framer-motion'

function BtnWide({page, selectedBtnStyle, defaultBtnStyle, name, btnType, HideSearch}) {

    const { SetHideSearchbox, SetCurrentPage, currentPage } = useContext(MainContext);

    const styles = {
        defaultBtnStyle: 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
        selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
        }

    const SelectionHandler = (e) => {
        const buttons = Array.from(document.getElementsByClassName('nav'));
        const button = e.target;
        buttons.map(button => button.className = styles.defaultBtnStyle);

        SetCurrentPage({name});

        if (currentPage = {name}) {
            button.className = styles.selectedBtnStyle;
        }
    }

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
                onClick={(e) => SelectionHandler(e)}
                whileTap={{ scale: 0.9 }}
                > {name}
            </motion.button>
        </Link>
  )
}

export default BtnWide;