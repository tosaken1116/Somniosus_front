import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_2yw7dz } from './_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/follows/create';
  const POST = 'POST';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns success
         */
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['post']['resBody'], BasicHeaders, Methods_2yw7dz['post']['status']>(prefix, prefix0, POST, option).json(),
        /**
         * @returns success
         */
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['post']['resBody'], BasicHeaders, Methods_2yw7dz['post']['status']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
