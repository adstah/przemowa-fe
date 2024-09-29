import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { VideoResults } from '../VideoTool/Video.types';

interface QuestionsDialogI {
  questions: VideoResults['questions'] | undefined;
  open: boolean;
  onClose: () => void;
}

export const QuestionsDialog = ({
  questions,
  open,
  onClose,
}: QuestionsDialogI) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ maxHeight: 500, overflowY: 'auto' }}
    >
      <Button onClick={onClose}>X</Button>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        {questions?.map((q) => (
          <Box>
            <Typography>{q}</Typography>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};
