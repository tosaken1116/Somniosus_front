import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_18j6y1a } from './create/_id@string';
import type { Methods as Methods_17rt1mb } from './delete/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/follows/create';
  const PATH1 = '/follows/delete';
  const POST = 'POST';
  const DELETE = 'DELETE';

  return {
    create: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns success
           */
          post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_18j6y1a['post']['resBody'], BasicHeaders, Methods_18j6y1a['post']['status']>(prefix, prefix1, POST, option).json(),
          /**
           * @returns success
           */
          $post: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_18j6y1a['post']['resBody'], BasicHeaders, Methods_18j6y1a['post']['status']>(prefix, prefix1, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    delete: {
      _id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

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
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
