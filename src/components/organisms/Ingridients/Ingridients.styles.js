import { StyledLabel } from 'components/molecules/MainLabel/MainLabel.styles';
import styled from 'styled-components';

export const IngridientsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
`;

export const StyledListItem = styled(StyledLabel)`
  text-align: left;
`;

export const StyledList = styled.ul`
  /* display: flex; */
  padding-left: 20vw;
  justify-content: center;
  text-align: left;
  li {
    text-align: left;
  }
`;
