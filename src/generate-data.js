const generateUUID = require('uuid/v4');
const faker = require('faker');

// Functions ------------------------------------------------------------------------------------------------

// Generate Random Number Only String
const dateAsNumber = () => new Date().toISOString().replace(/[^0-9]/g, '');

// Generate Email Address
const emailAddress = () => {
  const email = `test-${dateAsNumber}-${Math.floor(
    Math.random() * 999999,
  )}@testingtoolkit.co.uk`;
  return email;
};

// Generate Password
const password = () => `.${faker.internet.password()}!`;

// Generate IP Address
const ipAddress = (country) => {
  if (!country) {
    return faker.internet.ip();
  }
};

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
const randomString = (numberOfWords = 1, seperator = ' ') =>
  faker.random.words(numberOfWords).replace(' ', seperator);

// Exports --------------------------------------------------------------------------------------------------

module.exports = {
  emailAddress,
  password,
  ipAddress,
  pastDate,
  futureDate,
  recentDate,
  randomString,
  dateAsNumber,
  user,
};
