var mongoose = require('mongoose');

var Review = require("./review");

var Schema = mongoose.Schema;



var placeSchema = new mongoose.Schema({
    place_id : String , 
    loc: {
        type: [Number],
        required: true
      } , 
    rating : {
        type : Number , 
        default : 0
    } , 
    review : {
        type : {type : Schema.Types.ObjectId, ref: 'Review'}
    }
});


module.exports=mongoose.model('Place',placeSchema);