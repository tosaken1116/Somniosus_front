import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_2yw7dz } from './_id@string';
import type { Methods as Methods_1pbnd9f } from './register';
import type { Methods as Methods_ut8bpv } from './update';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts';
  const PATH1 = '/accounts/register';
  const PATH2 = '/accounts/update';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        /**
         * @returns success
         */
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * @returns success
         */
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_2yw7dz['get']['resBody'], BasicHeaders, Methods_2yw7dz['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    register: {
      /**
       * @param option.body - account to create
       * @returns success
       */
      post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - account to create
       * @returns success
       */
      $post: (option: { body: Methods_1pbnd9f['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1pbnd9f['post']['resBody'], BasicHeaders, Methods_1pbnd9f['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    update: {
      /**
       * @param option.body - account to update
       * @returns success
       */
      put: (option: { body: Methods_ut8bpv['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_ut8bpv['put']['resBody'], BasicHeaders, Methods_ut8bpv['put']['status']>(prefix, PATH2, PUT, option).json(),
      /**
       * @param option.body - account to update
       * @returns success
       */
      $put: (option: { body: Methods_ut8bpv['put']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_ut8bpv['put']['resBody'], BasicHeaders, Methods_ut8bpv['put']['status']>(prefix, PATH2, PUT, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
