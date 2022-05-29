import React from 'react';
import { Level, Parametr, PointsIcon } from './Parameters.styles';
import { LabelSection } from 'components/templates/MainTemplate.styles';
import labels from 'assets/labels';
import { difficultyLevel } from 'components/atoms/difficultyLevel';

const numerki = [30, 60, 90, 120, 140];
const randomNum = numerki[4];

const cookingTime =
  randomNum < 60 ? `${randomNum}min` : `${Math.round((randomNum / 60) * 10) / 10}h`;

const Parameters = ({ score }) => (
  <LabelSection>
    <Parametr>
      {labels.parametersTime}
      {cookingTime}
    </Parametr>
    <Level>
      {labels.parametersDificulty}
      <PointsIcon>{score ? difficultyLevel[score] : difficultyLevel[0]}</PointsIcon>
    </Level>
  </LabelSection>
);

export default Parameters;
