module.exports = {
  name: 'extract',
  redis: {
    available: true,
    timeout: 60 * 60 * 1,
  },
  cache: {
    available: true,
    timeout: 60 * 60 * 0.1,
  },
};
