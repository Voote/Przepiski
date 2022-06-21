import React from 'react';
import labels from 'assets/labels';
import useModal from 'components/organisms/Modal/useModal';
import CustomModal from 'components/organisms/Modal/Modal';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepeIngridients from 'components/atoms/ReciepeIngridients/ReciepeIngridients';
import { Button } from 'components/atoms/Button/Button';
import {
  IngridientsWrapper,
  StyledList,
  StyledListItem,
} from './Ingridients.styles';

const Ingridients = ({ ingridients, skladniczki }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const isIngridients = (skladniczki.length && (
    <StyledList>
      {skladniczki.map((item) => (
        <li key={item.nazwaSkladnika}>
          <StyledListItem>
            {item.ilosc}
            {item.unit} {item.nazwaSkladnika}
          </StyledListItem>
        </li>
      ))}
    </StyledList>
  )) ||
    (Array.isArray(ingridients) && (
      <StyledList>
        {ingridients.map((item) => (
          <li key={item}>
            <StyledListItem>{item}</StyledListItem>
          </li>
        ))}
      </StyledList>
    )) || <ReciepeIngridients />;

  return (
    <IngridientsWrapper>
      <CustomModal isOpen={isOpen} handleClose={handleCloseModal} />
      <div onClick={handleOpenModal}>
        <MainLabel>{labels.ingridientsReciepe}</MainLabel>
        {isIngridients}
        <Button>{labels.clickMe}</Button>
      </div>
    </IngridientsWrapper>
  );
};

export default Ingridients;
