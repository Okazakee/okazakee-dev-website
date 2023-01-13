import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const MainContext = createContext();

const MainProvider = ({ children }) =>  {

  const [HideSearchbox, SetHideSearchbox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [currentPage, SetCurrentPage] = useState('Bio');
  const router = useRouter();

  const navBtnStyles = {
    defaultBtnStyle: 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
    selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
    }

  const SelectionHandler = (e) => {
    const button = e.target;
    const buttons = Array.from(document.getElementsByClassName('nav'));
    buttons.map(button => button.className = navBtnStyles.defaultBtnStyle);
    button.className = navBtnStyles.selectedBtnStyle;
    }

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox, searchfield, SetSearchfield, currentPage, SetCurrentPage, SelectionHandler, navBtnStyles }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };