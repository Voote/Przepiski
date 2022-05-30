import React from 'react';
import labels from 'assets/labels';
import { loremIpsum10s } from 'assets/loremIpsum';
import IngridientsAndReciepe from 'components/organisms/IngridientsAndReciepe';
import ReciepsMenu from 'components/molecules/ReciepsMenu';
import ReciepTime from 'components/molecules/ReciepTime';
import MainLabel from 'components/molecules/MainLabel';
import ReciepeImg from 'components/atoms/ReciepeImg';
import { LabelSection } from 'views/Landing.styles';
import { Content } from 'components/atoms/Content';
import { Wrapper } from './Landing.styles';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty';

const Landing = () => (
  <Wrapper>
    <ReciepsMenu />
    <MainLabel label={labels.categroryKoktajle} />
    <ReciepeImg />
    <MainLabel label={labels.nameKoktajle} />
    <LabelSection>
      <ReciepTime label={labels.parametersTime} />
      <ReciepDifficulty label={labels.parametersDificulty} score={2} />
    </LabelSection>

    <IngridientsAndReciepe label={labels.ingridientsReciepe} />
    <Content>{loremIpsum10s}</Content>
  </Wrapper>
);

export default Landing;
