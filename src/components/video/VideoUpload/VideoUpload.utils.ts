import { ResultsDTO, SummaryResult, Video } from '../VideoTool/Video.types';

export const processResponse = (
  results: ResultsDTO,
  clientVideos: Array<Video>
): { videos: Array<Video>; summary: SummaryResult } => {
  const updatedVideos = clientVideos.map((video) => {
    console.log(video.name, results.videosResults);
    const matchedResult = results.videosResults.find(
      (videoResult) => videoResult.fileName === video.name
    );

    return {
      ...video,
      videoResults: matchedResult || undefined,
    };
  });

  const summary = results.summary;

  return {
    videos: updatedVideos,
    summary,
  };
};
