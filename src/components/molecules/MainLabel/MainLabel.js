import React from 'react';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import { StyledLabel, UnderLine } from './MainLabel.styles';

const MainLabel = ({ children }) => (
  <LabelSection>
    <StyledLabel>
      <UnderLine>{children}</UnderLine>
    </StyledLabel>
  </LabelSection>
);

export default MainLabel;
