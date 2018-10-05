var mongoose = require('mongoose');

var Catalogue =require("./Catalogue");

var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
	email : String,
	isActive : Boolean ,
	catalogue :[{type : Schema.Types.ObjectId, ref: 'Catalogue'}],
});


module.exports=mongoose.model('User',userSchema);