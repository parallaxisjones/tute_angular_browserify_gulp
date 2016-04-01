exports.inject = function(app) {
	fetch.service.feature.inject(app);
	require('../services/featureFactory').inject(app);
  	app.controller('fetch.app.controller', exports.controller);
  	
  	return exports.controller;
};

exports.controller = function AppController($rootScope, $scope, $state, $mdToast, $mdDialog, $document, featureFactory, FETCH_EVENTS) {
	$scope.regularAngular = 'Hello!';
};