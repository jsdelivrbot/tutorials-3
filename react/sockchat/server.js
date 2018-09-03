var express = require('express');
var App = express();

// Socket connections and user info
var connections = [];
var users = [];

// Express App setup and start
App.use(express.static('./public'));
var portNumber = 3000;
var server = App.listen(portNumber);

// Socket.io setup
var io = require('socket.io').listen(server);

// All server handling stuff is here
io.sockets.on('connection', function(socket) {
	//DC
	socket.once('disconnect', function(){
		for (var i = 0; i < users.length; i++) {
			if (users[i].id === this.id)
				users.splice(i, 1);
		}
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log('Disconnected: %s sockets connected', connections.length);
		io.emit('disconnect', users);
	});

	//messageAdded
	socket.on('messageAdded', function(payload){
		var newMessage = {
			timeStamp: payload.timeStamp,
			text: payload.text,
			user: payload.user
		};

		io.emit('messageAdded', newMessage);
	});

	//userJoined
	socket.on('userJoined', function(payload){
		var newUser = {
			id: this.id,
			name: payload.name
		};

		users.push(newUser);
		io.emit('userJoined', users);
		console.log('user joined: ' + payload.name);
	});

	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);
});

console.log('Server is running on port', portNumber);
