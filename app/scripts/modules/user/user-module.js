userModule = angular.module('belongouiApp.user', [
	'ui.router'
	]);

userModule.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
 	$stateProvider
	 	.state('user',{
	        url:'/user',
	        templateUrl:'views/user/user.html',
	        controller:'UserProfileCtrl'
	      })
	 	.state('user.details', {
	          url:'/details',
	          templateUrl:'views/user/user.details.html',
	          params: {
	          	autoActivateChild:'user.details.name'
	          }
	      })
	    .state('user.details.name', {
	    	url:'/name',
	    	templateUrl:'views/user/details/name.html'
	    })
	    .state('user.details.address', {
	    	url:'/address',
	    	templateUrl:'views/user/details/address.html'
	    })
	    .state('user.details.relations', {
	    	url:'/relations',
	    	templateUrl:'views/user/details/relations.html'
	    })
	    .state('user.details.aboutme', {
	    	url:'/aboutme',
	    	templateUrl:'views/user/details/aboutme.html'
	    });
});