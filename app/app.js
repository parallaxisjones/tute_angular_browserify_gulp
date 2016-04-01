require('angular')
require('angular-ui-router')
require('angular-aria')
require('angular-animate')
require('angular-material')
require('leaflet')

var app = angular.module('app', ['ui.router', 'ngMaterial'])
require('./providers')
require('./services')
require('./directives')
require('./controllers')
require('./routes')
require('./config')
require('./run')

app.config([function(){



}])
app.run([function(){

}])

$stateProvider

  .state('about', {
    views: {
      'contents': {
        controller: fetch.controllers.app.inject(app),
        templateUrl: '/views/home.html'
      }
    }
  });