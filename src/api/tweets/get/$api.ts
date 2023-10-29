import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1z0uaup } from './timeline';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/tweets/get/timeline';
  const GET = 'GET';

  return {
    timeline: {
      /**
       * @returns success
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1z0uaup['get']['resBody'], BasicHeaders, Methods_1z0uaup['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * @returns success
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1z0uaup['get']['resBody'], BasicHeaders, Methods_1z0uaup['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
