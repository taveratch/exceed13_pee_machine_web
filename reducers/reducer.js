(function () {
	'use strict';
	var types = require('../constants');
	var service = require('../libs/cleaners.service');
	var now = new Date();
	var countdownService = require('../libs/countdown.service');
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	var initialState = {
		auto: false,
		hour: 0,
		minute: 0,
		second: 0,
		hour2: 0,
		minute2: 0,
		second2: 0,
		time: now,
		isCountingDown: false
	};

	var Reducer = function (state, action) {
		state = typeof state !== 'undefined' ? state : initialState;
		var newState = _.merge({}, state);
		var date = newState.time;
		switch (action.type) {
		case types.START:
			service.start();
			return _.merge(initialState, {
				auto: state.auto
			});
		case types.ENABLE_AUTO:
			console.log('enable auto');
			return _.merge(newState, {
				auto: true
			});
		case types.DISABLE_AUTO:
			console.log('disable auto');
			return _.merge(newState, {
				auto: false
			});
		case types.GET_REMAINING:
			service.getRemaining();
			break;
		case types.INCREASE:
			if (action.time === 'hour') {
				date.setHours(date.getHours() + 1);
				return _.merge(newState, {
					time: date
				});
			} else if (action.time === 'minute') {
				date.setMinutes(date.getMinutes() + 1);
				return _.merge(newState, {
					time: date
				});
			} else if (action.time === 'second') {
				date.setSeconds(date.getSeconds()+ 1);
				return _.merge(newState, {
					time: date
				});
			}
			break;
		case types.DECREASE:
			if (action.time === 'hour') {
				date.setHours(date.getHours() - 1);
				return _.merge(newState, {
					time: date
				});
			} else if (action.time === 'minute') {
				date.setMinutes(date.getMinutes() - 1);
				return _.merge(newState, {
					time: date
				});
			} else if (action.time === 'second') {
				date.setSeconds(date.getSeconds() - 1);
				return _.merge(newState, {
					time: date
				});
			}
			break;
		case types.COUNTDOWN:
			newState.time.setTime(newState.time.getTime() - 1000);
			return _.merge(newState, {
				time: newState.time,
				isCountingDown: true
			});
		case types.STOP_COUNTDOWN:
			countdownService.stop();
			return _.merge(newState, {
				isCountingDown: false
			});
		default:
			return state;
		}
	};
	module.exports = Reducer;
}());
