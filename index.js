const generate = require('./src/generate-data');
const err = require('./src/errors');
const { logger } = require('./src/log');

module.exports = {
  generate,
  err,
  logger
};
