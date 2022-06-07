import React from 'react';
import { difficultyIcons } from 'components/atoms/difficultyIcons';
import { Level, PointsIcon } from './ReciepDifficulty.styles';

const ReciepDifficulty = ({ label, score }) => (
  <Level>
    {label}
    <PointsIcon>{score ? difficultyIcons[score] : difficultyIcons[0]}</PointsIcon>
  </Level>
);

export default ReciepDifficulty;
