export type Video = {
  url: string;
  file: File;
  name: string;
  videoResults?: VideoResults;
};

export type VideoResults = {
  fileName: string;
  ferResults: Array<{ emotion: string; timestamp: number }>;
  transcript: Array<{ timestamp: number; text: string }>;
  targetGroup?: string;
  sentiment?: string;
  questions?: Array<string>;
  readability: {
    fleschScore: number;
    fleschGrade: string;
    gunningFogScore: number;
    gunningFogGrade: string;
  };
  errors: Array<{
    timestamp: number;
    name: string;
    details?: string;
  }>;
};

export type SummaryResult = {
  overall: {
    totalFiles: number;
    totalErrors: number;
    wordsPerMinute: number;
  };
  statistics: Array<{ name: string; quantity: number }>;
};

export type ResultsDTO = {
  videosResults: Array<VideoResults>;
  summary: SummaryResult;
};
