import React from 'react';
import { StyledLabel } from './MainLabel.styles';
import { LabelSection, UnderLine } from 'components/templates/MainTemplate.styles';

const MainLabel = ({ label }) => (
  <LabelSection>
    <StyledLabel>
      {label}
      <UnderLine />
    </StyledLabel>
  </LabelSection>
);

export default MainLabel;
