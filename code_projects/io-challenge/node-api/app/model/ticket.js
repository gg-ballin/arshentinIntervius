// Load required packages
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({

    title : { type: String, required: true },

    description:  { type: String, required: true },

    coords : [{ type: Number, required: true }],

    code : { type: Number, required: true },

    createdOn : { type: Date, default: Date.now }

});

module.exports = mongoose.model('Ticket', TicketSchema);

