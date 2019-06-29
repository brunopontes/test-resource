import NodeCache from 'node-cache';

module.exports = (app) => {
  const Config = app.config;
  const Client = new NodeCache({ stdTTL: Config.cache.timeout, checkperiod: Config.cache.timeout * 0.2, useClones: false });

  class CacheClient {
    static async get(key) {
      try {
        if (!Config.cache.available) return null;

        let data = await Client.get(key);

        if (!data) return null;

        data = JSON.parse(data);

        return data;
      } catch (error) {
        throw new Error(`CacheClient - Get : ${error}`);
      }
    }

    static async set(key, data, params) {
      try {
        if (!Config.cache.available || !params.available) return;

        if (!data || !data.Data) return;

        await Client.set(key, JSON.stringify(data), params.timeout);
      } catch (error) {
        throw new Error(`CacheClient - Set : ${error}`);
      }
    }
  }

  return CacheClient;
};
