import { createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) =>  {

  const [HideSearchbox, SetHideSearchbox] = useState(true);
  const [searchfield, setSearchfield] = useState('');

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox, searchfield, setSearchfield }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };