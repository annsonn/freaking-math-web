'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('GameCtrl', function ($scope, $log, $route, $timeout, $rootScope, PlayerService, MathService) {   
    //$log.log('GameCtrl!');
    $scope.player = PlayerService.newPlayer();
    $scope.equation = MathService.makeEquation();   
    $scope.gameOver = false;         
    
    if(!$rootScope.topScore) {
      $rootScope.topScore = 0;
    }
    
    $scope.reset = function reset() {
      $route.reload();
    };
    
    $scope.validate = function validation(userAnswer) {
      if (userAnswer === $scope.equation.isAnswerCorrect) {
        $scope.player.score = $scope.player.score+1;
        $scope.equation = MathService.makeEquation();
        resetCountdown();
      }
      else {
        gameOver();
      }
    };
       
    $scope.counter = 0;
    var increment  = 25;
    var timeout = 300;
    $scope.onTimeout = function(){
        $scope.counter = $scope.counter + increment;
        countdown = $timeout($scope.onTimeout,timeout);
    };
    var countdown = $timeout($scope.onTimeout,timeout);
    
    function resetCountdown(){
      $scope.counter = 0;
      $timeout.cancel(countdown);
      countdown = $timeout($scope.onTimeout,timeout);
    }
    
    function gameOver() {
      $scope.gameOver = true;
      $timeout.cancel(countdown);
      if ($scope.player.score > $rootScope.topScore) {
        $rootScope.topScore = $scope.player.score;          
      }
    }
    
    $scope.$watch('counter', function(newValue) {
      if(newValue > (100 + increment)) {
        gameOver();
      }
    });
    
  });
