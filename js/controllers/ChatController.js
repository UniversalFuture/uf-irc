String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};
function getTime() {
	var d = new Date();
	return d.getHours() + ":" + d.getMinutes();
}

angular.module('uf-irc').controller('ChatController', ['$scope', 'ircService', function ($scope, ircService) {
	$scope.messages = [];
	$scope.newMessage = "";
	$scope.ircService = ircService;
	for (var i = 0; i < ircService.getChannels().length; i++) {
		$scope.messages[ircService.getChannels()[i]] = [];
	}
	ircService.addListener('message', function (from, to, message) {
		$scope.messages[to].push({ "from": from, "message": message, time: getTime()});
	});
	$scope.currentChannel = 0;
	$scope.sendMessage = function () {
		if (!$scope.newMessage.isEmpty()) {
			ircService.say(ircService.getChannels()[$scope.currentChannel], $scope.newMessage);
			$scope.messages[ircService.getChannels()[$scope.currentChannel]].push({ "from": ircService.getNick(), "message": $scope.newMessage, time: getTime() });
			$scope.newMessage = "";
		}
	};
}]);