import React, { useContext } from 'react';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import { options } from 'assets/arrays';
import { UserContext } from 'components/templates/MainTemplate';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import { CustomReactSelect, Wrapper } from './ReciepsMenu.styles';

const ReciepsMenu = () => {
  const data = useContext(UserContext);

  return (
    <Wrapper>
      <LabelSection>
        <CustomReactSelect
          classNamePrefix={'Select'}
          defaultValue={data.selectedOption}
          onChange={data.setSelectedOption}
          options={options}
        />
        <MenuIcon />
      </LabelSection>
    </Wrapper>
  );
};

export default ReciepsMenu;
