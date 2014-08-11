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
      $scope.startTimer();
    };
    
    $scope.validate = function validation(userAnswer) {
      if (userAnswer === $scope.equation.isAnswerCorrect) {
        $scope.player.score = $scope.player.score+1;
        $scope.equation = MathService.makeEquation();
        $scope.$broadcast('timer-clear');
        $scope.$broadcast('timer-start');
      }
      else {
        $scope.gameOver = true;
        $scope.$broadcast('timer-stop');
        if ($scope.player.score > $scope.topScore) {
          $scope.topScore = $scope.player.score;          
        }
      }
    };
    
    $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
    };
    $scope.startTimer();
    
    $scope.$on('timer-stopped', function (){
      $scope.gameOver = true;
    });
    
  });
