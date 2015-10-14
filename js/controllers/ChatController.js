angular.module('uf-irc').controller('ChatController', ['$scope', 'ircService', function ($scope, ircService) {
	$scope.messages = [];
	ircService.client.addListener('message', function (from, to, message) {
		alert(from + "(to " + to + "): \"" + message + "\"");
	});
}]);