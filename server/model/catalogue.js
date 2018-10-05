var mongoose = require('mongoose');

var Trip =require("./trip");

var Schema = mongoose.Schema;



var catSchema = new mongoose.Schema({
	trip : [{type : Schema.Types.ObjectId, ref: 'Trip'}]
});


module.exports=mongoose.model('Catalogue',catSchema);