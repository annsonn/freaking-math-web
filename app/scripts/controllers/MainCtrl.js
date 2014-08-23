'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('MainCtrl', function ($scope, $location, $log, $rootScope, MathService) {   
    
    var resetTopScores = function resetTopScores() {
      return {
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
    }
    
    $scope.equation = MathService.makeEquation();       
    $scope.goToMenu = function() {
      //$log.log('Start Game!');
      $location.path('/menu');
    };
    
    if (!$rootScope.topScores) {
      $rootScope.topScores = resetTopScores();
    }
        
  });
