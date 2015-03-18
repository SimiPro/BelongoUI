'use strict';

/**
 * @ngdoc service
 * @name belongouiApp.user
 * @description
 * # user
 * Service in the belongouiApp.
 */
angular.module('belongouiApp')
  .service('user', function ($resource,  $http, $base64, $cookieStore) {
    var loginUrl = "http://localhost:8005/userservice/oauth/token?" +
      "client_id=:client_id" +
      "&username=:username" +
      "&password=:password" +
      "&grant_type=:grant_type";

    var user = {};
    this.user = user;

    this.login = function(email, password) {
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
