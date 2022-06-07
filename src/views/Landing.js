import React from 'react';
// import { recieps } from 'data/recieps';
import { loremIpsum2p } from 'assets/loremIpsum';
import { BorderChin, Wrapper } from 'views/Landing.styles';
import { Content } from 'components/atoms/Content/Content';
import Reciepe from 'components/organisms/Reciepe/Reciepe';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import Ingridients from 'components/organisms/Ingridients/Ingridients';

const numGenerator = (max) => Math.floor(Math.random() * max);
let number = numGenerator(100);

const Landing = ({ data }) => (
  <Wrapper>
    {console.log(data)}
    <ReciepsMenu />
    {data.map((reciepe) => {
      number = number * numGenerator(20);
      const hexNumber = number.toString(16);
      return (
        <BorderChin key={reciepe.name}>
          <Reciepe
            name={reciepe.name}
            category={reciepe.category}
            time={reciepe.time}
            lvl={reciepe.level}
            hashNum={hexNumber}
          />
          <Ingridients />
        </BorderChin>
      );
    })}
    <Content>{loremIpsum2p}</Content>
  </Wrapper>
);

export default Landing;
