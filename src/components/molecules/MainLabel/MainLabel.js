import React from 'react';
import { LabelSection } from 'views/Landing.styles';
import { StyledLabel, UnderLine } from './MainLabel.styles';

const MainLabel = ({ children }) => (
  <LabelSection>
    <StyledLabel>
      {children}
      <UnderLine />
    </StyledLabel>
  </LabelSection>
);

export default MainLabel;
