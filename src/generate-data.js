const generateUUID = require('uuid/v4');
const faker = require('faker');

// Functions ------------------------------------------------------------------------------------------------

// Generate Email Address
const emailAddress = () => {
  const email = `test-${new Date()
    .toISOString()
    .replace(/[^0-9]/g, '')}-${Math.floor(
    Math.random() * 999999,
  )}@testingtoolkit.co.uk`;
  return email;
};

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
    password: `.${faker.internet.password()}!`,
    ipAddress: ipAddress(),
    createdAt: pastDate(),
    expireAt: futureDate(),
  };
};

// Generate String
const randomString = faker.fake(
  '{{random.words}}-{{random.words}}-{{random.words}}',
);

// Generate Phrase
const randomPhrase = faker.fake(
  '{{random.words}}-{{random.words}}-{{random.words}}',
);

// Exports --------------------------------------------------------------------------------------------------
module.exports = {
  emailAddress,
  ipAddress,
  pastDate,
  futureDate,
  recentDate,
  randomString,
  randomPhrase,
  user,
};
