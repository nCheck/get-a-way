var mongoose = require('mongoose');

var Trip =require("./trip");

var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
	email : String,
	isActive : Boolean ,
	catalogue :[{type : Schema.Types.ObjectId, ref: 'Trip'}],
});


module.exports=mongoose.model('User',userSchema);