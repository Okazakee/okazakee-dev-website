import { createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children, culo }) =>  {

  const [HideSearchbox, SetHideSearchbox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [currentPage, SetCurrentPage] = useState('');

  const navBtnStyles = {
    defaultBtnStyle: 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
    selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
    }
  const SelectionHandler = (e) => {
    console.log(culo)
    const button = e.target;
    SetCurrentPage(button.innerText)

    if (router.query === button.innerText) {
      const buttons = Array.from(document.getElementsByClassName('nav'));
      buttons.map(button => button.className = navBtnStyles.defaultBtnStyle);

      button.className = navBtnStyles.selectedBtnStyle;
    }
  }

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox, searchfield, SetSearchfield, currentPage, SetCurrentPage, SelectionHandler, navBtnStyles }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };