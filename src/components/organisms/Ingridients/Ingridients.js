import React from 'react';
import labels from 'assets/labels';
import useModal from 'components/organisms/Modal/useModal';
import CustomModal from 'components/organisms/Modal/Modal';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import ReciepeIngridients from 'components/atoms/ReciepeIngridients/ReciepeIngridients';
import { Button } from 'components/atoms/Button/Button';
import { IngridientsWrapper } from 'components/organisms/Ingridients/Ingridients.styles';
import IngridientList from 'components/molecules/IngridientsList/IngridientsList';

const Ingridients = ({ ingridients }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const isIngridients = (ingridients.length && (
    <IngridientList data={ingridients} />
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
