import { VideosResults } from '../VideosResults/VideosResults';
import { VideoUpload } from '../VideoUpload/VideoUpload';
import { useState } from 'react';
import { StyledVideoTool, StyledVideoToolWrapper } from './VideoTool.styles';
import { SummaryResult, Video } from './Video.types';
import { Spinner } from '../../ui/Spinner/Spinner';

export const VideoTool = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [summary, setSummary] = useState<SummaryResult | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const areVideosLoaded = videos?.length && summary;

  return (
    <StyledVideoTool>
      <StyledVideoToolWrapper>
        <Spinner isLoading={isLoading}>
          {!areVideosLoaded ? (
            <VideoUpload
              setVideos={setVideos}
              setSummary={setSummary}
              setIsLoading={setIsLoading}
            />
          ) : (
            <VideosResults videos={videos} summary={summary} />
          )}
        </Spinner>
      </StyledVideoToolWrapper>
    </StyledVideoTool>
  );
};
