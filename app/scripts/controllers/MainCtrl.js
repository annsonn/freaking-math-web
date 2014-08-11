'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('MainCtrl', function ($scope, $log, MathService) {   
    $scope.equation = MathService.makeEquation();
    $scope.startGame = function() {
      $log.log('Start Game!');
    };
  });
