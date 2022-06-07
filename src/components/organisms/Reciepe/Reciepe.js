import React from 'react';
import labels from 'assets/labels';
import { LoremSpace400300 } from 'components/atoms/ReciepeImg/ReciepeImg';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty/ReciepDifficulty';
import ReciepTime from 'components/molecules/ReciepsTime/ReciepTime';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import { LabelSection } from 'views/Landing.styles';

const Reciepe = ({ name, category, time, lvl, hashNum }) => {
  const isCategoryArray =
    category.length > 1 ? (
      <MainLabel>
        {category[0]} | {category[1]}
      </MainLabel>
    ) : (
      <MainLabel>{category}</MainLabel>
    );
  return (
    <div>
      {isCategoryArray}
      <LoremSpace400300 hash={hashNum} />
      <MainLabel>{name}</MainLabel>
      <LabelSection>
        <ReciepTime label={labels.parametersTime} time={time} />
        <ReciepDifficulty label={labels.parametersDificulty} score={lvl} />
      </LabelSection>
    </div>
  );
};

export default Reciepe;
