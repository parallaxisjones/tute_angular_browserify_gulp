exports.inject = function(app) {
	fetch.events.config.inject(app);
  	app.factory('fetch.feature.service', exports.factory);
  	
  	return exports.factory;
};

exports.factory = function FeatureFactory($rootScope, JobService, ProjectService, LeafletService) {
	$scope.regularAngular = 'Hello!';
};