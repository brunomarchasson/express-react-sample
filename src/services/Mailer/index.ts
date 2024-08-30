import express from 'express';
import generateEmail from './utils';

export function mailService() {
  const Router = express.Router();
  Router.get('/render/:email', (req, res) => {
    try {
      const { email } = req.params;
      console.log('ee', email);
      const html = generateEmail(email);

      return res.send(html);
    } catch (e) {
      console.error(e);
      return res.status(500).end();
    }
  });
  return Router;
}
