angular.module('uf-irc').service('ircService', function() {
	return {
		server: "",
		nick: "",
		channels: [],
		client: undefined,
		setClient: function(cli) {
			client = cli;
		}
	}
});