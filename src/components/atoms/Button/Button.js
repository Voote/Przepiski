import styled from 'styled-components';

export const Button = styled.button`
  display: table;
  margin: ${({ isBig }) => (isBig ? '15px auto' : 'auto')};
  padding: ${({ isBig }) => (isBig ? '7px 20px' : '2px 10px')};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.l : fontSize.s};
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const VerticalButton = styled(Button)`
  position: fixed;
  padding: 1.25vw 4vw;
  transform: rotate(-90deg);
  right: 4vw;
  top: 25vh;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
  transform-origin: right;
  opacity: 80%;
  z-index: 1031;
`;
