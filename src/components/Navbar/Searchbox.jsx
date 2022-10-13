import React, { useState } from 'react';

export const Searchbox = ({searchQuery, isMobile}) => {

  const searchBoxStyle = `text-[#653bba] bg-[#e8e8e8] outline-none transition-all duration-500 ease-in-out px-2 placeholder:text-center placeholder:opacity-80 placeholder:text-[#5b39a0]
  ${isMobile
    ? 'fixed bottom-7 left-0 right-0 z-10 focus:-translate-y-[350px] h-[3rem] rounded-2xl text-xl w-[90vw] mx-auto opacity-50 focus:opacity-100 text-center'
    : 'w-[12rem] focus:w-full hover:w-[15rem] focus:my-0 rounded-xl text-xl opacity-30 focus:opacity-80 hover:opacity-60'}`;

  return (
    <div>
        <input
            className={searchBoxStyle}
            type='search'
            placeholder="Search posts"
            onChange={searchQuery}
            />
    </div>
  )
}