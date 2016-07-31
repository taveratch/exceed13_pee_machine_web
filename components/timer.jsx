(function() {
	'use strict';
  var switcher = require('../libs/switcher');
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
  var Digit = require('./digit.jsx');
  var mapStateToProps = function(state) {
    return {reducer: state.reducer};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
	var Wrapper = React.createClass({
		componentDidMount: function() {
			switcher.init();
      switcher.bindEnable(this.props.enableAuto);
      switcher.bindDisable(this.props.disableAuto);
		},
		render: function() {
      var countDownView;
      if(this.props.reducer.auto) {
        $('#countdown-panel').fadeIn();
        $('#countdown-panel').fadeIn("slow");
        $('#countdown-panel').fadeIn(3000);
      }
			return (
				<div style={{marginTop: 20}}>
					<div className="flex-center-x flex-center-y">
						<span>AUTO&nbsp;&nbsp;</span><input id="switch" type="checkbox" name="check-1" value="4" className="lcs_check" autoComplete="off"/>
					</div>
          <div id="countdown-panel" className="flex-center-x" style={{marginTop: 30, display: this.props.reducer.auto ? 'flex' : 'none'}} >
            <Digit type="hour" mul={3600}/>
            <Digit type="minute" mul={60}/>
            <Digit type="second" mul={1} />
          </div>
				</div>
			);
		},
	});
	module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
