import React, { useContext } from 'react';
import { options } from 'assets/arrays';
import { MenuContext, ScrollContext } from 'hooks/userContext';
import { CustomReactSelect, Navbar } from './ReciepsMenu.styles';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';

const ReciepsMenu = ({ isOpen }) => {
  const { menuOption, setMenuOption } = useContext(MenuContext);
  const { isScrollMoved } = useContext(ScrollContext);

  return (
    <Navbar isModalOpen={isOpen} isScrolled={isScrollMoved}>
      <LabelSection>
        <MenuIcon />
        <CustomReactSelect
          classNamePrefix={'Select'}
          defaultValue={menuOption}
          onChange={setMenuOption}
          options={options}
          menuColor="red"
        />
      </LabelSection>
    </Navbar>
  );
};

export default ReciepsMenu;
