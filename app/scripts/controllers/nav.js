'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('NavCtrl', function ($scope, UserObject) {
      UserObject.registAuthChanched(function(auth) {
        $scope.authenticated = auth;
      });
      $scope.authenticated = UserObject.authenticated;
  });
