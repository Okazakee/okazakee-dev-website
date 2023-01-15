import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const MainContext = createContext();

const MainProvider = ({ children }) =>  {

  const [HideSearchBox, SetHideSearchBox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [currentPage, SetCurrentPage] = useState('Bio');
  const { pathname } = useRouter()

  const navBtnStyles = {
    defaultBtnStyle: 'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
    selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
    }

    return (
      <MainContext.Provider value={{ pathname, HideSearchBox, SetHideSearchBox, searchfield, SetSearchfield, currentPage, SetCurrentPage, navBtnStyles }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };