var mongoose = require('mongoose');

var Trip = require("./trip");
var User = require("./user");
var Schema = mongoose.Schema;



var groupSchema = new mongoose.Schema({
    trip_id : {
        type : Schema.Types.ObjectId , ref : 'Trip'
    } ,
    member : [{ type : Schema.Types.ObjectId , ref : 'User' }]
});


module.exports = mongoose.model('Group',groupSchema);