import React, { useState } from 'react';

export const Searchbox = ({searchQuery, isMobile}) => {

  const searchBoxStyle = `text-[#653bba] bg-[#e8e8e8] outline-none transition-all duration-500 ease-in-out px-2 opacity-30 focus:opacity-80 hover:opacity-60 placeholder:text-center placeholder:opacity-80 placeholder:text-[#5b39a0]
  ${isMobile
    ? 'fixed bottom-6 left-0 right-0 z-50 py-4 rounded-3xl text-xl w-[90vw] mx-auto'
    : 'w-[12rem] focus:w-full hover:w-[15rem] focus:my-0 rounded-xl text-xl'}`;

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