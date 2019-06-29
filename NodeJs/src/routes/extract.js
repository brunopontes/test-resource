module.exports = (app) => {
  const controller = app.controllers.extract;

  app.get('/extract', controller.list);
};
