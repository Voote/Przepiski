import React, { useContext } from 'react';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import { options } from 'assets/arrays';
import { MenuContext, ScrollContext } from 'hooks/userContext';
import { CustomReactSelect, Wrapper } from './ReciepsMenu.styles';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';

const ReciepsMenu = ({ isOpen }) => {
  const { menuOption, setMenuOption } = useContext(MenuContext);
  const { isScrollMoved } = useContext(ScrollContext);

  return (
    <Wrapper isModalOpen={isOpen} isScrolled={isScrollMoved}>
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
    </Wrapper>
  );
};

export default ReciepsMenu;
