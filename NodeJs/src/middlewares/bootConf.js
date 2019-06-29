import bodyParser from 'body-parser';

module.exports = (app) => {
  app.set('port', app.config.port);
  app.set('json spaces', 4);
  app.use(bodyParser.urlencoded({ extended: false, inflate: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'SAMEORIGIN');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    res.header('Connection', 'close');
    res.header('Accept-Encoding', 'gzip');
    res.header('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');

    return next();
  });
};
