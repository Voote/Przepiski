import React from 'react';
import labels from 'assets/labels';
import useModal from 'components/organisms/Modal/useModal';
import CustomModal from 'components/organisms/Modal/Modal';
import MainLabel from 'components/molecules/MainLabel/MainLabel';
import IngridientsList from 'components/molecules/IngridientsList/IngridientsList';
import ReciepeIngridients from 'components/atoms/ReciepeIngridients/ReciepeIngridients';
import { Button } from 'components/atoms/Button/Button';
import { IngridientsWrapper } from 'components/organisms/Ingridients/Ingridients.styles';

const Ingridients = ({ item }) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const isIngridients = (item.ingridients.length && (
    <IngridientsList data={item.ingridients} />
  )) || <ReciepeIngridients />;

  return (
    <IngridientsWrapper>
      <CustomModal isOpen={isOpen} handleClose={handleCloseModal} reciepe={item} />
      <div onClick={handleOpenModal}>
        <MainLabel>{labels.ingridientsReciepe}</MainLabel>
        {isIngridients}
        <Button isBig>{labels.clickMe}</Button>
      </div>
    </IngridientsWrapper>
  );
};

export default Ingridients;
