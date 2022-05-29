import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const LabelSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const UnderLine = styled.div`
  border-bottom: 3px solid black;
`;
