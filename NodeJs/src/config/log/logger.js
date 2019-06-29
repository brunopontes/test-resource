import { createLogger, format, transports } from 'winston';

module.exports = (config) => {
  const logger = createLogger({
    level: config.debug.level,
    format: format.combine(
      format.colorize({ level: true, all: true, message: true }),
      format.json(),
      format.timestamp({
        format: 'DD/MM/YYYY HH:mm:ss',
      }),
    ),
    transports: [
      new transports.Console({
        level: config.debug.level,
        format: format.combine(
          format.colorize({ level: true, all: true, message: true }),
          format.json(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`,
          ),
        ),
      }),
    ],
  });

  if (!config.debug.available) {
    logger.add(
      new transports.Console({
        format: format.simple(),
      }),
    );
  }

  return logger;
};
