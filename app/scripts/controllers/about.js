'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
