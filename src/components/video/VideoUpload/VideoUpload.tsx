import { Button, ListItem, ListItemText } from '@mui/material';
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
import { POST_FILE } from '../../../xhr/methods';
import { ENDPOINTS } from '../../../xhr/endpoints';
import { ResultsDTO, SummaryResult, Video } from '../VideoTool/Video.types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { processResponse } from './VideoUpload.utils';

interface VideoUploadI {
  setVideos: Dispatch<SetStateAction<Video[]>>;
  setSummary: Dispatch<SetStateAction<SummaryResult | undefined>>;
}

export const VideoUpload = ({ setVideos, setSummary }: VideoUploadI) => {
  const [formVideos, setFormVideos] = useState<
    Array<{
      url: string;
      file: File;
      name: string;
    }>
  >([]);

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
    const processedFiles = formVideos.map(({ file }) => file);
    try {
      const response = await POST_FILE(
        ENDPOINTS.VIDEO_ANALISYS,
        processedFiles
      );

      //
      const mockedResponse = await fetch('/public/mock.json');
      const data = (await mockedResponse.json()) as ResultsDTO;
      //

      const { videos, summary } = processResponse(data, formVideos);

      if (response.ok) {
        setVideos(videos);
        setSummary(summary);
      } else {
        console.error('Błąd podczas przesyłania wideo');
      }
    } catch (error) {
      console.error('Błąd sieci:', error);
    }
  };

  return (
    <StyledVideoUploadForm onSubmit={handleUploadVideo}>
      <Dropzone
        onDrop={handleDrop}
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
                  Przeciągnij i upuść, lub kliknij i wybierz pliki do analizy
                  przemówienia
                </p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <Button type="submit" disabled={!formVideos?.length} variant="contained">
        Submit for video analysis
      </Button>
    </StyledVideoUploadForm>
  );
};
