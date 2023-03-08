import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const MainContext = createContext();

// make dynamic head element served by this context, correctly setup states as arrays as [value, servalue]
// build seo(?) stuff like the url preview in chats/forums
// check that only global stuff is present here, otherwise create appropriate hook in appropriate component
// EG: searchbar is only needed in navbar component, remove it from here asap.

const MainProvider = ({ children }) => {
  // GLOBAL STATES
  const [HideSearchBox, SetHideSearchBox] = useState(true);
  const [searchfield, SetSearchfield] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false); //not needed might be useful later
  const [socialHide, SetSocialHide] = useState(true);
  const [adminMode, SetAdminMode] = useState(false);

  // GLOBAL ROUTER CONTROLLER
  const router = useRouter();
  const urlPath = router.pathname;

  // TAILWIND STYLES
  const navStyles = {
    layout:
      "font-['White_Rabbit_Regular'] bg-[#090909] text-[#e8e8e8] transition-all ease-in-out duration-[400ms] scroll-smooth mx-auto min-h-screen w-full flex justify-center pt-5 sm:pt-24",
    default: {
      adminNav: 'fixed top-0 left-3 right-3 z-50',
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
      adminBtn:
        'nav hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
      defaultBtnStyle:
        'nav mx-3 hover:underline hover:underline-offset-1 hover:text-[#8c54fb] transition-all',
      selectedBtnStyle: 'nav mx-3 underline underline-offset-1 text-[#8c54fb]',
    },
  };

  const pageStyles = {
    cms: {
      auth: {
        input: 'text-center rounded-3xl',
      },
      asd: '',
    },
    biography: {
      mainDiv: 'flex items-center mb-[10vh] lg:mt-[10vh]',
      imgDiv: 'h-48 w-48 relative mx-auto',
      textDiv: 'flex justify-center items-center my-4',
      innerText: 'mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      innerText2: 'text-[#8c54fb] ml-4 text-4xl sm:text-5xl lg:text-6xl',
      bio: 'mx-6 lg:mx-24 md:mx-12 sm:mx-10 max-w-6xl text-justify sm:text-xl lg:text-[1.50rem] text-lg',
    },
    portfolio: {
      cardListStyle:
        'mx-2 grid justify-items-center md:grid-cols-2 lg:grid-cols-3',
      h1: 'text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl pb-2 sm:pb-5 cursor-default mx-2',
    },
    blog: {
      cardListStyle:
        'mx-2 grid justify-items-center md:grid-cols-2 lg:grid-cols-3',
      h1: 'text-center sm:text-2xl md:text-2xl lg:text-[1.75rem] text-2xl pb-2 sm:pb-5 cursor-default mx-2',
    },
  };

  return (
    <MainContext.Provider
      value={{
        adminMode,
        navStyles,
        pageStyles,
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
