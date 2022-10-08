import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Searchbox = ({searchChagne}) => {
    return (
    <div>
        <motion.input
            className="text-[#653bba] bg-[#e8e8e8] px-2 text-xl focus:my-0 focus:outline-none transition-all duration-300 ease-in-out opacity-90 focus:opacity-100 hover:opacity-100 placeholder:text-center placeholder:text-[#5b39a0] w-[12rem] focus:w-full rounded-xl"
            type='search'
            placeholder="Search Posts"
            onChange={searchChagne}
            />
    </div>
  )
}