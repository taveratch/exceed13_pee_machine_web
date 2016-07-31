(function() {
  'use strict';
  var combineReducers = Redux.combineReducers;
  var reducer = require('./reducer');
  var reducers = combineReducers({reducer: reducer});
  module.exports = reducers;
}());
