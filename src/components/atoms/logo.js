import styled from 'styled-components';

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  content: url('./IMG/Przepiski.png');
`;
