import { createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) =>  {

  const [HideSearchbox, SetHideSearchbox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [currentPage, SetCurrentPage] = useState('');

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox, searchfield, SetSearchfield, currentPage, SetCurrentPage }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };