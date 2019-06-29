module.exports = (app) => {
  let _success = true;
  let _jsonError = null;
  let _data = null;

  class Common {
    static base() {
      _success = true;
      _jsonError = null;
      _data = null;

      return {
        Success: _success,
        get Description() {
          return _jsonError;
        },
        set Description(error) {
          let jsonError = null;

          if (error) {
            jsonError = `${error.stack}`;
          }

          _jsonError = jsonError;

          if (jsonError) {
            app.logger.error(jsonError);
          }
        },
        Data: _data,
      };
    }
  }

  return Common;
};
