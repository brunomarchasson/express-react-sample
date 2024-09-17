import ky from 'ky';
// import { config } from '../config';

export const TOKEN_NAME = 'authToken';

let token = localStorage.getItem(TOKEN_NAME);

export const api = ky.extend({
  // prefixUrl: config.API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        if (token) request.headers.set('x-access-token', token);
      },
    ],
  },
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
