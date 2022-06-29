import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: ${({ isScrolled }) => (isScrolled ? '0rem' : '3rem')};
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const BorderChin = styled.div`
  border-bottom: 1vh solid ${({ theme }) => theme.colors.green};
`;
