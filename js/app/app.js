define([
  'jquery',
  'bootstrap'
  ], function ($, bootstrap) {
    'use strict';

    var initialize = function () {
        $('body').append('<div id="content">Hello World</div>');
    };

    var currentTime = function () {
      var date = new Date();
      return [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
    };

    var displayTime = function () {
      var node = [
        '<div class="alert">',
          '<button type="button" class="close" data-dismiss="alert">&times;</button>',
          'The time is ',
          currentTime(),
        '</div>'
      ].join('');

      $('#content').html(node);
    };

    return {
      initialize: initialize,
      displayTime: displayTime
    }
  }
);
