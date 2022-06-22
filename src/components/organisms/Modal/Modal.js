import React from 'react';
import { loremIpsum2p } from 'assets/loremIpsum';
import { StyledModal } from './Modal.styles';
import { VerticalButton } from 'components/atoms/Button/Button';

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
    <button onClick={handleClose}>{close}</button>
    <h2>{header}</h2>
    <div>{loremIpsum2p}</div>
    <VerticalButton>Instructions</VerticalButton>
  </StyledModal>
);

export default CustomModal;
