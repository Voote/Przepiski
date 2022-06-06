import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.1rem;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
`;
