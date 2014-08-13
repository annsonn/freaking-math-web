'use strict';

/**
 * @ngdoc function
 * @name freakingMathWebApp.service:PlayerService
 * @description
 * # PlayerService
 * Service of the freakingMathWebApp
 */
angular.module('freakingMathWebApp')
  .service('PlayerService', function ($log) {   
    var service = {};
    
    service.newPlayer = function newPlayer() {
      //$log.log('newPlayer!');
      var result = {};
      result.score = 0;      
      return result; 
    };
    
    return service;
     
  });
