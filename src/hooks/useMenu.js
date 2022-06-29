import React, { useState } from 'react';
import { options } from 'assets/arrays';
import { MenuContext } from './userContext';

export const MenuProvider = ({ children }) => {
  const [menuOption, setMenuOption] = useState(options[0]);

  return (
    <MenuContext.Provider value={{ menuOption, setMenuOption }}>
      {children}
    </MenuContext.Provider>
  );
};
