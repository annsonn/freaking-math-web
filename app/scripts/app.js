'use strict';

/**
 * @ngdoc overview
 * @name freakingMathWebApp
 * @description
 * # freakingMathWebApp
 *
 * Main module of the application.
 */
angular
  .module('freakingMathWebApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
