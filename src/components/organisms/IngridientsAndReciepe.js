import React, { useState } from 'react';
import { GiTiedScroll } from 'react-icons/gi';
import MainLabel from 'components/molecules/MainLabel';
import { ReciepImg, Wrapper } from './IngridientsAndReciepe.styles';
import Modal from 'react-modal';
import { loremIpsum2p } from 'assets/loremIpsum';

Modal.setAppElement('#root');

const IngridientsAndReciepe = ({ label }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Wrapper>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <div>{loremIpsum2p}</div>
      </Modal>
      <MainLabel label={label} />
      <ReciepImg>
        <GiTiedScroll />
      </ReciepImg>
    </Wrapper>
  );
};

export default IngridientsAndReciepe;
