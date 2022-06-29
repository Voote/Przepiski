import React from 'react';
import { StyledImg } from './ReciepeImg.styles';

export const LoremSpace400300 = ({ hash }) => (
  <StyledImg
    src={`https://api.lorem.space/image/drink?w=400&h=300&hash=${hash}`}
    alt="lorem.space"
  />
);

export const Picsum400300 = ({ num }) => (
  <StyledImg src={`https://picsum.photos/200/300/?random&t=${num}`} alt="picsum" />
);

export const isPicture = (pic, num, hashNum = 777) =>
  pic ? (
    <StyledImg src={pic.url} alt="obrazek" />
  ) : (
    // <LoremSpace400300 hash={hashNum} />
    <Picsum400300 num={num} />
  );
