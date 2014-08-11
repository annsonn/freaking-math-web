'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('GameCtrl', function ($scope, $log, PlayerService, MathService) {   
    $log.log('GameCtrl!');
    $scope.player = PlayerService.newPlayer();
    $scope.equation = MathService.makeEquation();
    $scope.timer = '100';
    $scope.gameOn = true;
    
    $scope.validate = function validation(userAnswer) {
      if (userAnswer === $scope.equation.isAnswerCorrect) {
        $scope.player.score = $scope.player.score+1;
        $scope.equation = MathService.makeEquation();
      }
      else {
        $scope.gameOn = false;
      }
    };
    
  });
