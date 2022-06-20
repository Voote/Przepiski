import styled from 'styled-components';

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
  position: fixed;
  padding: 0.5vw 4vw;
  transform: rotate(-90deg);
  right: 4vw;
  top: 25vh;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
  transform-origin: right;
  opacity: 70%;
  z-index: 1031;
  /* :hover {
    animation: 3s ease 0s normal forwards 1 fadein;
    @keyframes fadein {
      0% {
        opacity: 1;
      }
      66% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  } */
`;
