import { List, styled } from '@mui/material';
import {
  styledCssAbsoluteCentered,
  styledCssFlexVerticalCentered,
} from '../../../css/styledCss';

export const StyledVideoUploadForm = styled('form')`
  ${styledCssFlexVerticalCentered}
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};

  section {
    position: relative;
    text-align: center !important;
    text-justify: center;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    margin-top: ${({ theme }) => theme.spacing(3)};
    background: ${({ theme }) => theme.palette.grey[900]};
    border-radius: ${({ theme }) => theme.spacing(2)};
    box-shadow: inset ${({ theme }) => theme.palette.primary.dark} -2px 1px 20px
      3px;

    min-height: 150px;
    height: min-content;
    animation: pulseShadow 3s infinite;

    p {
      ${styledCssAbsoluteCentered};
    }
  }

  button {
    min-width: 400px;
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: inset rgba(66, 165, 245, 0.7) -2px 1px 10px 3px;
    }
    50% {
      box-shadow: inset rgba(66, 165, 245, 0.7) -2px 1px 20px 5px;
    }
    100% {
      box-shadow: inset rgba(66, 165, 245, 0.7) -2px 1px 10px 3px;
    }
  }
`;

export const StyledVideoInput = styled('input')`
  width: min-content;
`;

export const StyledUploadedList = styled(List)`
  span {
    padding-left: ${({ theme }) => theme.spacing(1)};
  }
`;
