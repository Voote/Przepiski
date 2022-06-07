import React from 'react';
import labels from 'assets/labels';
import useModal from 'components/organisms/Modal/useModal';
import CustomModal from 'components/organisms/Modal/Modal';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepeIngridients from 'components/atoms/ReciepeIngridients/ReciepeIngridients';
import { VerticalButton } from 'components/atoms/Button/Button';
import { IngridientsWrapper } from './Ingridients.styles';

const Ingridients = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <IngridientsWrapper>
      <CustomModal isOpen={isOpen} handleClose={handleCloseModal} />
      <MainLabel>{labels.ingridientsReciepe}</MainLabel>
      <VerticalButton onClick={handleOpenModal}>{labels.clickMe}</VerticalButton>
      <ReciepeIngridients />
    </IngridientsWrapper>
  );
};

export default Ingridients;
