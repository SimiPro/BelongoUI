'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('MainCtrl', function ($scope, user) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
