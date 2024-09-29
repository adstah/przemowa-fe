export const API_URL = import.meta.env.PROD
  ? 'https://34.91.244.142/api'
  : 'http://localhost:8998/api';

export const ENDPOINTS = {
  VIDEO_ANALISYS: `${API_URL}/process-video`,
};
