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

  const posts = [
    {
      _id: 1,
      title: 'This Website',
      data: "",
      img: 'https://github.com/Okazakee/Global-Assets/blob/main/VSCodium_SwXGpHbElE.png?raw=true'
    },
    {
      _id: 2,
      title: 'Calypso-Pi Project',
      data: 'https://raw.githubusercontent.com/Okazakee/Fedora-WSL-Installer/main/README.md',
      img: 'https://github.com/Okazakee/Global-Assets/blob/main/logo-dev.png?raw=true'
    },
    {
      _id: 3,
      title: 'Fedora WSL Installer',
      data: 'https://raw.githubusercontent.com/Okazakee/Fedora-WSL-Installer/main/README.md',
      img: 'https://github.com/Okazakee/Global-Assets/blob/main/wt.png?raw=true'
    },
    ];

  const SelectionHandler = (e) => {
    const button = e.target;
    const buttons = Array.from(document.getElementsByClassName('nav'));
    buttons.map(button => button.className = navBtnStyles.defaultBtnStyle);
    button.className = navBtnStyles.selectedBtnStyle;
    }

    return (
      <MainContext.Provider value={{ HideSearchbox, SetHideSearchbox, searchfield, SetSearchfield, currentPage, SetCurrentPage, SelectionHandler, navBtnStyles, posts }}>
          {children}
      </MainContext.Provider>
  )
}

export { MainContext, MainProvider };