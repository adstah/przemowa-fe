import { Button, ListItem, ListItemText, Snackbar } from '@mui/material';
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {
  StyledUploadedList,
  StyledVideoUploadForm,
} from './VideoUpload.styles';
import Dropzone from 'react-dropzone';
// import { POST_FILE } from '../../../xhr/methods';
// import { ENDPOINTS } from '../../../xhr/endpoints';
import { ResultsDTO, SummaryResult, Video } from '../VideoTool/Video.types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { processResponse } from './VideoUpload.utils';

interface VideoUploadI {
  setVideos: Dispatch<SetStateAction<Video[]>>;
  setSummary: Dispatch<SetStateAction<SummaryResult | undefined>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const VideoUpload = ({
  setVideos,
  setSummary,
  setIsLoading,
}: VideoUploadI) => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formVideos, setFormVideos] = useState<
    Array<{
      url: string;
      file: File;
      name: string;
    }>
  >([]);

  const handleCloseSnackbar = () => {
    setSnackbarMessage('');
  };

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    const processedFiles: Array<Video> = [];
    for (const file of acceptedFiles) {
      if (!file) continue;
      processedFiles.push({
        file: file,
        name: file.name,
        url: URL.createObjectURL(file),
      });
    }
    setFormVideos(processedFiles);
  }, []);

  const handleUploadVideo: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    const processedFiles = formVideos.map(({ file }) => file);
    try {
      // const response = await POST_FILE(
      //   ENDPOINTS.VIDEO_ANALISYS,
      //   processedFiles
      // );
      const response = { ok: true };
      console.log(processedFiles);

      //
      const mockedResponse = await fetch('/public/mock.json');
      const data = (await mockedResponse.json()) as ResultsDTO;
      //

      const { videos, summary } = processResponse(data, formVideos);

      if (response.ok) {
        setVideos(videos);
        setSummary(summary);
      } else {
        setSnackbarMessage('Błąd serwera');
      }
    } catch (err: any) {
      setSnackbarMessage('Błąd sieci' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledVideoUploadForm onSubmit={handleUploadVideo}>
      <Dropzone
        onDrop={handleDrop}
        onDropRejected={() =>
          setSnackbarMessage('Przekroczono dozwoloną ilość plików: 5')
        }
        accept={{
          'video/*': ['.mp4', '.mkv', '.avi', '.mov'],
        }}
        multiple
        maxFiles={5}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {formVideos?.length ? (
                <StyledUploadedList>
                  {formVideos.map(({ name }) => (
                    <ListItem>
                      <CheckCircleIcon />
                      <ListItemText primary={name} />
                    </ListItem>
                  ))}
                </StyledUploadedList>
              ) : (
                <p>
                  Przeciągnij i upuść, lub kliknij tutaj i wybierz pliki do
                  analizy przemówienia (max:5)
                </p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <Button type="submit" disabled={!formVideos?.length} variant="contained">
        Submit for video analysis
      </Button>
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={8 * 1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </StyledVideoUploadForm>
  );
};
