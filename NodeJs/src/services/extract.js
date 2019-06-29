module.exports = (app) => {
  const Param = app.constants.params.extract;
  const Repository = app.repositories.extract;
  const Mapper = app.mappers.extract;
  const Common = app.models.common.return;
  const Redis = app.lib.redis;
  const Cache = app.lib.cache;

  class ExtractService {
    static async list() {
      const extract = `${Param.name}`;
      const base = Common.base();

      try {
        const cacheGet = await Cache.get(extract);
        if (cacheGet) return cacheGet;

        const redisGet = await Redis.get(extract);
        if (redisGet) return redisGet;

        const repository = await Repository.list();

        if (!repository.Success) return repository;

        const mapper = await Mapper.modelsToViewsModel(repository.Data);

        await Cache.set(extract, mapper, Param.cache);
        await Redis.set(extract, mapper, Param.redis);

        base.Data = mapper;
      } catch (error) {
        base.Success = false;
        base.Description = error;
      }

      return base;
    }
  }

  return ExtractService;
};
