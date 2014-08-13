'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('MainCtrl', function ($scope, $location, $log, MathService) {   
    $scope.equation = MathService.makeEquation();
    $scope.startGame = function() {
      //$log.log('Start Game!');
      $location.path('/game');
    };
  });
