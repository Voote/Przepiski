import React from 'react';
import labels from 'assets/labels';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepTime from 'components/molecules/ReciepsTime/ReciepTime';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty/ReciepDifficulty';
import { isPicture } from 'components/atoms/ReciepeImg/ReciepeImg';
import { ParametersSection, PersonIcon } from './Reciepe.styles';
import { MdPerson } from 'react-icons/md';

const Reciepe = ({
  name = 'Noname',
  category = 'Nocat',
  people,
  time = 1,
  lvl,
  pic,
  num,
  hashNum,
}) => (
  <div>
    <MainLabel>
      <span>
        <b>{category.toUpperCase()}</b>
      </span>
    </MainLabel>
    {isPicture(pic, num, hashNum)}
    <MainLabel>
      <span>{name}</span>
    </MainLabel>
    <ParametersSection>
      <PersonIcon>
        <span>{people || 7}</span>
        <MdPerson id="person" />
      </PersonIcon>
      <ReciepTime label={labels.parametersTime} time={time} />
      <ReciepDifficulty label={labels.parametersDificulty} score={lvl} />
    </ParametersSection>
  </div>
);

export default Reciepe;
