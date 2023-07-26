// types.ts
export interface ContextState {
    HideSearchBox: boolean;
    searchfield: string;
    socialHide: boolean;
    profileData: {
        username: string,
        imgUrl: string
        // others
    };
  }

  export interface NavStyles {
    layout: string;
    default: {
      adminNav: string;
      adminDiv: string;
      SearchBoxStyle: string;
      navStyle: string;
      mainDiv: string;
      innerDiv: string;
      linksDiv: string;
    };
    mobile: {
      NavbarStyle: string;
      defaultBtnStyle: string;
      selectedBtnStyle: string;
      iconStyle: string;
    };
    buttons: {
      adminBtn: string;
      defaultBtnStyle: string;
      selectedBtnStyle: string;
    };
  }

  export interface PageStyles {
    cms: {
      auth: {
        input: string;
      };
    };
    biography: {
      mainDiv: string;
      imgDiv: string;
      blurDataURL: string;
      textDiv: string;
      innerText: string;
      innerText2: string;
      bio: string;
    };
    portfolio: {
      cardListStyle: string;
      h1: string;
    };
    blog: {
      cardListStyle: string;
      h1: string;
    };
  }

  export interface MainContextType extends ContextState {
    navStyles: NavStyles;
    pageStyles: PageStyles;
    router: any; // Use the correct type for the router if available
    urlPath: string;
    SetHideSearchBox: (value: boolean) => void;
    SetSearchfield: (value: string) => void;
    SetSocialHide: (value: boolean) => void;
    SetProfileData: (data: Record<string, any>) => void;
  }