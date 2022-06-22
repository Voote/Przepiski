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
  padding-top: 0.3em;
  color: ${({ theme }) => theme.colors.black};
  background-color: red;
  width: 10rem;
  .Select__control {
    background-color: lightblue;
  }
  .Select__menu {
    background-color: gold;
  }
`;
