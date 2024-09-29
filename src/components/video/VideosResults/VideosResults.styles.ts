import { Accordion, AccordionSummary, Box, styled } from '@mui/material';

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
  margin-top: 0;
  border-radius: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const StyledAccordion = styled(Accordion)`
  transition: 0.25s ease-in-out;
  :hover {
    background: #2f2f2f;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(3)};
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

export const StyledNextSection = styled(Box)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;
