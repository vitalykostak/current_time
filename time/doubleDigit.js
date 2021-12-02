const compose = require('../compose');

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key],
});

const doubleDigit = () =>
  compose(prependZero('hours'), prependZero('minutes'), prependZero('seconds'));

module.exports = doubleDigit;
