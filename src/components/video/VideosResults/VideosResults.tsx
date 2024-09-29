import {
  Accordion,
  AccordionDetails,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import {
  StyledAccordionSummary,
  StyledLeftSummary,
  StyledRightSummary,
  StyledSummary,
  StyledTimelines,
  StyledVideosResults,
} from './VideosResults.styles';
import { SummaryResult, Video } from '../VideoTool/Video.types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VideoResultAnalisys } from '../VideoResultAnalysis/VideoResultAnalysis';
import { BarChart } from '@mui/x-charts';
// import { useState } from 'react';

interface VideoDisplayI {
  videos: Video[];
  summary: SummaryResult;
}

export const VideosResults = ({ videos, summary }: VideoDisplayI) => {
  // const [selectedVideo, setSelectedVideo] = useState("");

  return (
    <StyledVideosResults>
      <StyledSummary>
        <Box>
          <Typography variant="h5">Podsumowanie:</Typography>
          <StyledLeftSummary>
            <Typography>Filmów:</Typography>
            <Typography>{summary.overall.totalFiles}</Typography>
            <Divider />
            <Divider />
            <Typography>Błędów w sumie:</Typography>
            <Typography>{summary.overall.totalErrors}</Typography>
            <Divider />
            <Divider />
            <Typography>Słów na minutę:</Typography>
            <Typography>{summary.overall.wordsPerMinute}</Typography>
          </StyledLeftSummary>
        </Box>
        <Box>
          <Typography variant="h5">Statystyki:</Typography>
          <StyledRightSummary>
            <Box>
              <Typography>Wykres błędów:</Typography>
              <BarChart
                dataset={summary.statistics}
                yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
                xAxis={[{ dataKey: 'quantity' }]}
                series={[{ dataKey: 'quantity', label: 'Wystąpenia błędu' }]}
                layout="horizontal"
                width={500}
                height={300}
                margin={{ left: 125 }}
                tooltip={undefined}
              />
              <Typography>Najczęstszy błąd: {'Garbaty'}</Typography>
            </Box>
          </StyledRightSummary>
        </Box>
      </StyledSummary>
      <Typography color="error">
        Kliknij aby rozwinąć poniższe i zobaczyć dane dla poszczególnych filmów
      </Typography>
      <StyledTimelines>
        {videos.map((video) => {
          const { name } = video;
          return (
            <Accordion>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{name}</Typography>
                <Typography>{'2:45'}</Typography>
                <Typography>Ilość błędów: {10}</Typography>
              </StyledAccordionSummary>
              <AccordionDetails>
                <VideoResultAnalisys video={video} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </StyledTimelines>
    </StyledVideosResults>
  );
};
