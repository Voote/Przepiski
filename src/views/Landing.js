import React from 'react';
import { recieps } from 'data/recieps';
import { loremIpsum10s } from 'assets/loremIpsum';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import Ingridients from 'components/organisms/Ingridients/Ingridients';
import Reciepes from 'components/organisms/Reciepes/Reciepes';
import { Content } from 'components/atoms/Content/Content';
import { Wrapper } from 'views/Landing.styles';

const Landing = () => (
  <Wrapper>
    <ReciepsMenu />
    {recieps.map((reciepe) => (
      <div key={reciepe.name}>
        <Reciepes
          name={reciepe.name}
          category={reciepe.type}
          time={reciepe.prepTime}
          lvl={reciepe.difficulty}
        />
        <Ingridients />
      </div>
    ))}
    <Content>{loremIpsum10s}</Content>
  </Wrapper>
);

export default Landing;
