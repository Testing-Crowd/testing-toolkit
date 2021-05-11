const generate = require('./src/generate-data');
const err = require('./src/errors');
const { logger } = require('./src/logger');

module.exports = {
  generate,
  err,
  logger
};
