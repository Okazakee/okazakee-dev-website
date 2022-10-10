import React from 'react'

export const MobileNavbar = ({SetPageName, PageName}) => {
    const defaultBtnStyle = 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb]';
    const selectedBtnStyle = 'nav mx-3 underline underline-offset-1 text-[#8c54fb]';
    const searchBoxStyle = `min-w-fit w-full transition-all ease-in-out duration-300 ${PageName === 'bio' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`;

    const SetBtnFocus = (e, page) => { //thanks to Jack Rendor for this solution.
    const buttons = Array.from(document.getElementsByClassName('nav'));
    const button = e.target;

    SetPageName(page);

    buttons.map(button => button.className=defaultBtnStyle);
    button.className = selectedBtnStyle;
  }
    return (
        <div className='sticky bottom-0 z-50 flex items-center justify-between mx-auto py-4 rounded-xl bg-[#8c54fb]'>
            null
        </div>
    )
}
