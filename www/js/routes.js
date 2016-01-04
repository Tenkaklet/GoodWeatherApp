"use strict";
angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })





    .state('weather', {
      url: '/weather/:position',
      templateUrl: 'templates/weather.html',
      controller: 'weatherCtrl'
    })
    .state('4dayForecast', {
      url: '/4dayForecast/:position',
      templateUrl: 'templates/4dayForecast.html',
      controller: 'fourCtrl'
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
