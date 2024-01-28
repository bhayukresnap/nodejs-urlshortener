import Express from 'express';
import BodyParser from 'body-parser';

import Router from './routes/index.js';
import { PORT, rootFolder } from './configs/helpers.js';
import Logger from './configs/logger.js';
import DB from './configs/database.js';

const app = Express();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(Express.static(rootFolder('public')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(Router);

try {
  await DB.sequelize.sync();
  app.listen(PORT);
} catch (err) {
  Logger.error(err);
}
