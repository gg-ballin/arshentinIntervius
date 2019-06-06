'use strict';
var path = require('path');
var fs = require('fs');

module.exports = function(server) {
	fs.readdirSync(__dirname).forEach(function(folder) {
		if (fs.lstatSync(__dirname+"/"+folder).isDirectory()) {
			require("./"+folder)(server);
		}
	});
};
