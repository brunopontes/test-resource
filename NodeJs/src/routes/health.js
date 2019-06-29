module.exports = (app) => {
  const healthDontroller = app.controllers.health;

  app.get('/health', healthDontroller.liveness);
};
