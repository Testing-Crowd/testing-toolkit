const { generate } = require('../index');

describe('Generate', () => {
  describe('Email Address', () => {
    const generatedEmailAddress = generate.emailAddress();
    test('should be a string', () => {
      expect(typeof generatedEmailAddress).toBe('string');
    });
    test('should start with test-', () => {
      expect(generatedEmailAddress).toContain('test-');
    });
    test('should end with @testingtoolkit.co.uk', () => {
      expect(generatedEmailAddress).toContain('@testingtoolkit.co.uk');
    });
    test('should be random every time', () => {
      expect(generatedEmailAddress).not.toBe(generate.emailAddress());
    });
  });

  describe('Password', () => {
    const generatedPassword = generate.password();
    test('should be a string', () => {
      expect(typeof generatedPassword).toBe('string');
    });
    test('should start with a . and end with a !', () => {
      expect(generatedPassword).toMatch(new RegExp('^.[0-9a-zA-Z_.@]+!$'));
    });
    test('should be different every time', () => {
      expect(generatedPassword).not.toBe(generate.password());
    });
  });

  describe('IP Address', () => {
    const generatedIpAddress = generate.ipAddress();
    test('should be a string', () => {
      expect(typeof generatedIpAddress).toBe('string');
    });
    test('should be seperated by .', () => {
      expect(generatedIpAddress).toMatch(new RegExp('^[0-9]+.[0-9]+.[0-9]+.[0-9]+$'));
    });
    test('should be different every time', () => {
      expect(generatedIpAddress).not.toBe(generate.ipAddress());
    });
  });

  describe('Past Date', () => {
    const generatedPastDate = generate.pastDate();
    test('should be a object', () => {
      expect(typeof generatedPastDate).toBe('object');
    });
    test('should be different every time', () => {
      expect(generatedPastDate).not.toBe(generate.pastDate());
    });
  });

  describe('Future Date', () => {
    const generatedFutureDate = generate.futureDate();
    test('should be a string', () => {
      expect(typeof generatedFutureDate).toBe('object');
    });
    test('should be different every time', () => {
      expect(generatedFutureDate).not.toBe(generate.futureDate());
    });
  });

  describe('Random String', () => {
    const generatedRandomString = generate.randomString();
    test('should be a string', () => {
      expect(typeof generatedRandomString).toBe('string');
    });
    test('should be random string of 2 words with . as seperators', () => {
      expect(generate.randomString(2, '.')).toMatch(new RegExp('^[-a-zA-Z]+.[-a-zA-Z]+$'));
    });
    test('should be random string of 3 words with / as seperators', () => {
      expect(generate.randomString(3, '_')).toMatch(new RegExp('^[-a-zA-Z]+_[-a-zA-Z]+_[-a-zA-Z]+$'));
    });
    test('should be different every time', () => {
      expect(generatedRandomString).not.toBe(generate.randomString());
    });
  });

  describe('Date as Number', () => {
    const generatedDateAsNumber = generate.dateAsNumber();
    test('should be a string', () => {
      expect(typeof generatedDateAsNumber).toBe('string');
    });
    test('should be different every time', () => {
      expect(generatedDateAsNumber).not.toBe(generate.dateAsNumber());
    });
  });

  describe('Random Number', () => {
    const generatedRandomNumber = generate.randomNumber();
    test('should be a number', () => {
      expect(typeof generatedRandomNumber).toBe('number');
    });
    test('should be different every time', () => {
      expect(generatedRandomNumber).not.toBe(generate.randomNumber());
    });
  });

  describe('User', () => {
    const generatedUser = generate.user();
    test('should be different every time', () => {
      expect(generatedUser).not.toBe(generate.user());
    });
  });
});
