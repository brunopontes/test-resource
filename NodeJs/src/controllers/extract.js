module.exports = (app) => {
  const Service = app.services.extract;
  const Common = app.models.common.return;
  const Util = app.lib.util;
  const Module = Util.adjustModule(__filename);

  class ExtractController {
    static async list(req, res) {
      const base = Common.base();

      try {
        app.local.writeFile(req.query, Module, false);

        const service = await Service.list();

        if (!service.Success) return res.status(500).json(service);

        base.Data = service.Data;

        app.local.writeFile(base, Module, true);

        return res.status(200).json(base);
      } catch (error) {
        base.Success = false;
        base.Description = error;

        return res.status(500).json(base);
      }
    }
  }

  return ExtractController;
};
