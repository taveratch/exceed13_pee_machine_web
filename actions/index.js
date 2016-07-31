(function() {
  'use strict';
  var types = require('../constants');
  var Actions = {
    start: function() {
      return {
        type: types.START
      };
    },
    enableAuto: function() {
      return {
        type: types.ENABLE_AUTO
      };
    },
    disableAuto: function() {
      return {
        type: types.DISABLE_AUTO
      };
    },
    getRemaining: function() {
      return {
        type: types.GET_REMAINING
      };
    },
    increase: function(time) {
      return {
        type: types.INCREASE,
        time: time
      };
    },
    decrease: function(time) {
      return {
        type: types.DECREASE,
        time: time
      };
    },
    countdown: function() {
      return {
        type: types.COUNTDOWN
      };
    },
    stopCountdown: function() {
      return {
        type: types.STOP_COUNTDOWN
      };
    }
  };
  module.exports = Actions;
}());
