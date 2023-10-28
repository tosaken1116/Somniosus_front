import aspida from '@aspida/fetch';
import qs from 'qs';

import api from '@/api/$api';
import { BASE_URL } from '@/constants/baseUrl';

export const apiClient = api(
  aspida((...args) => fetch(args[0] as string, args[1]), {
    baseURL: BASE_URL,
    throwHttpErrors: true,
    paramsSerializer: (s) => qs.stringify(s, { arrayFormat: 'brackets' }),
    mode: 'cors',
    headers: {
      Authorization: 'Bearer sample',
    },
  })
);
