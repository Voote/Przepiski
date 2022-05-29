import React from 'react';
import styled from 'styled-components';
import { GiTiedScroll } from 'react-icons/gi';
import MainLabel from 'components/molecules/MainLabel';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

const ReciepWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10rem;
  padding-bottom: 2rem;
`;

const IngridientsReciepe = ({ label }) => (
  <Wrapper>
    <MainLabel label={label} />
    <ReciepWrapper>
      <GiTiedScroll />
    </ReciepWrapper>
  </Wrapper>
);

export default IngridientsReciepe;
