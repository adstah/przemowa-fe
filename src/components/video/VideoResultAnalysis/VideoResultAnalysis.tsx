import ReactPlayer from 'react-player';
import { Video } from '../VideoTool/Video.types';
import {
  StyledBrief,
  StyledColumnBox,
  StyledDivider,
  StyledMiniDivider,
  StyledResultTimelineList,
  StyledRowBox,
  StyledTimelineListItem,
  StyledVideoAndBrief,
  StyledVideoResultAnalisys,
} from './VideoResultAnalysis.styles';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { convertToMinutes } from './VideoResultAnalisys.utils';
import { useRef, useState } from 'react';
import { TranscriptDialog } from '../TranscriptDialog/TranscriptDialog';
import { QuestionsDialog } from '../QuestionsDialog/QuestionsDialog';

interface VideoResultAnalisysI {
  video: Video;
}

export const VideoResultAnalisys = ({ video }: VideoResultAnalisysI) => {
  const { videoResults } = video;
  const refPlayer = useRef<ReactPlayer>(null);
  const [openTranscript, setOpenTranscript] = useState(false);
  const [openQuestions, setOpenQuestions] = useState(false);
  if (!video.name || !video?.videoResults) return null;

  const handlePlaySection = (timestamp: number) => () => {
    refPlayer.current?.seekTo(timestamp, 'seconds');
  };

  const handleOpenTranscript = (open: boolean) => () => {
    setOpenTranscript(open);
  };

  const handleOpenQuestions = (open: boolean) => () => {
    setOpenQuestions(open);
  };

  return (
    <StyledVideoResultAnalisys>
      <StyledVideoAndBrief>
        <ReactPlayer ref={refPlayer} url={video.url} controls />
        <StyledBrief>
          <StyledRowBox>
            <Typography>
              <strong>{'Emocje (twarz)'}</strong>
            </Typography>
            {videoResults?.ferResults.map(({ emotion, timestamp }) => (
              <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
                <Typography>{emotion}</Typography>
                <Typography>{convertToMinutes(timestamp)}</Typography>
              </Box>
            ))}
          </StyledRowBox>
          <StyledMiniDivider />
          <StyledColumnBox>
            <Button variant="contained" onClick={handleOpenTranscript(true)}>
              Otwórz transkrypcję
            </Button>
            <Button variant="contained" onClick={handleOpenQuestions(true)}>
              Otwórz pytania do mówcy
            </Button>
          </StyledColumnBox>
          <StyledMiniDivider />
          <StyledRowBox>
            <Typography>
              <strong>{'Grupa docelowa wypowiedzi:'}</strong>
            </Typography>
            <Typography>{videoResults?.targetGroup}</Typography>
          </StyledRowBox>
          <StyledRowBox>
            <Typography>
              <strong>{'Zabarwienie emocjonalne wypowiedzi:'}</strong>
            </Typography>
            <Typography>{videoResults?.sentiment}</Typography>
          </StyledRowBox>
          <StyledRowBox>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Wynik</TableCell>
                    <TableCell>Poziom</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Flesch</TableCell>
                    <TableCell>
                      {videoResults?.readability.fleschScore}
                    </TableCell>
                    <TableCell>
                      {videoResults?.readability.fleschGrade}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gunning</TableCell>
                    <TableCell>
                      {videoResults?.readability.gunningFogScore}
                    </TableCell>
                    <TableCell>
                      {videoResults?.readability.gunningFogGrade}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </StyledRowBox>
        </StyledBrief>
      </StyledVideoAndBrief>
      <StyledMiniDivider />
      <StyledResultTimelineList>
        {video.videoResults.errors.map(({ timestamp, name, details }) => (
          <StyledTimelineListItem onClick={handlePlaySection(timestamp)}>
            <Typography>{convertToMinutes(timestamp)}</Typography>
            <StyledDivider />
            <Typography>{name}</Typography>
            <Typography>{details}</Typography>
          </StyledTimelineListItem>
        ))}
      </StyledResultTimelineList>
      <TranscriptDialog
        open={openTranscript}
        transcript={videoResults?.transcript}
        onClose={handleOpenTranscript(false)}
      />
      <QuestionsDialog
        open={openQuestions}
        questions={videoResults?.questions}
        onClose={handleOpenQuestions(false)}
      />
    </StyledVideoResultAnalisys>
  );
};
