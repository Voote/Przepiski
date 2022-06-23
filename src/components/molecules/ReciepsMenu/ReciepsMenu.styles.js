import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
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

export const CustomReactSelect = styled(Select)`
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: transparent;
  width: 12.5rem;
  p {
    color: red;
  }
  .Select__control {
    background-color: transparent;
    border: none;
  }
  .Select__menu {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
  .Select__indicator-separator {
    background-color: inherit;
  }
`;
