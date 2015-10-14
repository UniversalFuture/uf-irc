var irc = require('irc');

angular.module('uf-irc').controller('LoginController', ['$scope', 'ircService', function ($scope, ircService) {
	$scope.ircService = ircService;
	$scope.newChannel = "#";
	$scope.addChannel = function () {
		if ($scope.newChannel && $scope.newChannel.indexOf('#') == 0) {
			ircService.channels.push($scope.newChannel);
			$scope.newChannel = "#";
		}
	};
	$scope.removeChannel = function (index) {
		ircService.channels.splice(index, 1);
	};
	$scope.login = function () {
		ircService.setClient(new irc.Client(ircService.server, ircService.nick, {
			channels: ircService.channels,
		}));
		document.location.href = "#/chat";
	};
}]);