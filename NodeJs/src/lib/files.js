import fs from 'fs';
import path from 'path';

module.exports = (app) => {
  class Files {
    static async read() {
      try {
        const pathFile = path.join(__dirname, app.config.file.path, app.config.file.name);

        const data = await fs.readFileSync(pathFile, 'utf8');

        const jsonData = JSON.parse(data);

        return jsonData;
      } catch (error) {
        throw new Error(`Files - read : ${error}`);
      }
    }
  }

  return Files;
};
