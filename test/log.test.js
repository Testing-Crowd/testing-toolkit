const { afterEach } = require('jest-circus');
const { log } = require('../index');

describe('Logging', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('log string', () => {
    const spy = jest.spyOn(log, 'info').mockImplementation((msg) => msg);

    log.info('Is this on?');

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith('Is this on?');
  });

  test('log object', () => {
    const spy = jest.spyOn(log, 'debug').mockImplementation((msg) => msg);

    log.debug({ id: 1 }, 'Some message');

    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith({ id: 1 }, 'Some message');
  });
});
