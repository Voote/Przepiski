import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const LabelSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngridientsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
`;

export const BorderChin = styled.div`
  border-bottom: 1vh solid ${({ theme }) => theme.colors.darkGreen};
`;
