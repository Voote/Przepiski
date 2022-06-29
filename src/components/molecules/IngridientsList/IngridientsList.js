import React from 'react';
import {
  StyledList,
  StyledListItem,
} from 'components/molecules/IngridientsList/IngridientsList.styles';

const IngridienstList = ({ data }) => (
  <StyledList>
    {data.map((item) => (
      <li key={item.nazwaSkladnika}>
        <StyledListItem>
          {item.ilosc}
          {item.unit} {item.nazwaSkladnika}
        </StyledListItem>
      </li>
    ))}
  </StyledList>
);

export default IngridienstList;
