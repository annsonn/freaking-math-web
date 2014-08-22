'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('MenuCtrl', function ($scope, $location, $log, MathService) {
    $scope.difficulty = '';
    
    $scope.startGame = function() {
      //$log.log('Start Game!');
      MathService.updateDifficulty($scope.difficulty);
      $location.path('/game');
    };
  });
