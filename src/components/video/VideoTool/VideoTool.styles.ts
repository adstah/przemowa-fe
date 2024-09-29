import { Box, styled } from '@mui/material';
import {
  styledCssFlexAllCentered,
  styledCssFlexVerticalCentered,
} from '../../../css/styledCss';

export const StyledVideoTool = styled(Box)`
  ${styledCssFlexAllCentered};
  overflow-y: auto;
`;

export const StyledVideoToolWrapper = styled(Box)`
  ${styledCssFlexVerticalCentered}
  gap: ${({ theme }) => theme.spacing(2)}
`;
