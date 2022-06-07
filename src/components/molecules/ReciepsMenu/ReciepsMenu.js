import React from 'react';
import labels from 'assets/labels';
import MenuIcon from 'components/atoms/MenuIcon/MenuIcon';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import { Wrapper } from './ReciepsMenu.styles';

const ReciepsMenu = () => (
  <Wrapper>
    <LabelSection>
      <h2>{labels.menu}</h2>
      <MenuIcon />
    </LabelSection>
  </Wrapper>
);

export default ReciepsMenu;
