'use strict';

var methods = require("./methods");

module.exports = function(server) {

	server.get('/api/tickets', methods.index);

	server.post('/api/tickets', methods.create);
};
