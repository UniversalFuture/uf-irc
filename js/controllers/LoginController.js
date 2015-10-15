var irc = require('irc');

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

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
	$scope.no = {
		server: false,
		nick: false,
		channels: false
	};
	$scope.loading = false;
	$scope.login = function () {
		if (!ircService.server.isEmpty() && !ircService.nick.isEmpty() && ircService.channels.length > 0) {
			$scope.no = {
				server: false,
				nick: false,
				channels: false
			};
			$scope.loading = true;
			ircService.setClient(new irc.Client(ircService.server, ircService.nick, {
				channels: ircService.channels,
			}));
			document.location.href = "#/chat";
			$(".menu.tab").tab();
		} else {
			$scope.no.server = ircService.server.isEmpty();
			$scope.no.nick = ircService.nick.isEmpty();
			$scope.no.channels = ircService.channels.length == 0;
		}
	};
	$('.message .close')
		.on('click', function () {
			$(this)
				.closest('.message')
				.transition('fade');
		})
	;
}]);