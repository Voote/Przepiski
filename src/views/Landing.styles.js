import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const LabelSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Parametr = styled.h3`
  padding: 0rem 1.5rem;
  font-weight: normal;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
`;