const config = require(`./environments/config.${process.env.NODE_ENV || 'local'}.js`);
const logger = require('./log/logger')(config);
const local = require('./log/local')(config);

module.exports = (app) => {
  app.logger = logger,
  app.config = config,
  app.local = local;
};
