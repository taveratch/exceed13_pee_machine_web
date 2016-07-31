(function () {
	'use strict';
  var stores = require('./store.service');
  var enableAction;
  var disableAction;
	var Switcher = {
		init: function () {
			$('#switch').lc_switch();
			$('body').delegate('.lcs_check', 'lcs-statuschange', function () {
				var status = ($(this).is(':checked')) ? 'checked' : 'unchecked';
				if(status === 'checked') {
          enableAction();
        }else {
          disableAction();
        }
			});
		},
    bindEnable: function(action) {
      enableAction = action;
    },
    bindDisable: function(action) {
      disableAction = action;
    }
	};
	module.exports = Switcher;
}());
