const compose = require('../compose');

const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = clockTime => ({ ...clockTime, ampm: clockTime.hours >= 12 ? 'PM' : 'AM' });

module.exports = compose(appendAMPM, civilianHours);
