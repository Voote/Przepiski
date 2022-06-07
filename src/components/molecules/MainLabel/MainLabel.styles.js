import styled from 'styled-components';

export const StyledLabel = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;
  span {
    padding: 0 1vw;
  }
`;

export const UnderLine = styled.div`
  span {
    border-bottom: 2px solid black;
    padding-bottom: 0.2rem;
  }
`;
