import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_wfuyqf } from './password';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts/register';
  const PATH1 = '/accounts/register/password';
  const POST = 'POST';

  return {
    password: {
      /**
       * @param option.body - password to create
       * @returns success
       */
      post: (option: { body: Methods_wfuyqf['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_wfuyqf['post']['resBody'], BasicHeaders, Methods_wfuyqf['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * @param option.body - password to create
       * @returns success
       */
      $post: (option: { body: Methods_wfuyqf['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_wfuyqf['post']['resBody'], BasicHeaders, Methods_wfuyqf['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * @param option.body - account to create
     * @returns success
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * @param option.body - account to create
     * @returns success
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody'], BasicHeaders, Methods_by08hd['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
