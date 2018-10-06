var mongoose = require('mongoose');

var Schema = mongoose.Schema;
console.log("i m here");


var reviewSchema = new mongoose.Schema({
    text : String , 
    upVote : Number , 
    downVote : Number 
});


module.exports=mongoose.model('Review',reviewSchema);