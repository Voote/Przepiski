import React from 'react';
import styled from 'styled-components';
import { recieps } from 'data/recieps';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import { Picsum400300 } from 'components/atoms/ReciepeImg/ReciepeImg';

const SingleReciepe = () => (
  <div>
    {recieps.map((item) => (
      <div key={item.name}>
        <MainLabel>{item.name}</MainLabel>
        <Picsum400300 />
        <MainLabel>{item.type}</MainLabel>
      </div>
    ))}
  </div>
);

export default SingleReciepe;
