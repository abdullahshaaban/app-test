//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//includes to the backend API
const route = require('./routes/route.js');
const users = require('./routes/users.js');

//port number for backend
const port = 3000;

//Connect to MongoDB
mongoose.connection.openUri('mongodb://abdallahshaban:whatyousaid@ds149433.mlab.com:49433/picture-app');


//connection successful message
mongoose.connection.on('connected', ()=>{
	console.log('Connected to DB');
})

//connection unsuccessful message
mongoose.connection.on('error', ()=>{
	if(err)
	{
		console.log('error m3allem' + err);
	}
});

app.use(cors());

app.use(bodyparser.json());

//This is needed to determine the relative path used for res.send
app.use(express.static(path.join(__dirname, 'public')));


//sets the path of the included backend file
app.use('/api', route);
app.use('/users', users);
app.get('/',(req, res)=>{
	res.send('foobar');
});

app.listen(port,()=>{
	console.log('server started at port ' + port);

});