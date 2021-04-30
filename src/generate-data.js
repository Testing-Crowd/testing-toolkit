const generateUUID = require('uuid/v4');
const faker = require('faker');

// Functions ------------------------------------------------------------------------------------------------

// Generate UUID
const uuid = () => generateUUID();

// Generate First Name
const firstName = () => faker.name.firstName();

// Generate Last Name
const lastName = () => faker.name.lastName();

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

// Exports --------------------------------------------------------------------------------------------------
module.exports = {
  emailAddress,
  ipAddress,
  lastName,
  firstName,
  uuid,
};
