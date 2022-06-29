import React, { useContext } from 'react';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import { options } from 'assets/arrays';
import { UserContext } from 'hooks/userContext';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import { CustomReactSelect, Wrapper } from './ReciepsMenu.styles';

const ReciepsMenu = () => {
  const data = useContext(UserContext);

  return (
    <Wrapper>
      <LabelSection>
        <MenuIcon />
        <CustomReactSelect
          classNamePrefix={'Select'}
          defaultValue={data.selectedOption}
          onChange={data.setSelectedOption}
          options={options}
          menuColor="red"
        />
      </LabelSection>
    </Wrapper>
  );
};

export default ReciepsMenu;
