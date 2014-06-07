define([], function () {
  'use strict';

  var isNotANumber = function (x) {
    return typeof x != 'number'
  };

  var produceFarenheit = function (celsius) {
    return (celsius * 9 / 5) + 32;
  };

  var toFahrenheit = function (celsius) {
    return (isNotANumber(celsius) ? null : produceFarenheit(celsius));
  };

  return {
    toFahrenheit: toFahrenheit
  }
});
