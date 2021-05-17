const pino = require('pino');

const log = pino({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: { colorize: true, translateTime: true, ignore: 'hostname,pid' }
});

module.exports.log = log;