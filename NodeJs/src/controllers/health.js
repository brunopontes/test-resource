module.exports = (app) => {
  const Common = app.models.common.return;

  class HealthController {
    static async liveness(req, res) {
      const base = Common.base();

      try {
        await app.database.database.sequelize.authenticate();

        return res.status(200).json(base);
      } catch (error) {
        base.Success = false;
        base.Description = error;

        return res.status(500).json(base);
      }
    }
  }

  return HealthController;
};
