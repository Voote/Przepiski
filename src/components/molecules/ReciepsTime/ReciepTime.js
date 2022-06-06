import React from 'react';
import { Parametr } from 'components/atoms/Parametr/Parametr';

const numerki = [30, 60, 90, 120, 140];
// const randomNum = numerki[4];
// const cookingTime =
//   randomNum < 60 ? `${randomNum}min` : `${Math.round((randomNum / 60) * 10) / 10}h`;

const ReciepTime = ({ label, time }) => {
  const cookingTime =
    time < 60 ? `${time}min` : `${Math.round((time / 60) * 10) / 10}h`;
  return (
    <Parametr>
      {label}
      {cookingTime}
    </Parametr>
  );
};

export default ReciepTime;
