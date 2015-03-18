'use strict';

/**
 * @ngdoc function
 * @name belongouiApp.controller:MypictCtrl
 * @description
 * # MypictCtrl
 * Controller of the belongouiApp
 */
angular.module('belongouiApp')
  .controller('MypictCtrl', function ($scope, $resource) {
    var url = 'http://localhost:8000/image/user?token=:token';
    var Pics = $resource(url,{token:'@token'});
    var pics = Pics.get({token:'notoken'}, function() {
      $scope.pics = pics;
    });
  });
