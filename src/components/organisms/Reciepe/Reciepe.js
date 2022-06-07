import React from 'react';
import labels from 'assets/labels';
import { LoremSpace400300 } from 'components/atoms/ReciepeImg/ReciepeImg';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty/ReciepDifficulty';
import ReciepTime from 'components/molecules/ReciepsTime/ReciepTime';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import { Parametr } from 'components/atoms/Parametr/Parametr';
import { ParametersSection } from './Reciepe.styles';

const Reciepe = ({ name, category, time, lvl, hashNum }) => (
  <div>
    <MainLabel>
      <span>
        <b>{category}</b>
      </span>
    </MainLabel>
    <LoremSpace400300 hash={hashNum} />
    <MainLabel>
      <span>{name}</span>
    </MainLabel>
    <ParametersSection>
      <Parametr>4 P</Parametr>
      <ReciepTime label={labels.parametersTime} time={time} />
      <ReciepDifficulty label={labels.parametersDificulty} score={lvl} />
    </ParametersSection>
  </div>
);

export default Reciepe;
