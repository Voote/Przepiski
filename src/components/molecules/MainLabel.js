import React from 'react';
import { LabelSection } from 'views/Landing.styles';
import { StyledLabel, UnderLine } from './MainLabel.styles';

const MainLabel = ({ label }) => (
  <LabelSection>
    <StyledLabel>
      {label}
      <UnderLine />
    </StyledLabel>
  </LabelSection>
);

export default MainLabel;
