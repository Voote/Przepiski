import React from 'react';
import { loremIpsum2p } from 'assets/loremIpsum';
import { StyledModal } from './Modal.styles';
import { Button, VerticalButton } from 'components/atoms/Button/Button';
import labels from 'assets/labels';

const close = 'close';
const header = 'Ingridients';

const CustomModal = ({ handleClose, isOpen, children }) => (
  <StyledModal
    appElement={document.getElementById('root')}
    isOpen={isOpen}
    onRequestClose={handleClose}
    contentLabel="Example Modal"
  >
    {children}
    <Button onClick={handleClose}>{close}</Button>
    <h2>{header}</h2>
    <div>{loremIpsum2p}</div>
    <VerticalButton>{labels.ButtonInstructions}</VerticalButton>
  </StyledModal>
);

export default CustomModal;
