import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import contactRoutes from './routes/contactRoutes';

import './database';

const allowList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, calback) {
    if (allowList.indexOf(origin) !== -1 || !origin) {
      calback(null, true);
    } else {
      calback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/contact', contactRoutes);
  }
}

export default new App().app;
