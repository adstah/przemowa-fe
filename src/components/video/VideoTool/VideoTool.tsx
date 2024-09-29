import { VideosResults } from '../VideosResults/VideosResults';
import { VideoUpload } from '../VideoUpload/VideoUpload';
import { useState } from 'react';
import { StyledVideoTool, StyledVideoToolWrapper } from './VideoTool.styles';
import { SummaryResult, Video } from './Video.types';

export const VideoTool = () => {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [summary, setSummary] = useState<SummaryResult | undefined>();

  const areVideosLoaded = videos?.length && summary;

  return (
    <StyledVideoTool>
      <StyledVideoToolWrapper>
        {!areVideosLoaded ? (
          <VideoUpload setVideos={setVideos} setSummary={setSummary} />
        ) : (
          <VideosResults videos={videos} summary={summary} />
        )}
      </StyledVideoToolWrapper>
    </StyledVideoTool>
  );
};
