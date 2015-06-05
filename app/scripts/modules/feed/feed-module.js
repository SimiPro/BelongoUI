feedModule = angular.module('belongouiApp.feed', [
	'ui.router'
	]);

feedModule.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
 	$stateProvider
	 	.state('feed',{
	        url:'/feed',
	        templateUrl:'views/feed/feed.html',
	        controller:'FeedCtrl'
	    });
});