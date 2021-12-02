const format = format => clockTime =>
  format
    .replace('hh', clockTime.hours)
    .replace('mm', clockTime.minutes)
    .replace('ss', clockTime.seconds)
    .replace('ampm', clockTime.ampm);

module.exports = format;
