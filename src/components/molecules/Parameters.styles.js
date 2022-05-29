import styled from 'styled-components';

export const Parametr = styled.h3`
  padding: 0rem 1.5rem;
  font-weight: normal;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
`;

export const Level = styled(Parametr)`
  display: flex;
`;

export const PointsIcon = styled.div`
  font-size: 1.2em;
  padding: 0rem 0 0 0.5rem;
`;
