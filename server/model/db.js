var mongoose = require('mongoose'),
	realDB	 = 'mongodb://sanes4:sanes4ever@ds123753.mlab.com:23753/get-a-way';

mongoose.connect(realDB , { useNewUrlParser: true });
mongoose.connection.on('connected' , () =>{
	console.log('connected')
});

require('./review');
require('./place');
require('./trip');
require('./user');
require('./group')

var User = mongoose.model('User')
