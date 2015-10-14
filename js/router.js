angular.module('uf-irc').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			}).
			when('/chat', {
				templateUrl: 'views/chat.html',
				controller: 'ChatController'
			}).
			otherwise({
				redirectTo: '/login'
			});
	}]);