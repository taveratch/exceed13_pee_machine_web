(function () {
	'use strict';
	var stores = {};
	var Service = {
		set: function (key, store) {
			if (stores.key) {
				throw new Error('Some store is already registered via key=' + key);
			}
			stores.key = store;
		},
		get: function (key) {
			if (!stores.key) {
				throw new Error('Store is not registered in the service');
			}
			return stores.key;
		},
		remove: function (key) {
			stores.key = null;
		}
	};
  module.exports = Service;
}());
