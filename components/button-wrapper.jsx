(function() {
  'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
  var countdownService = require('../libs/countdown.service');
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
  var Wrapper = React.createClass({
    getInitialState: function() {
      return {
        remaining: 0
      };
    },
    componentDidMount: function() {
      var self = this;
      setInterval(function(){
        $.ajax({
          url: 'http://10.32.188.251:8080/staff'
        })
        .done(function(data) {
          var remaining = parseFloat(data);
          if(isNaN(remaining)) { return; }
          self.setState({remaining: remaining});
        });
      },1000);
    },
    render: function() {
      var StartButton = require('./start-button.jsx');
      var CancelButton = require('./cancel-button.jsx');
      var view;
      if(this.props.reducer.isCountingDown) {
        view = <CancelButton remaining={this.state.remaining}/>;
      }else {
        view = <StartButton remaining={this.state.remaining}/>;
      }
      return view;
    }
  });
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
