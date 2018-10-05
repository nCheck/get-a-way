var mongoose = require('mongoose');

var Schema = mongoose.Schema;
console.log("i m here");


var tripSchema = new mongoose.Schema({
	isAble : {
        type : Boolean,
        default : false
    } ,
    isActive :{
        type : Boolean , 
        default : false
    } ,  
    loc: {
        type: [Number],
        required: true
      },
    date : {
        type : Date,
        default : Date.now
    } , 
    duration : Number ,
    isMood : Boolean ,  
    mood : {
        type : [String]
    } , 
    
    visited :[{type : Schema.Types.ObjectId, ref: 'Place'}]


});


module.exports=mongoose.model('Trip',tripSchema);