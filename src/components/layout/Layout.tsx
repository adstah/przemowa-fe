import { Box, Typography } from '@mui/material';
import { StyledFooter, StyledHeader, StyledLayout } from './Layout.styles';
import { ParticledBackgroundNodes } from '../ui/ParticledBackground/ParticledBackground';

interface LayoutI {
  children: React.ReactElement;
}

export const Layout = ({ children }: LayoutI) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Typography fontFamily="Arial" variant="h4">
          <i>PrzeMowa</i>
        </Typography>
      </StyledHeader>
      <Box component="main">{children}</Box>
      <StyledFooter>-</StyledFooter>
      <ParticledBackgroundNodes />
    </StyledLayout>
  );
};
