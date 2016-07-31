(function() {
  'use strict';
  var countdownAction;
  var timer;
  var Service = {
    start: function(action) {
      timer = action;
    },
    stop: function() {
      clearInterval(timer);
    }
  };
  module.exports = Service;
}());
