const mongoose = require('mongoose');

const userSchedma = mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});

const users = module.exports = mongoose.model('users', userSchedma);