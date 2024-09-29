import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { VideoResults } from '../VideoTool/Video.types';
import { convertToMinutes } from '../VideoResultAnalysis/VideoResultAnalisys.utils';

interface TranscriptDialogI {
  transcript: VideoResults['transcript'] | undefined;
  open: boolean;
  onClose: () => void;
}

export const TranscriptDialog = ({
  transcript,
  open,
  onClose,
}: TranscriptDialogI) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ maxHeight: 500, overflowY: 'auto' }}
    >
      <Button onClick={onClose}>X</Button>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        {transcript?.map(({ timestamp, text }) => (
          <Box>
            <Typography>{convertToMinutes(timestamp)}</Typography>
            <Typography>{text}</Typography>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};
