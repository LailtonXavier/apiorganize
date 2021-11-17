import { Router } from 'express';

import contactController from '../controllers/ContactController';

const routes = Router();

routes.get('/', contactController.index);
// routes.post('/', contactController.store);
routes.post('/', contactController.sendEmail);

export default routes;
