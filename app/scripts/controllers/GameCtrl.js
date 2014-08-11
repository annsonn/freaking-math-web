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
    $scope.gameOver = false;
    
    $scope.topScore = 0;
    
    $scope.reset = function reset() {
      $scope.player = PlayerService.newPlayer();
      $scope.equation = MathService.makeEquation();
      $scope.gameOver = false;
    };
    
    $scope.validate = function validation(userAnswer) {
      if (userAnswer === $scope.equation.isAnswerCorrect) {
        $scope.player.score = $scope.player.score+1;
        $scope.equation = MathService.makeEquation();
      }
      else {
        $scope.gameOver = true;
        if ($scope.player.score > $scope.topScore) {
          $scope.topScore = $scope.player.score;
        }
      }
    };
    
  });
