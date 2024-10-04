import ky, { HTTPError } from 'ky';
import type { ApiError } from '../../../comon/error';

export const TOKEN_NAME = 'authToken';

let token = localStorage.getItem(TOKEN_NAME);

export class ApiHTTPError extends HTTPError {
  clientMessage?: string;
  constructor(error: HTTPError) {
    super(error.response, error.request, error.options);
  }
}

export const api = ky.extend({
  prefixUrl: '/api',
  hooks: {
    beforeError: [
      async (error) => {
        const { response } = error;

        if (response && response.body && response.headers.get('content-type')) {
          try {
            const a = await response.json<ApiError>();
            const apiHttpError: ApiHTTPError = new ApiHTTPError(error);
            apiHttpError.clientMessage = a.clientMessage;
            return apiHttpError;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            return error;
          }
        }
        return error;
      },
    ],
  },
  // hooks: {
  //   beforeRequest: [
  //     (request) => {
  //       if (token) request.headers.set('x-access-token', token);
  //     },
  //   ],
  // },
});
export const getApiToken = () => token;

export const removeApiToken = () => {
  token = null;
  localStorage.removeItem(TOKEN_NAME);
};

export const setApiToken = (t: string, remember = false) => {
  token = t;
  if (remember) {
    localStorage.setItem(TOKEN_NAME, token);
  }
};
