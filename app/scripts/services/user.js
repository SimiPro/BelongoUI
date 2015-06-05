'use strict';

/**
 * @ngdoc service
 * @name belongouiApp.user
 * @description
 * # user
 * Service in the belongouiApp.
 */
angular.module('belongouiApp')
  .service('user', function ($resource,  $http, $base64, $cookieStore, UserObject) {
    var loginUrl = "http://localhost:8005/userservice/oauth/token?" +
      "client_id=:client_id" +
      "&username=:username" +
      "&password=:password" +
      "&grant_type=:grant_type";

    var user = {};
    this.user = user;

    this.loginGo = function(path, success, error) {
      var result = path.post(function(response) {
        $cookieStore.put('token', result.access_token);
        $http.defaults.headers.post.Authorization = 'Bearer: ' + result.access_token;
        UserObject.token = result.access_token;
        UserObject.refresh_token = result.refresh_token;
        UserObject.setAuthenticated(true);
        console.log('successfully loggedin, token: ', result, 'token', result.access_token);
        success(result.access_token);
      }, function(error){
        error(error);
        console.log('Password or Username wrong please try again');
      });
    }

    // just returns the path
    this.login = function(email, password) {
      UserObject.email = email;
      UserObject.password = password;
      return $resource(loginUrl, {
        client_id: 'curl',
        username: email,
        password: password,
        grant_type: 'password'
      }, {
        post: {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + $base64.encode('curl:curl')
          }
        }
      });
    };
  });
