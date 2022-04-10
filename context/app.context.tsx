import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interfaces";
import { TopLevelCategory } from "../interfaces/page.interface";

export interface IAppContex {
  menu: MenuItem[];
  firsCategory?: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContex>({
  menu: [],
  firsCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firsCategory,
  children,
}: PropsWithChildren<IAppContex>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firsCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
