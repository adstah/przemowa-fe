import { AppBar, Box, styled } from '@mui/material';

export const StyledLayout = styled(Box)`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-width: 100vw;
  min-height: 100vh;
  overflow: auto;
`;

export const StyledHeader = styled(AppBar)`
  position: relative;
  padding: ${({ theme }) => theme.spacing(2)};
  opacity: 0.7;
`;

export const StyledFooter = styled('footer')`
  color: ${({ theme }) => theme.palette.primary.dark};
  width: 100%;
  background: ${({ theme }) => theme.palette.grey[900]};
`;
