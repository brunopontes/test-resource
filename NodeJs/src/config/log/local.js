import fs from 'fs';
import path from 'path';

module.exports = (config) => {
  class LocalLogger {
    static async writeFile(content, fileName, type = false) {
      if (!config.debug.local) { return; }

      const dirLog = path.join(__dirname, './../../../log');
      const folder = `${new Date().toISOString().slice(0, 10)}`;
      const moduleName = fileName;
      const dirFolder = `${dirLog}/${folder}`;
      const dirModule = `${dirFolder}/${moduleName}`;
      const typeS = type === true ? 'Response' : 'Request';
      let i = 0;
      let dir = `${dirModule}/${i}-${typeS}`;

      if (!fs.existsSync(dirLog)) {
        fs.mkdirSync(dirLog);
      }

      if (!fs.existsSync(dirFolder)) {
        fs.mkdirSync(dirFolder);
      }

      if (!fs.existsSync(dirModule)) {
        fs.mkdirSync(dirModule);
      }

      while (fs.existsSync(dir)) {
        i++;
        dir = `${dirModule}/${i}-${typeS}`;
      }

      fs.writeFileSync(dir, JSON.stringify(content), 'utf-8');
    }
  }

  return LocalLogger;
};
