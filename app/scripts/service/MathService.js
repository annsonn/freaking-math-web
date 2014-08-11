'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.service:MathService
 * @description
 * # MathService
 * Service of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .service('MathService', function ($log) {   
    var service = {};
    
    service.makeEquation = function() {
      var result = '';
      
      // Left Side of Equation
      var firstNumber = Math.floor(Math.random()*10);
      var secondNumber =  Math.floor(Math.random()*10);
      var operation =  Math.floor(Math.random()*2);
      
      // Right Side of Equation
      var answer = (operation === 1) ? firstNumber+secondNumber : firstNumber-secondNumber;

      // Determine to show right or wrong answer
      var showCorrectAnswer = Math.floor(Math.random()*2);
      if (showCorrectAnswer === 0) {
        var varianceNumber = Math.floor(Math.random()*4);
        var varianceOperation = Math.floor(Math.random()*2);
        answer = (varianceOperation === 1) ? answer + varianceNumber : answer - varianceNumber;
      }
      
      operation = (operation === 1) ? '+' : '-';
      result = '' + firstNumber + ' ' + operation + ' ' + secondNumber + ' = ' + answer;
      
      $log.log('makeEquation:', result);
      return result; 
    };
    
    return service;
     
  });
