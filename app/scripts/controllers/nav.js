'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('NavCtrl', function ($scope, UserObject, user) {
  	 $scope.username = "";
  	 $scope.password = "";

      UserObject.registAuthChanched(function(auth) {
        $scope.authenticated = auth;
      });
      $scope.authenticated = UserObject.authenticated;

      $scope.onLogin = function() {
      	var login = user.login($scope.username, $scope.password);
      	user.loginGo(login, function(token) {
      	}, function(error) {
        // error
      });
      }
  });
