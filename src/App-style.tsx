import { css, keyframes } from 'emotion';

export const container = css`
  text-align: center;
`;

export const header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  font-size: calc(10px + 2vmin);
  background-color: #282c34;
`;

export const link = css`
  color: #61dafb;
`;

export const logoSpin = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
`;

export const logo = css`
  height: 40vmin;
  margin-bottom: 1rem;
  animation: ${logoSpin} infinite 1.6s ease-in-out alternate;
  pointer-events: none;
`;
