import React from 'react';
import { loremIpsum2p } from 'assets/loremIpsum';
import { BorderChin, Wrapper } from 'views/Landing.styles';
import { Content } from 'components/atoms/Content/Content';
import Reciepe from 'components/organisms/Reciepe/Reciepe';
import Ingridients from 'components/organisms/Ingridients/Ingridients';

const numGenerator = (max) => Math.floor(Math.random() * max);
let number = numGenerator(100);

const Landing = ({ data }) => (
  <Wrapper>
    {console.log(data)}
    {data.map((reciepe) => {
      number = number * numGenerator(20);
      const hexNumber = number.toString(16) + 1;
      return (
        <BorderChin key={reciepe.name}>
          <Reciepe
            name={reciepe.name}
            category={reciepe.category}
            time={reciepe.time}
            lvl={reciepe.level}
            pic={reciepe.picture}
            hashNum={hexNumber}
          />
          <Ingridients ingridients={reciepe.ingridients} />
        </BorderChin>
      );
    })}
    <Content>{loremIpsum2p}</Content>
  </Wrapper>
);

export default Landing;
