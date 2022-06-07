import React from 'react';
import { recieps } from 'data/recieps';
import { loremIpsum10s } from 'assets/loremIpsum';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import Ingridients from 'components/organisms/Ingridients/Ingridients';
import Reciepe from 'components/organisms/Reciepe/Reciepe';
import { Content } from 'components/atoms/Content/Content';
import { BorderChin, Wrapper } from 'views/Landing.styles';

const numGenerator = (max) => Math.floor(Math.random() * max);
let number = numGenerator(100);

const Landing = () => (
  <Wrapper>
    <ReciepsMenu />
    {recieps.map((reciepe) => {
      number = number * numGenerator(20);
      const hexNumber = number.toString(16);
      return (
        <BorderChin key={reciepe.name}>
          <Reciepe
            name={reciepe.name}
            category={reciepe.type}
            time={reciepe.prepTime}
            lvl={reciepe.difficulty}
            hashNum={hexNumber}
          />
          <Ingridients />
        </BorderChin>
      );
    })}
    <Content>{loremIpsum10s}</Content>
  </Wrapper>
);

export default Landing;
