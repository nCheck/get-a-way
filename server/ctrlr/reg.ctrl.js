var mongoose = require('mongoose');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip')



module.exports.startPlan = (req , res)=>{
    var lat = req.body.lat,
        lon = req.body.lon,
        duration = req.body.duration,
        date = req.body.date;
    var email = 'n@gmail.com';
    var newDate = Date.now;
    User.findOne( { email : email } , (err , usr) =>{
        if(err){
            console.log(err)
        }
        else{
            Trip.create( {
                loc : [ lat , lon ] ,
                date : newDate,
                duration: duration,
            } , (err , trip)=>{
                usr.catalogue.push(trip._id)
            } )
        }
    })
}

module.exports.test = (req , res)=>{
    res.send("Working")
}