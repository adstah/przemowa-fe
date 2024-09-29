export const API_URL = import.meta.env.PROD
  ? 'https://x.azurewebsites.net/api'
  : 'http://localhost:8998/api';

export const ENDPOINTS = {
  VIDEO_ANALISYS: `${API_URL}/process-video`,
};
