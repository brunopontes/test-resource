import express from 'express';
import consign from 'consign';
import { join } from 'path';

const app = express();

consign({
  cwd: join(__dirname, ''),
  extensions: ['.js'],
  verbose: false,
})
  .include('./config/config.js')
  .then('./constants/params/')
  .then('./models/common/')
  .then('./middlewares/')
  .then('./models/view/')
  .then('./models/enum/')
  .then('./lib/')
  .then('./repositories/')
  .then('./mappers/')
  .then('./services/')
  .then('./controllers/')
  .then('./routes/')
  .into(app);

app.listen(app.listen(3000, () => {
  app.logger.info('Service has been started successfully');
  app.logger.info('App listening on port 3000');
}));

export default app;
