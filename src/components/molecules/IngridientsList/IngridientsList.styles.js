import styled from 'styled-components';
import { StyledLabel } from 'components/molecules/MainLabel/MainLabel.styles';

export const StyledListItem = styled(StyledLabel)`
  text-align: left;
`;

export const StyledList = styled.ul`
  padding-left: 20vw;
  justify-content: center;
  text-align: left;
  li {
    text-align: left;
  }
`;
