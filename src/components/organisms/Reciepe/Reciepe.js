import React from 'react';
import labels from 'assets/labels';
import { LoremSpace400300 } from 'components/atoms/ReciepeImg/ReciepeImg';
import ReciepDifficulty from 'components/molecules/ReciepDifficulty/ReciepDifficulty';
import ReciepTime from 'components/molecules/ReciepsTime/ReciepTime';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import { LabelSection, TopChin } from 'views/Landing.styles';

const Reciepe = ({ name, category, time, lvl }) => {
  const wstawka =
    category.length > 1 ? (
      <MainLabel>
        {category[0]} | {category[1]}
      </MainLabel>
    ) : (
      <MainLabel>{category}</MainLabel>
    );
  return (
    <TopChin>
      {wstawka}
      <LoremSpace400300 />
      <MainLabel>{name}</MainLabel>
      <LabelSection>
        <ReciepTime label={labels.parametersTime} time={time} />
        <ReciepDifficulty label={labels.parametersDificulty} score={lvl} />
      </LabelSection>
    </TopChin>
  );
};

export default Reciepe;
