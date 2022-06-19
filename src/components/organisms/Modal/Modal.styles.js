import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: justify;
  background-color: #777;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1.4rem;
  z-index: 1031;
`;
