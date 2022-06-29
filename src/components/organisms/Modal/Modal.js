import React from 'react';
import labels from 'assets/labels';
import IngridientsList from 'components/molecules/IngridientsList/IngridientsList';
import { MediumLabel, StyledModal } from 'components/organisms/Modal/Modal.styles';
import { Button, VerticalButton } from 'components/atoms/Button/Button';
import { isPicture } from 'components/atoms/ReciepeImg/ReciepeImg';
import { bigFirstLetter } from 'helpers/helpers';
import { loremIpsum2p } from 'assets/loremIpsum';

const CustomModal = ({ handleClose, isOpen, children, reciepe }) => (
  <StyledModal
    appElement={document.getElementById('root')}
    isOpen={isOpen}
    onRequestClose={handleClose}
    contentLabel="Example Modal"
  >
    {children}
    <Button onClick={handleClose}>{labels.buttonLabelClose}</Button>
    {isPicture(reciepe.picture)}
    <h2>{bigFirstLetter(reciepe.name)}</h2>
    <div>
      <MediumLabel>
        {bigFirstLetter(reciepe.category)} for {reciepe.people || 7} man
      </MediumLabel>
    </div>
    <IngridientsList data={reciepe.ingridients} />
    <p>{loremIpsum2p}</p>
    <VerticalButton>{labels.buttonInstructions}</VerticalButton>
  </StyledModal>
);

export default CustomModal;
