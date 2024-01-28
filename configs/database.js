import { Sequelize } from 'sequelize';
import { DB_CREDENTIALS } from './helpers.js';
import Shortener from '../models/Shorteners.js';
const sequelize = new Sequelize(
  DB_CREDENTIALS.db_name,
  DB_CREDENTIALS.username,
  DB_CREDENTIALS.password,
  {
    dialect: DB_CREDENTIALS.connection,
    host: DB_CREDENTIALS.host,
    storage: DB_CREDENTIALS.storage,
    logging: false,
  }
);

const models = {
  Shortener: Shortener(sequelize, Sequelize),
};

export default {
  Sequelize,
  sequelize,
  ...models,
};
