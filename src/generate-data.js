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

// Generate Password
const password = `.${faker.internet.password()}!`;

// Generate IP Address
const ipAddress = (country) => {
  if (!country) {
    return faker.internet.ip();
  }
};

// Generate Past Date
let pastDate = faker.date.past();

// Generate Recent Date
let recentDate = faker.date.recent();

// Generate Future Date
let futureDate = faker.date.future();

// Generate User
const user = {
  id: generateUUID(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: emailAddress(),
  password: password(),
  ipAddress: ipAddress(),
  createdAt: pastDate(),
  expireAt: futureDate(),
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
  uuid,
  password,
  emailAddress,
  ipAddress,
  pastDate,
  futureDate,
  recentDate,
  randomString,
  randomPhrase,
  user,
};
