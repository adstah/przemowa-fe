import { Box, Divider, List, ListItemButton, styled } from '@mui/material';

export const StyledVideoResultAnalisys = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledVideoAndBrief = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledRowBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledColumnBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledBrief = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const StyledResultTimelineList = styled(List)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  width: 90vw;
  overflow-x: auto;
`;

export const StyledTimelineListItem = styled(ListItemButton)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 200px;
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(1)};

  :nth-child(1) {
    hr {
      width: 50%;
      align-self: flex-end;
    }
  }

  :nth-last-child(1) {
    hr {
      width: 50%;
      align-self: flex-start;
    }
  }
`;

export const StyledMiniDivider = styled(Divider)`
  margin: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDivider = styled(Divider)`
  height: 1px;
  border-width: 2px;
  width: 100%;
  max-width: 100vw;
`;
