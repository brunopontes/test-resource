import redis from 'async-redis';

module.exports = (app) => {
  const Config = app.config;
  const Client = redis.createClient(Config.redis.port, Config.redis.host, {
    no_ready_check: true,
    connect_timeout: Config.redis.timeout,
    retry_strategy(options) {
      if (options.error && options.error.code === 'ECONNREFUSED') {
        app.logger.error('The server refused the connection');
        return new Error('The server refused the connection');
      }
      if (options.total_retry_time > 1000 * 60 * 60) {
        app.logger.error('Retry time exhausted');
        return new Error('Retry time exhausted');
      }
      if (options.attempt > 10) {
        return null;
      }
      return Math.min(options.attempt * 100, 3000);
    },
  })
    .on('error', (error) => {
      app.logger.error(`${error} to connect host`);
    });

  class RedisClient {
    static async get(key) {
      try {
        if (!Config.redis.available) return null;

        const exists = await Client.exists(key);

        if (!exists) return null;

        let data = await Client.get(key);

        data = JSON.parse(data);

        return data;
      } catch (error) {
        throw new Error(`RedisClient - Get : ${error}`);
      }
    }

    static async set(key, data, params) {
      try {
        if (!Config.redis.available || !params.available) return;

        if (!data || !data.Data) return;

        await Client.set(key, JSON.stringify(data), 'EX', params.timeout);
      } catch (error) {
        throw new Error(`RedisClient - Set : ${error}`);
      }
    }
  }

  return RedisClient;
};
