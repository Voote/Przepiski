import React from 'react';
import Modal from 'react-modal';
import { loremIpsum2p } from 'assets/loremIpsum';

const CustomModal = ({ handleClose, isOpen, children }) => (
  <Modal
    appElement={document.getElementById('root')}
    isOpen={isOpen}
    onRequestClose={handleClose}
    contentLabel="Example Modal"
  >
    {children}
    <button onClick={handleClose}>close</button>
    <h2>I am a modal</h2>
    <div>{loremIpsum2p}</div>
  </Modal>
);

export default CustomModal;
