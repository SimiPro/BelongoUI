pictureModule = angular.module('belongouiApp.picture', [
	'ui.router'
	]);

pictureModule.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
 	$stateProvider
	 	.state('picture',{
	        url:'/pictures',
	        templateUrl:'views/pictures/user.html',
	        controller:'UserProfileCtrl'
	    });
});