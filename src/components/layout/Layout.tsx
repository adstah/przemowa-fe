import { Typography } from '@mui/material';
import {
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMain,
} from './Layout.styles';
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
        <Typography variant="h6">{'=>'} analiza mówców</Typography>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>-</StyledFooter>
      <ParticledBackgroundNodes />
    </StyledLayout>
  );
};
