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
    
    var operations = ['+', '-', 'x'];
    var service = {};
    
    service.difficultyLevels = {
      easy: ['+'],
      medium: ['+', '-'],
      hard: ['+', '-', 'x']
    };   
    
    service.difficulty = service.difficultyLevels.medium;
    
    service.updateDifficulty = function(newDifficulty) {
      service.difficulty = service.difficultyLevels[newDifficulty];
    };
    
    var calculateAnswer = function calculateAnswer(firstNumber, operation, secondNumber) {
      if (operation === 0) {
        return firstNumber + secondNumber;
      }
      if (operation === 1) {
        return firstNumber - secondNumber;
      }
      if (operation === 2) {
        return firstNumber * secondNumber;
      }
      
    };
    
    service.makeEquation = function() {
      var equation = {};
      
      // Left Side of Equation
      equation.firstNumber = Math.floor(Math.random()*10);
      equation.secondNumber =  Math.floor(Math.random()*10);
      equation.operation =  Math.floor(Math.random()*service.difficulty.length);
      
      // Right Side of Equation      
      equation.answer = calculateAnswer(equation.firstNumber, equation.operation, equation.secondNumber);
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
      equation.string = equation.string.concat(equation.firstNumber, operations[equation.operation],equation.secondNumber,'=',equation.answer);
      
      //$log.log('makeEquation:', equation);
      
      return equation;
    };
    
    return service;
     
  });
