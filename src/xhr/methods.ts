const interceptedFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> => {
  const response = await fetch(input, { ...init });
  return response;
  if (response.status === 401 && !window.location.pathname.includes('/login')) {
    window.location.href = window.location.origin + '/login?unauthorized=true';
  }
  return response;
};

const getHeaders = () =>
  ({
    // Authorization: `Bearer ${localStorage.getItem("") || ""}`,
    Accept: '*/*',
  } as HeadersInit);

export const GET = (url: RequestInfo | URL, options?: RequestInit) =>
  interceptedFetch(url, {
    ...options,
    headers: { ...options?.headers, ...getHeaders() },
    method: 'GET',
  });

export const POST = (
  url: RequestInfo | URL,
  body: any,
  options?: RequestInit
) =>
  interceptedFetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...getHeaders() },
    body: JSON.stringify(body),
    method: 'POST',
  });

export const DELETE = (url: RequestInfo | URL, options?: RequestInit) =>
  interceptedFetch(url, {
    ...options,
    headers: { ...options?.headers, ...getHeaders() },
    method: 'DELETE',
  });

export const POST_FILE = (
  url: RequestInfo | URL,
  file: File[],
  options?: RequestInit
) => {
  const formData = new FormData();
  file.forEach((file) => {
    formData.append('files', file);
  });

  return interceptedFetch(url, {
    ...options,
    body: formData,
    method: 'POST',
  });
};

export const PATCH = (
  url: RequestInfo | URL,
  body: any,
  options?: RequestInit
) =>
  interceptedFetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...getHeaders() },
    body: JSON.stringify(body),
    method: 'PATCH',
  });
