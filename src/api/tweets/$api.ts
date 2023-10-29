import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_17rt1mb } from './delete/_id@string';
import type { Methods as Methods_1qo6b4w } from './get/timeline';
import type { Methods as Methods_mdeh7w } from './post';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/tweets/delete';
  const PATH1 = '/tweets/get/timeline';
  const PATH2 = '/tweets/post';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    delete: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns success
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_17rt1mb['delete']['resBody'], BasicHeaders, Methods_17rt1mb['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns success
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_17rt1mb['delete']['resBody'], BasicHeaders, Methods_17rt1mb['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    get: {
      timeline: {
        /**
         * @returns success
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1qo6b4w['get']['resBody'], BasicHeaders, Methods_1qo6b4w['get']['status']>(prefix, PATH1, GET, option).json(),
        /**
         * @returns success
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1qo6b4w['get']['resBody'], BasicHeaders, Methods_1qo6b4w['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
    post: {
      /**
       * @param option.body - tweet to delete
       * @returns success
       */
      post: (option: { body: Methods_mdeh7w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_mdeh7w['post']['resBody'], BasicHeaders, Methods_mdeh7w['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * @param option.body - tweet to delete
       * @returns success
       */
      $post: (option: { body: Methods_mdeh7w['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_mdeh7w['post']['resBody'], BasicHeaders, Methods_mdeh7w['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
