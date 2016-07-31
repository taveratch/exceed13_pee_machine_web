(function() {
  'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
	var mapStateToProps = function(state) {
		return {reducer: state.reducer};
	};
	var mapDispatchToProps = function(dispatch) {
		return bindActionCreators(actions, dispatch);
	};
  var Wrapper = React.createClass({
    handleClick: function() {
      this.props.stopCountdown();
    },
    render: function() {
      return <div onClick={this.handleClick} className="start-button cancel-button pointer flex-center-y flex-center-x">
        <div>
          <span className="thin" style={{fontSize: "2em"}}>STOP</span>
        </div>
        <div className="remaining center flex-center-y flex-center-x">
          <img src="/assets/water-drop.png" className="img-responsive" style={{width:20,height:20, display:"initial"}}/>
          <span className="thin" style={{fontSize: "1.4em"}}>&nbsp;{this.props.remaining + " %"}</span>
        </div>
      </div>;
    }
  });
  module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
