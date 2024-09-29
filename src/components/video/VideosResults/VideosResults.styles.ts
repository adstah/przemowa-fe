import { AccordionSummary, Box, styled } from '@mui/material';

export const StyledVideosResults = styled(Box)`
  height: 100%;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTimelines = styled(Box)``;

export const StyledSummary = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #5b5f65a3;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.palette.grey[200]};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledLeftSummary = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledRightSummary = styled(Box)`
  display: flex;
  flex-direction: column;
`;
