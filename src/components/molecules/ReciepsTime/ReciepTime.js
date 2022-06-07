import React from 'react';
import { Parametr } from 'components/atoms/Parametr/Parametr';

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
