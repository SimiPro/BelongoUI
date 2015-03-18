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
    $scope.email = "user";
    $scope.password = "password";


    $scope.login = function() {
      var login = user.login($scope.email, $scope.password);

      var result = login.post(function(response){
        $cookieStore.put('token', result.access_token);
        $http.defaults.headers.post.Authorization = 'Bearer: ' + result.access_token;
        UserObject.email = $scope.email;
        UserObject.password =  $scope.password;
        UserObject.token = result.access_token;
        UserObject.refresh_token = result.refresh_token;
        UserObject.setAuthenticated(true);
        console.log("successfully loggedin, token: ", result, "token", result.access_token);
        $scope.$close(UserObject)

      }, function(error){
        console.log("Password or Username wrong please try again");
      });
    };
    $scope.register = function() {
      console.log("Register");
    };
    $scope.cancel = function() {
      $state.go('welcome');
      $scope.$dismiss();
    };
    $scope.forgot = function() {
      console.log("forgot");
    }



  });
