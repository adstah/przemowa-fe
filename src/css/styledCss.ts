import { css } from '@mui/material';

export const styledCssFlexVerticalCentered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const styledCssFlexAllCentered = css`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const styledCssAbsoluteCentered = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
`;
