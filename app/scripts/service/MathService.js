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
      var equation = {};
      
      // Left Side of Equation
      equation.firstNumber = Math.floor(Math.random()*10);
      equation.secondNumber =  Math.floor(Math.random()*10);
      equation.operation =  Math.floor(Math.random()*2);
      
      // Right Side of Equation
      equation.answer = (equation.operation === 1) ? equation.firstNumber+equation.secondNumber : equation.firstNumber-equation.secondNumber;
      equation.isAnswerCorrect = true;

      // Determine to show right or wrong answer
      var showCorrectAnswer = Math.floor(Math.random()*2);
      if (showCorrectAnswer === 0) {
        var varianceNumber = Math.floor(Math.random()*4) + 1; //Answer should be wrong so it can't be 0
        var varianceOperation = Math.floor(Math.random()*2);
        equation.answer = (varianceOperation === 1) ? equation.answer + varianceNumber : equation.answer - varianceNumber;
        equation.isAnswerCorrect = false;
      }
      equation.string = '';
      equation.string = equation.string.concat(equation.firstNumber, (equation.operation === 1) ? '+' : '-',equation.secondNumber,'=',equation.answer);
      
      //$log.log('makeEquation:', equation);
      
      return equation;
    };
    
    return service;
     
  });
