const generateUUID = require('uuid/v4');
const faker = require('faker');
const ipCountries = require('../data/ip-countries.json');

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
  country = country.toUpperCase();
  if (!ipCountries[country]) {
    throw new Error(`Country code ${country} is not defined`);
  }
  return ipCountries[country][
    faker.random.number({ min: 0, max: ipCountries[country].length - 1 })
  ];
};

module.exports = {
  generateEmail,
  generateFirstName,
  generateLastName,
  generateIPAddress,
  generateID,
};
