import React from 'react';
import { StyledImg } from './ReciepeImg.styles';

export const LoremSpace400300 = () => (
  <StyledImg
    src="https://api.lorem.space/image/drink?w=400&h=300"
    alt="lorem.space"
  />
);

export const Picsum400300 = () => (
  <StyledImg src="https://picsum.photos/400/300" alt="picsum" />
);
