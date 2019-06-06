'use strict';
const Ticket 		= require('../model/ticket');
const Q 		= require('q');

exports.index = function(data) {
	return Q.Promise(function(resolve, reject) {
		Ticket.find()
		.exec((err, tickets) => {
				if (err) return reject({ code: 500, error: err });

				resolve(tickets)
		});
	});
};


exports.create = function(data) {
	return Q.Promise(function(resolve, reject) {
		Ticket.findOne().sort('-createdOn').exec((error, lastTicket) =>{
			if(error) return reject({ code: 404, error })

			let code =  lastTicket ? lastTicket.code + 1 : 1;

			let payload = Object.assign(data.body, {code})

			Ticket.create(payload, (err, ticket) => {
				if (err) return reject({ code: 500, error: err });
				resolve(ticket.toJSON());
			}); 


		})
	});
}
