import debug from 'debug';

class Log {
  constructor() {
    this.BASE = 'sale-platform-frontend';
    this.COLOURS = {
      trace: 'lightblue',
      info: 'blue',
      warn: 'pink',
      error: 'red',
    };
  }

  generateMessage(level, message, source) {
    const namespace = `${this.BASE}:${level}`;
    const createDebug = debug(namespace);

    if (process.env.REACT_APP_STAGE !== 'production') {
      createDebug.enabled = true;
      createDebug.color = this.COLOURS[level];
    }

    if (source) { createDebug(source, message); } else { createDebug(message); }
  }

  trace(message, source) {
    return this.generateMessage('trace', message, source);
  }

  info(message, source) {
    return this.generateMessage('info', message, source);
  }

  warn(message, source) {
    return this.generateMessage('warn', message, source);
  }

  error(message, source) {
    return this.generateMessage('error', message, source);
  }
}

export default new Log();
