'use strict';

/**
 * @ngdoc overview
 * @name belongouiApp
 * @description
 * # belongouiApp
 *
 * Main module of the application.
 */
var app = angular
  .module('belongouiApp', [
    'belongouiApp.user',
    'belongouiApp.feed',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'upload',
    'ui.bootstrap',
    'ui.router',
    'base64', 
    'angularify.semantic.sidebar'

  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl:'views/about.html',
        controller:'AboutCtrl'
      })
      .state('upload', {
        url:'/upload',
        templateUrl:'views/upload.html',
        controller: 'UploadCtrl'
      })
      .state('mypics', {
        url:'/mypics',
        templateUrl:'views/mypict.html',
        controller: 'MypictCtrl'
      })
     .state('login', {
        url:'/login',
        onEnter:['$modal','$state', function($modal, $state, UserObject) {
          $modal.open({
            templateUrl:'views/modals/login.html',
            controller:'LoginCtrl',
            size:'lg',
            resolve: {
              // items passed to LoginCtrl
            }
          }).result.finally(function(){
              if (UserObject.authenticated){
                $state.go('mypics');
              } else {
                $state.go('welcome');
              }
              $state.go('welcome');
            });
        }]
      });

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
      var $state;
      $timeout(function () {
        $state = $injector.get('$state');
      });
      return {
        'responseError':function(error) {
          if (error.status === 401) {
            $state.go('login');
          }
        }
      };
    });

  });

app.run(function($state, $rootScope) { 

  /** Enable default Child. --> see user.modoules for an example. */
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      if(toState && toState.params && toState.params.autoActivateChild){
        $state.go(toState.params.autoActivateChild);
      }
    });
});