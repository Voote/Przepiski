import React from 'react';
import labels from 'assets/labels';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepTime from 'components/molecules/ReciepsTime/ReciepTime';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty/ReciepDifficulty';
import { LoremSpace400300 } from 'components/atoms/ReciepeImg/ReciepeImg';
import { ParametersSection, PersonIcon } from './Reciepe.styles';
import { MdPerson } from 'react-icons/md';
import { StyledImg } from 'components/atoms/ReciepeImg/ReciepeImg.styles';

const Reciepe = ({
  name = 'Noname',
  category = 'Nocat',
  people = 2,
  time = 1,
  lvl,
  pic,
  hashNum,
}) => (
  <div>
    <MainLabel>
      <span>
        <b>{category.toUpperCase()}</b>
      </span>
    </MainLabel>
    {pic ? (
      <StyledImg src={pic.url} alt="obrazek" />
    ) : (
      <LoremSpace400300 hash={hashNum} />
    )}
    <MainLabel>
      <span>{name}</span>
    </MainLabel>
    <ParametersSection>
      <PersonIcon>
        <span>{people}</span>
        <MdPerson id="person" />
      </PersonIcon>
      <ReciepTime label={labels.parametersTime} time={time} />
      <ReciepDifficulty label={labels.parametersDificulty} score={lvl} />
    </ParametersSection>
  </div>
);

export default Reciepe;
