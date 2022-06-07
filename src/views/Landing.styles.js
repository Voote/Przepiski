import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const BorderChin = styled.div`
  border-bottom: 1vh solid ${({ theme }) => theme.colors.green};
`;
