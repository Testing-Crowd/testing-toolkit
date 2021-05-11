const { afterEach } = require('jest-circus');
const { logger } = require('../index');

describe('Logging', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('log string', () => {
        const spy = jest.spyOn(logger, 'info').mockImplementation((msg) => msg);

        logger.info('Is this on?');

        expect(spy).toHaveBeenCalled();
        expect(spy).toBeCalledWith('Is this on?');
    });

    test('log object', () => {
        const spy = jest.spyOn(logger, 'info').mockImplementation((msg) => msg);

        logger.info({ id: 1 }, 'Some message');

        expect(spy).toHaveBeenCalled();
        expect(spy).toBeCalledWith({ id: 1 }, 'Some message');
    });

});