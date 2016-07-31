var React = require("react");
var ReactDOM = require("react-dom");

(function() {
  'use strict';
    var Provider = ReactRedux.Provider;
    var reducers = require('../reducers');
    var createStore = Redux.createStore;
    var store = createStore(reducers);
    var storeService = require('../libs/store.service');
    storeService.set('store',store);
    module.exports = React.createClass({
      render: function() {
        /* Components */
        var App = require('./app.jsx');
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
