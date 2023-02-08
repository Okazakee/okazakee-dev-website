import { createContext, useState } from 'react';
import { useRouter } from 'next/router';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [HideSearchBox, SetHideSearchBox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false); //not needed might be useful later
  const [socialHide, SetSocialHide] = useState(true);
  const router = useRouter();

  const urlPath = router.pathname;

  const navStyles = {
    default: {
      adminDiv:
        'flex items-center justify-between mx-auto px-10 py-4 rounded-2xl max-w-7xl',
      SearchBoxStyle: `min-w-fit w-full transition-all ease-in-out duration-300 ${
        HideSearchBox ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`,
      navStyle:
        'transition-all ease-in-out duration-[200ms] fixed top-0 left-0 right-0 z-50 backdrop-blur-sm',
      mainDiv:
        'flex items-center justify-between mx-auto px-2 py-4 rounded-2xl max-w-7xl',
      innerDiv: 'flex text-2xl mr-1',
      linksDiv: 'flex justify-end hover:ml-4 ml-3 mr-1',
    },
    mobile: {
      NavbarStyle: `fixed bottom-6 left-0 right-0 z-50 rounded-2xl text-sm text-center w-[90vw] h-[4rem] mx-auto pt-2.5 backdrop-blur-md backdrop-brightness-[.3] outline outline-1 outline-[#8c54fb]`,
      defaultBtnStyle: 'nav h-fit text-[#b4b4b4]',
      selectedBtnStyle: 'nav underline underline-offset-1 h-fit text-[#e8e8e8]',
      iconStyle: 'h-8 w-8 relative mx-auto pointer-events-none',
    },
    buttons: {
      defaultBtnStyle:
        'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
      selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
    },
  };

  return (
    <MainContext.Provider
      value={{
        navStyles,
        router,
        urlPath,
        HideSearchBox,
        SetHideSearchBox,
        searchfield,
        SetSearchfield,
        imageLoaded,
        setImageLoaded,
        socialHide,
        SetSocialHide,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
