'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('SidebarCtrl', function ($scope) {

     $scope.user = {
        name:'Simon Huber'
     };
     
  });
