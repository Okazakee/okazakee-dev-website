import React, { useState } from 'react';

export const Searchbox = ({searchQuery}) => {
    return (
    <div>
        <input
            className="text-[#653bba] bg-[#e8e8e8] px-2 text-xl focus:my-0 outline-none transition-all duration-500 ease-in-out opacity-30 focus:opacity-80 hover:opacity-60 placeholder:text-center placeholder:opacity-50 placeholder:text-[#5b39a0] w-[12rem] focus:w-full hover:w-[15rem] rounded-xl"
            type='search'
            placeholder="Search posts"
            onChange={searchQuery}
            />
    </div>
  )
}