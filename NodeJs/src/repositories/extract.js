module.exports = (app) => {
  const Common = app.models.common.return;
  const Files = app.lib.files;

  class ExtractRepository {
    static async list() {
      const base = Common.base();

      try {
        const model = await Files.read();

        base.Data = model;
      } catch (error) {
        base.Success = false;
        base.Description = error;
      }

      return base;
    }
  }

  return ExtractRepository;
};
