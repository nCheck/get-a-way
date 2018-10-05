var mongoose = require('mongoose');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip')



module.exports.startPlan = (req , res)=>{
    var lat = req.body.lat,
        lon = req.body.lon,
        duration = req.body.duration,
        date = req.body.date;
    var email = 'n@gmail.com';
    console.log(req.params , req.body , "hello")
    User.findOne( { email : email } , (err , usr) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log(usr , "user")
            Trip.create( {
                loc : [ lat , lon ] ,
                date : date,
                duration: duration,
            } , (err , trip)=>{
                usr.catalogue.push(trip._id)
                if(!err){
                    res.send("Done")
                }
                else{
                    console.log(err)
                    res.send(err)
                }
            } )
        }
    })
}

module.exports.test = (req , res)=>{
    res.send("Working")
}