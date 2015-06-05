'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('LoginCtrl', function ($scope, $modalInstance, user, $cookieStore, UserObject, $state, $http) {
    //TODO: that im actually not every time have to log in
    $scope.email = 'simi';
    $scope.password = 'pro';


    $scope.login = function() {
      var login = user.login($scope.email, $scope.password);
      user.loginGo(login, function(token){
        // success
         $scope.$close(UserObject);
      }, function(error) {
        // error
      })
    };
    $scope.register = function() {
      console.log('Register');
    };
    $scope.cancel = function() {
      $state.go('welcome');
      $scope.$dismiss();
    };
    $scope.forgot = function() {
      console.log('forgot');
    };



  });
