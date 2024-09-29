import { AccordionDetails, Box, Divider, Typography } from '@mui/material';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledLeftSummary,
  StyledNextSection,
  StyledRightSummary,
  StyledSummary,
  StyledTimelines,
  StyledVideosResults,
} from './VideosResults.styles';
import { SummaryResult, Video } from '../VideoTool/Video.types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VideoResultAnalisys } from '../VideoResultAnalysis/VideoResultAnalysis';
import { BarChart } from '@mui/x-charts';
import {
  StyledColumnBox,
  StyledMiniDivider,
  StyledRowBox,
} from '../VideoResultAnalysis/VideoResultAnalysis.styles';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

interface VideoDisplayI {
  videos: Video[];
  summary: SummaryResult;
}

export const VideosResults = ({ videos, summary }: VideoDisplayI) => {
  return (
    <StyledVideosResults>
      <StyledSummary>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Podsumowanie ogólne:
          </Typography>
          <StyledLeftSummary>
            <Typography>
              <strong>Filmów:</strong>
            </Typography>
            <Typography>{summary.overall.totalFiles}</Typography>
            <Divider />
            <Divider />
            <Typography>
              <strong>Błędów w sumie:</strong>
            </Typography>
            <Typography>{summary.overall.totalErrors}</Typography>
            <Divider />
            <Divider />
            <Typography>
              <strong>Słów na minutę:</strong>
            </Typography>
            <Typography>{summary.overall.wordsPerMinute}</Typography>
            <Divider />
            <Divider />
            <Typography>
              <strong>Najczęstszy błąd:</strong>
            </Typography>
            <Typography>
              {
                summary.statistics.sort((a, b) => b.quantity - a.quantity)[0]
                  .name
              }
            </Typography>
          </StyledLeftSummary>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Statystyki:
          </Typography>
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
                tooltip={{ trigger: 'none' }}
              />
            </Box>
          </StyledRightSummary>
        </Box>
      </StyledSummary>
      <StyledNextSection>
        <StyledMiniDivider />
        <StyledColumnBox>
          <KeyboardDoubleArrowDownIcon
            sx={{
              color: 'white',
              width: 50,
              height: 50,
              alignSelf: 'center',
            }}
          />
          <Typography
            color="white"
            sx={{ textAlign: 'center', mb: 2, fontSize: 20 }}
          >
            Kliknij <u>poniższe</u> aby je rozwinąć i zobaczyć szczegółowe dane
            filmów
          </Typography>
        </StyledColumnBox>
        <StyledMiniDivider />
      </StyledNextSection>
      <StyledTimelines>
        {videos.map((video) => {
          const { name } = video;
          return (
            <StyledAccordion>
              <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                <StyledRowBox>
                  <Typography sx={{ opacity: 0.7 }}>Nazwa: </Typography>
                  <Typography>{name}</Typography>
                </StyledRowBox>
                {/* <StyledRowBox>
                  <Typography>Czas: {'2:45'}</Typography>
                  <Typography>{name}</Typography>
                </StyledRowBox> */}
                <StyledRowBox>
                  <Typography sx={{ opacity: 0.7 }}>Ilość błędów:</Typography>
                  <Typography>{video.videoResults?.errors.length}</Typography>
                </StyledRowBox>
              </StyledAccordionSummary>
              <AccordionDetails>
                <VideoResultAnalisys video={video} />
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      </StyledTimelines>
    </StyledVideosResults>
  );
};
