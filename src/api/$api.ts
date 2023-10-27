import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1vmdska } from './accounts/_id@string';
import type { Methods as Methods_17l7lnu } from './accounts/register';
import type { Methods as Methods_66bvhy } from './accounts/update';
import type { Methods as Methods_12twjkf } from './follows/create/_id@string';
import type { Methods as Methods_1ot5dgu } from './follows/delete/_id@string';
import type { Methods as Methods_hm9c1h } from './likes/create/_id@string';
import type { Methods as Methods_oom3sk } from './likes/delete/_id@string';
import type { Methods as Methods_ubgeda } from './tweets/delete/_id@string';
import type { Methods as Methods_um4wq7 } from './tweets/get/timeline';
import type { Methods as Methods_hsfp97 } from './tweets/post';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts';
  const PATH1 = '/accounts/register';
  const PATH2 = '/accounts/update';
  const PATH3 = '/follows/create';
  const PATH4 = '/follows/delete';
  const PATH5 = '/likes/create';
  const PATH6 = '/likes/delete';
  const PATH7 = '/tweets/delete';
  const PATH8 = '/tweets/get/timeline';
  const PATH9 = '/tweets/post';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    accounts: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1vmdska['get']['resBody'], BasicHeaders, Methods_1vmdska['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1vmdska['get']['resBody'], BasicHeaders, Methods_1vmdska['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      register: {
        /**
         * @param option.body - account to create
         * @returns success
         */
        post: (option: { body: Methods_17l7lnu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17l7lnu['post']['resBody'], BasicHeaders, Methods_17l7lnu['post']['status']>(prefix, PATH1, POST, option).json(),
        /**
         * @param option.body - account to create
         * @returns success
         */
        $post: (option: { body: Methods_17l7lnu['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_17l7lnu['post']['resBody'], BasicHeaders, Methods_17l7lnu['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
      update: {
        /**
         * @param option.body - account to update
         * @returns success
         */
        put: (option: { body: Methods_66bvhy['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_66bvhy['put']['resBody'], BasicHeaders, Methods_66bvhy['put']['status']>(prefix, PATH2, PUT, option).json(),
        /**
         * @param option.body - account to update
         * @returns success
         */
        $put: (option: { body: Methods_66bvhy['put']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_66bvhy['put']['resBody'], BasicHeaders, Methods_66bvhy['put']['status']>(prefix, PATH2, PUT, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`,
      },
    },
    follows: {
      create: {
        _id: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`;

          return {
            /**
             * @returns success
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_12twjkf['post']['resBody'], BasicHeaders, Methods_12twjkf['post']['status']>(prefix, prefix2, POST, option).json(),
            /**
             * @returns success
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_12twjkf['post']['resBody'], BasicHeaders, Methods_12twjkf['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      delete: {
        _id: (val2: string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            /**
             * @returns success
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1ot5dgu['delete']['resBody'], BasicHeaders, Methods_1ot5dgu['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns success
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1ot5dgu['delete']['resBody'], BasicHeaders, Methods_1ot5dgu['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
    },
    likes: {
      create: {
        _id: (val2: string) => {
          const prefix2 = `${PATH5}/${val2}`;

          return {
            /**
             * @returns success
             */
            post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_hm9c1h['post']['resBody'], BasicHeaders, Methods_hm9c1h['post']['status']>(prefix, prefix2, POST, option).json(),
            /**
             * @returns success
             */
            $post: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_hm9c1h['post']['resBody'], BasicHeaders, Methods_hm9c1h['post']['status']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      delete: {
        _id: (val2: string) => {
          const prefix2 = `${PATH6}/${val2}`;

          return {
            /**
             * @returns success
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_oom3sk['delete']['resBody'], BasicHeaders, Methods_oom3sk['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns success
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_oom3sk['delete']['resBody'], BasicHeaders, Methods_oom3sk['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
    },
    tweets: {
      delete: {
        _id: (val2: string) => {
          const prefix2 = `${PATH7}/${val2}`;

          return {
            /**
             * @returns success
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_ubgeda['delete']['resBody'], BasicHeaders, Methods_ubgeda['delete']['status']>(prefix, prefix2, DELETE, option).json(),
            /**
             * @returns success
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_ubgeda['delete']['resBody'], BasicHeaders, Methods_ubgeda['delete']['status']>(prefix, prefix2, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      get: {
        timeline: {
          /**
           * @returns success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_um4wq7['get']['resBody'], BasicHeaders, Methods_um4wq7['get']['status']>(prefix, PATH8, GET, option).json(),
          /**
           * @returns success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_um4wq7['get']['resBody'], BasicHeaders, Methods_um4wq7['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH8}`,
        },
      },
      post: {
        /**
         * @param option.body - tweet to delete
         * @returns success
         */
        post: (option: { body: Methods_hsfp97['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_hsfp97['post']['resBody'], BasicHeaders, Methods_hsfp97['post']['status']>(prefix, PATH9, POST, option).json(),
        /**
         * @param option.body - tweet to delete
         * @returns success
         */
        $post: (option: { body: Methods_hsfp97['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_hsfp97['post']['resBody'], BasicHeaders, Methods_hsfp97['post']['status']>(prefix, PATH9, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH9}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
