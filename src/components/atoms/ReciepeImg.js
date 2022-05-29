import React from 'react';
import { StyledImg } from './ReciepeImg.styles';

const ReciepeImg = () => (
  <StyledImg
    src="https://api.lorem.space/image/drink?w=400&h=300"
    alt="lorem.space"
  />
);
/* <img src="https://picsum.photos/400/300" alt="picsum" /> */

export default ReciepeImg;
