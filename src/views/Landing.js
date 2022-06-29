import React, { useContext } from 'react';
import { loremIpsum2p } from 'assets/loremIpsum';
import { ScrollContext } from 'hooks/userContext';
import { BorderChin, Wrapper } from 'views/Landing.styles';
import { Content } from 'components/atoms/Content/Content';
import Reciepe from 'components/organisms/Reciepe/Reciepe';
import Ingridients from 'components/organisms/Ingridients/Ingridients';

const numGenerator = (max) => Math.floor(Math.random() * max);
let number = numGenerator(100);

const Landing = ({ data }) => {
  const { isScrollMoved } = useContext(ScrollContext);
  console.log(isScrollMoved);
  return (
    <Wrapper isScrolled={isScrollMoved}>
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
              people={reciepe.people}
              pic={reciepe.picture}
              hashNum={hexNumber}
              num={number}
            />
            <Ingridients item={reciepe} />
          </BorderChin>
        );
      })}
      <Content>{loremIpsum2p}</Content>
    </Wrapper>
  );
};

export default Landing;
