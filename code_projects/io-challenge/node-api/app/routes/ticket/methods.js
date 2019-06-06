'use strict';
var UserCtrl = require("../../controller/ticket");

var path = require('path');

exports.index = function(req, res) {
	UserCtrl.index(req).then(function(data) {
		res.send(data).status(200);
	}, function(err) {
		console.error(err);
		res.send(err.code || 500, err.error || err);
	});
};

exports.create = function(req, res) {
	UserCtrl.create(req).then(function(data) {
		res.send(data).status(200);
	}, function(err) {
		console.error(err);
		res.send(err.code || 500, err.error || err);
	});
};