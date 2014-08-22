'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('MenuCtrl', function ($scope, $location, $log, $rootScope, MathService) {
    $scope.difficulty = '';
    
    $scope.startGame = function() {
      //$log.log('Start Game!');
      MathService.updateDifficulty($scope.difficulty);
      $rootScope.currentDifficulty = $scope.difficulty;
      $rootScope.topScores = {
        Easy: {
          name: 'Easy',
          score: 0
        },
        Medium: {
          name: 'Medium',
          score: 0
        },
        Hard: {
          name: 'Hard',
          score: 0
        }
      };
      $location.path('/game');
    };
  });
