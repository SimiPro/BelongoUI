'use strict';

/**
 * @ngdoc service
 * @name belongouiApp.UserObject
 * @description
 * # UserObject
 * Service in the belongouiApp.
 */
angular.module('belongouiApp')
  .service('UserObject', function () {
    this.email = '';
    this.password = '';
    this.token = '';
    this.refresh_token = '';
    var authenticated = false;
    var callbacks = [];

    this.setAuthenticated = function(auth) {
      authenticated = auth;
      callbacks.forEach(function(callback) {
        callback(auth);
      });
    };

    this.isAuthenticated = function() {
      return authenticated;
    }

    this.registAuthChanched = function(callback) {
      callbacks[callbacks.length] = callback;
    };

  });
