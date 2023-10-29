import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_2yw7dz } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/tweets/delete';
  const DELETE = 'DELETE';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns success
         */
        delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * @returns success
         */
        $delete: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['delete']['resBody'], BasicHeaders, Methods_2yw7dz['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
