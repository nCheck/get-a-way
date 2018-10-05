var express               = require('express');
var parser                = require('body-parser');
var mongoose              = require('mongoose');


const dir                 = __dirname;
var port = process.env.PORT || 6007;


//Getting Routes
var apiRoutes = require('./routes/api');
var tripRoutes = require('./routes/trip');
var moodRoutes = require('./routes/mood');



app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

//Setting Routes
app.use('/api',apiRoutes);
app.use('/trip',tripRoutes);
app.use('/mood',moodRoutes);

app.listen(port , function () {
	console.log('Site is active on localhost:' + port+'/');
});