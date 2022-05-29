import React from 'react';
import { difficultyIcons } from 'components/atoms/difficultyIcons';
import { Level, PointsIcon } from './ReciepDifficulty.styles';

const isScore = (num) => (num ? difficultyIcons[num] : difficultyIcons[0]);

const ReciepDifficulty = ({ label, score }) => (
  <Level>
    {label}
    <PointsIcon>{isScore(score)}</PointsIcon>
  </Level>
);

export default ReciepDifficulty;
