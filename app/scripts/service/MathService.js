'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .service('MathService', function ($log) {   
    var service = {};
    
    service.makeEquation = function() {
      var result = '1+1=2';
      $log.log('makeEquation:', result);
      return result; 
    };
    
    return service;
     
  });
