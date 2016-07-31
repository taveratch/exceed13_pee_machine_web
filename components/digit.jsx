(function() {
	'use strict';
	var bindActionCreators = Redux.bindActionCreators;
	var actions = require('../actions');
	var Circle = require('rc-progress').Circle;
	var mapStateToProps = function(state) {
		return {reducer: state.reducer};
	};
	var mapDispatchToProps = function(dispatch) {
		return bindActionCreators(actions, dispatch);
	};
	var Wrapper = React.createClass({
		increase: function() {
			this.props.increase(this.props.type);
		},
		decrease: function() {
			this.props.decrease(this.props.type);
		},
		render: function() {
			var now;
      var max;
      var postfix;
			switch (this.props.type) {
				case 'hour':
					now = this.props.reducer.time.getHours();
          max = 100;
          postfix = "hour";
					break;
				case 'minute':
					now = this.props.reducer.time.getMinutes();
          max = 60;
          postfix = "mins";
					break;
        case 'second':
          now = this.props.reducer.time.getSeconds();
          max = 60;
          postfix = "secs";
          break;
			}
			var percent = 100.0 / ((max === 0 ? 1 : max)) * (now === 0 ? 1 : now);
      var upView;
      if(now < 59){
        upView = <img onClick={this.increase} src='/assets/up.png' className="img-responsive volumn pointer"/>;
      }
      var downView;
      if(now > 0) {
        downView = <img onClick={this.decrease} src='/assets/down.png' className="img-responsive volumn pointer"/>;
      }
			return (
				<div style={{
					width: 150,
					height: 150,
				}}>
					<div className="flex-center-x" style={{height: 15}}>
            {upView}
					</div>
					<div style={{margin: 20, position: 'relative'}}>
						<Circle percent={percent} strokeWidth="4" strokeColor="#2ECC71" trailColor="#D5D5D5"/>
            <div className="inside-circle" >
              <span style={{fontSize: "2em"}}>{now}</span>
              <br></br>
              <span>{postfix}</span>
            </div>
					</div>
					<div className="flex-center-x" style={{height: 15}}>
						{ downView }
					</div>
				</div>
			);
		},
	});
	module.exports = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}());
