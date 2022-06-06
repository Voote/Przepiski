import React from 'react';
import styled from 'styled-components';

const scrollPos = () => {
  const offsetY = window.pageYOffset;
  console.log({ offsetY });
  return offsetY;
};

export const Button = styled.button`
  display: table;
  margin: 15px auto;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const VerticalButton = styled(Button)`
  position: absolute;
  padding: 2vw 4vw;
  transform: rotate(-90deg);
  right: 5vw;
  top: 1vh;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
  transform-origin: right;
`;

export const TemporaryButton = ({ text }) => (
  <VerticalButton onClick={() => scrollPos()}>{text}</VerticalButton>
);
