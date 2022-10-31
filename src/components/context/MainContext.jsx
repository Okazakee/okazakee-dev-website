import { createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) =>  {

  const [HideSearchbox, SetHideSearchbox] = useState(true);

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };