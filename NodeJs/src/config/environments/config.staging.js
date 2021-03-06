module.exports = {
  debug: {
    level: 'debug',
    available: true,
    local: true,
  },
  cache: {
    available: true,
    timeout: 5000,
  },
  redis: {
    available: false,
    host: 'localhost',
    port: '6379',
    timeout: 5000,
  },
  file: {
    path: './../../public/files/',
    name: 'lancamento-conta-legado.json',
  },
};
