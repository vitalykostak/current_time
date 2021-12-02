const compose = require('../compose');

const convertToCivilianHours = require('./convertToCivilianHours');
const getCurrentTime = require('./getCurrentTime');
const serializeTime = require('./serializeTime');
const doubleDigit = require('./doubleDigit');
const format = require('./format');
const oneSecond = require('./oneSecond');

const clear = () => console.clear();

const display = target => message => target(message);

module.exports = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeTime,
      convertToCivilianHours,
      doubleDigit(),
      format('hh : mm : ss  ampm'),
      display(console.log)
    ),
    oneSecond()
  );
