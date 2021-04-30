const generateUUID = require('uuid/v4');
const faker = require('faker');

const generateID = () => generateUUID();

const generateFirstName = () => faker.name.firstName();

const generateLastName = () => faker.name.lastName();

const generateEmail = () => {
  const email = `test${new Date()
    .toISOString()
    .replace(/[^0-9]/g, '')}-${Math.floor(
    Math.random() * 999999,
  )}@testingtoolkit.com`;
  return email;
};

const generateIPAddress = (country) => {
  if (!country) {
    return faker.internet.ip();
  }
};

module.exports = {
  generateEmail,
  generateFirstName,
  generateLastName,
  generateIPAddress,
  generateID,
};
