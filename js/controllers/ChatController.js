angular.module('uf-irc').controller('ChatController', ['$scope', 'ircService', function ($scope, ircService) {
	$scope.messages = [];
	$scope.ircService = ircService;
	for (var i = 0; i < ircService.channels.length; i++) {
		$scope.messages[ircService.channels[i]] = [];
	}
	ircService.client.addListener('message', function (from, to, message) {
		$scope.messages[to].push({ "from": from, "message": message });
	});
}]);