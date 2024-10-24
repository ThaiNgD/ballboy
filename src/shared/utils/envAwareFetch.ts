import { isServer, PORT } from '../constants/env';

const envAwareFetch = <T>(
  url: string,
  options?: Record<string, unknown>,
): Promise<T> => {
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:${PORT}${url}` : url;
  return fetch(fetchUrl, options).then((res) => res.json());
};

export { envAwareFetch };
