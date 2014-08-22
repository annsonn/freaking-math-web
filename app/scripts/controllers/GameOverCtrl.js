'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:GameOverCtrl
 * @description
 * # GameOverCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .controller('GameOverCtrl', function ($scope, $location, $modalInstance, $route, $rootScope) {   
        
    $scope.restart = function restart() {      
      $route.reload();
      $modalInstance.dismiss();
    };
    
    $scope.goToStart = function goToMenu() {
      $modalInstance.dismiss();
      $location.path('/start');      
    };
    
  });
