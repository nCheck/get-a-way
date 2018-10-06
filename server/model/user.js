var mongoose = require('mongoose');

var Trip = require("./trip");
var Group = require('./group') 
var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
	email : String,
	isActive : Boolean ,
	catalogue :[{type : Schema.Types.ObjectId, ref: 'Trip'}],
	groups : [{type : Schema.Types.ObjectId, ref: 'Group'}]
});


module.exports=mongoose.model('User',userSchema);