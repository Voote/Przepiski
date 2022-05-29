import React from 'react';
import styled from 'styled-components';
import labels from 'assets/labels';
import { GiTiedScroll } from 'react-icons/gi';
import { loremIpsum10s } from 'assets/loremIpsum';
import MainLabel from 'components/molecules/MainLabel';
import ReciepsMenu from 'components/molecules/ReciepsMenu';
import Parameters from 'components/molecules/Parameters';
import ReciepeImg from 'components/atoms/ReciepeImg';
import { Wrapper } from './MainTemplate.styles';
import IngridientsReciepe from 'components/molecules/IngridientsReciepe';

const Content = styled.div`
  padding: 0rem 1.4em;
  text-align: justify;
`;

const ReciepWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 10rem;
`;

const MainTemplate = () => (
  <Wrapper>
    <ReciepsMenu />
    <MainLabel label={labels.categroryKoktajle} />
    <ReciepeImg />
    <MainLabel label={labels.nameKoktajle} />
    <Parameters score={2} />

    <IngridientsReciepe label={labels.ingridientsReciepe} />

    <Content>
      <p>{loremIpsum10s}</p>
    </Content>
  </Wrapper>
);

export default MainTemplate;
