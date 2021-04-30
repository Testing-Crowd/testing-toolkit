const generateUUID = require('uuid/v4');
const faker = require('faker');

// Functions ------------------------------------------------------------------------------------------------

// Generate UUID
const uuid = generateUUID();

// Generate First Name
const firstName =faker.name.firstName();

// Generate Last Name
const lastName =faker.name.lastName();

// Generate Password
const password = faker.internet.password();

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

// Generate Phrase 
const phrase = faker.random.words(3).replace(' ', '-');

// Generate Recent Date
let recentDate = faker.date.recent();

// Generate Future Date
let futureDate = faker.date.future();

// Exports --------------------------------------------------------------------------------------------------
module.exports = {
  uuid,
  firstName,
  lastName,
  password,
  emailAddress,
  ipAddress,
  phrase,
};
