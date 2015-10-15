angular.module('uf-irc').service('ircService', function () {
	return {
		server: "",
		nick: "",
		channels: [],
		client: undefined,
		setClient(cli) {
			this.client = cli;
		},
		getClient() {
			return this.client;
		},
		addListener(event, fn) {
			this.client.addListener(event, fn);
		},
		say(target, message) {
			this.client.say(target, message);
		},
		setServer(srv) {
			this.server = srv;
		},
		getServer() {
			return this.srv;
		},
		setNick(srv) {
			this.nick = srv;
		},
		getNick() {
			return this.nick;
		},
		addChannel(channel) {
			this.channels.push(channel);
		},
		removeChannel(index) {
			this.channels.splice(index, 1);
		},
		getChannels() {
			return this.channels;
		}
	}
});