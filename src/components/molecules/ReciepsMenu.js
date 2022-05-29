import React from 'react';
import labels from 'assets/labels';
import { LabelSection } from 'components/templates/MainTemplate.styles';
import MenuIcon from 'components/atoms/MenuIcon';
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
