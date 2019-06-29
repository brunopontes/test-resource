import path from 'path';

module.exports = (app) => {
  class Util {
    static adjustModule(pathFile) {
      try {
        const fileName = path.basename(pathFile);
        const moduleName = fileName.replace('.js', '');

        return moduleName;
      } catch (error) {
        app.logger.error(`${error.stack}`);

        return null;
      }
    }
  }

  return Util;
};
