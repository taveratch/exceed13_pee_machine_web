(function() {
	'use strict';
  var StartButton = require('./button-wrapper.jsx');
  var Timer = require('./timer.jsx');
  var App = React.createClass({
		render: function() {
			return (
				<div>
          <div className="flex-center-x">
            <StartButton />
          </div>
          <div className="flex-center-x">
            <Timer />
          </div>
				</div>
			);
		}
	});
	module.exports = connect()(App);
}());
