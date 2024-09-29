import { Box, styled } from '@mui/material';

export const StyledCanvas = styled('canvas')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const StyledContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  filter: blur(2px);
  z-index: -1;
  background: ${({ theme }) => theme.palette.background.default};
`;
