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
    'ngRoute', 'ui.bootstrap'
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
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
