import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Contact from '../models/Contact';

const models = [Contact];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
