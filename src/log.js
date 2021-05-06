const pino = require('pino');

const log = pino({
    level: process.env.LOG_LEVEL || 'info',
    prettyPrint: {
        levelFirst: true,
    },
});

export { log as default };
