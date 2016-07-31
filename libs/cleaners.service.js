(function() {
  'use strict';
  var Service = {
    start: function(callback) {
      console.log('start cleaners service');
      $.ajax({
        url: 'http://10.32.188.251:8080/staff/true'
      });
      // call API for start
    },
    getRemaining: function(callback) {
      console.log('get remaing amount of water server');
      // call API for get remaining amount of water.
    }
  };
  module.exports = Service;
}());
