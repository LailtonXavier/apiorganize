import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('chegue');
});

export default routes;
