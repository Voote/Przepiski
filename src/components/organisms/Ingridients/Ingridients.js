import React from 'react';
import labels from 'assets/labels';
import useModal from 'components/organisms/Modal/useModal';
import CustomModal from 'components/organisms/Modal/Modal';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepeIngridients from 'components/atoms/ReciepeIngridients/ReciepeIngridients';
// import { VerticalButton } from 'components/atoms/Button/Button';
import { Button } from 'components/atoms/Button/Button';
import {
  IngridientsWrapper,
  StyledList,
  StyledListItem,
} from './Ingridients.styles';

const Ingridients = ({ ingridients }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const isIngridients = Array.isArray(ingridients) ? (
    <StyledList>
      {ingridients.map((item) => (
        <li key={item}>
          <StyledListItem>{item}</StyledListItem>
        </li>
      ))}
    </StyledList>
  ) : (
    <ReciepeIngridients />
  );

  return (
    <IngridientsWrapper>
      <CustomModal isOpen={isOpen} handleClose={handleCloseModal} />
      <div onClick={handleOpenModal}>
        <MainLabel>{labels.ingridientsReciepe}</MainLabel>
        {/* <VerticalButton onClick={handleOpenModal}>{labels.clickMe}</VerticalButton> */}
        {isIngridients}
        <Button>{labels.clickMe}</Button>
      </div>
    </IngridientsWrapper>
  );
};

export default Ingridients;
