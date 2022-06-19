import styled from 'styled-components';
import { LabelSection } from 'components/atoms/LabelSection/LabelSection';
import { Parametr } from 'components/atoms/Parametr/Parametr';

export const ParametersSection = styled(LabelSection)`
  justify-content: space-around;
`;

export const PersonIcon = styled(Parametr)`
  display: flex;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  #person {
    margin-block-start: 0.05rem;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
