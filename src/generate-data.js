const generateUUID = require('uuid/v4');
const faker = require('faker');

// Functions ------------------------------------------------------------------------------------------------

// Generate Random Number Only String
const dateAsNumber = () => new Date().toISOString().replace(/[^0-9]/g, '');

// Generate Number
const randomNumber = () => Math.floor(Math.random() * 999999);

// Generate Email Address
const emailAddress = () =>
  `test-${dateAsNumber()}-${randomNumber()}@testingtoolkit.co.uk`;

// Generate Password
const password = () => `.${faker.internet.password()}!`;

// Generate IP Address
const ipAddress = (country) => faker.internet.ip();

// Generate Past Date
const pastDate = () => faker.date.past();

// Generate Recent Date
const recentDate = () => faker.date.recent();

// Generate Future Date
const futureDate = () => faker.date.future();

// Generate User
const user = () => {
  return {
    id: generateUUID(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: emailAddress(),
    password: password(),
    ipAddress: ipAddress(),
    createdAt: pastDate(),
    expireAt: futureDate(),
  };
};

// Generate String
const randomString = (numberOfWords = 1, seperator = ' ') => {
  let generatedString = '';
  let i;

  const getString = () => {return faker.random.word().split(' ')[0]};

  generatedString = generatedString.concat(getString());

  for (i = 0; i < numberOfWords - 1; i++) {
    generatedString = generatedString.concat(seperator, getString())
  }

  return generatedString;
}

// Exports --------------------------------------------------------------------------------------------------

module.exports = {
  emailAddress,
  password,
  ipAddress,
  pastDate,
  futureDate,
  recentDate,
  randomString,
  randomNumber,
  dateAsNumber,
  user,
};
