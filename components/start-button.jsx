(function() {
  'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var countdownService = require('../libs/countdown.service');
  var actions = require('../actions');
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
  var Wrapper = React.createClass({
    handleClick: function() {
      var self = this;

      if(this.props.reducer.auto && !this.props.reducer.isCountingDown) {
        var timer = setInterval(function() {
          self.props.countdown();
          if(self.props.reducer.time.getHours() === 0 &&
            self.props.reducer.time.getMinutes() === 0 &&
            self.props.reducer.time.getSeconds() === 0) {
              self.props.start();
              clearInterval(timer);
            }
        },1000);
        countdownService.start(timer);
      }else {
        $('#start-button').addClass('start-button-clicked');
        setTimeout(function() {
          $('#start-button').removeClass('start-button-clicked');
        },2000);
        this.props.start();
      }
    },
    render: function() {
      return (
        <div onClick={this.handleClick} id="start-button" className="start-button pointer flex-center-y flex-center-x">
          <div className="">
            <span className="thin" style={{fontSize: "2em"}}>START</span>
          </div>
          <div className="remaining center flex-center-y flex-center-x">
            <img src="/assets/water-drop.png" className="img-responsive" style={{width:20,height:20, display:"initial"}}/>
            <span className="thin" style={{fontSize: "1.4em"}}>&nbsp;{this.props.remaining + " %"}</span>
          </div>
        </div>
      );
    }
  });
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
