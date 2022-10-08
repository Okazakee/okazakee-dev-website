import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Searchbox = ({searchChagne}) => {
    return (
    <div>
        <motion.input
            className="px-1 text-[#653bba] hover:transition-all duration-200 ease-in-out opacity-90 focus:opacity-100 hover:opacity-100 placeholder:text-center w-[12rem] hover:w-[20rem] focus:w-[20rem] rounded-xl"
            type='search'
            placeholder="Search Posts"
            onChange={searchChagne}
            />
    </div>
  )
}