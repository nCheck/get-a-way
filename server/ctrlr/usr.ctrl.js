var request = require('request');
var mongoose = require('mongoose');
var https = require('https')
var jrequest = require('request-json');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip') , 
    Group = mongoose.model('Group')

//Hello
getElevation = (lat , lon)=>{
    return new Promise( (resolve , reject)=>{
        var url = `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lon}&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw`
        var client = jrequest.createClient(url)
        client.get('', function(err, ress, body) {
            if(err){
                console.log(err, "error")
                reject(err)
            }
            else{
                resolve( body.results )                
            }
          });        
    } )
}

getWeather = (lat , lon) => {
    return new Promise( (resolve , reject)=>{
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0eab9f6fc9a3f1ab2bb6212e5f4fceb0`
        var client = jrequest.createClient(url)

        client.get('', function(err, ress, body) {
            if(err){
                console.log(err, "error")
                reject(err)
            }
            else{
                console.log(body)
                resolve( body.list )                
            }
          });


    } )
}


module.exports.addMember = (req , res)=>{

    var frnd = req.body.member,
        email = 'n@gmail.com'
    
    Group.findOne({ leader : email } , (err , grp)=>{
        if(err)
            res.send(err)
        else{
            grp.member.push(frnd)
            grp.save()
            var trip = grp.trip
            User.findOne( { email:frnd } , (err  , usr)=>{
                if(err){
                    res.send('User Doesnt Exists')
                }
                else{
                    usr.catalogue.push(trip)
                    usr.groups.push(grp._id)
                    usr.save()
                    res.send("Done")
                }
            })
        }
    })
    
}

module.exports.giveWeather = async(req , res)=>{

    var email = 'n@gmail.com' ,weather = []

    User.findOne( { email : email }).populate('catalogue').exec( async(err , usr)=>{
        var trips = usr.catalogue
        var date , lat , lon , duration, ele , elevation
        trips.forEach( async(ele) => {
            if ( !ele.isActive ){
                date = ele.date
                duration = ele.duration
                lat = ele.loc[0]
                lon = ele.loc[1]
                return;
            }
        });
        lat = 31.1048
        lon = 77.1734
        date = new Date(date)
        var startT = date.getTime()/1000 , endT
        endT = startT + duration*3600 
        weather = await getWeather(lat , lon)
        ele = await getElevation(lat , lon)
        ele = ele[0].elevation
        console.log('start ' ,startT , 'endT ' , endT)
        var schd = [] , forcast = [] , alti = []
        weather.forEach( (we)=>{
            if ( we.dt > endT )
            return;
            else if( we.dt > startT ){
                schd.push(we)
                forcast.push(we.weather[0].main)
            }
        } )
        console.log(forcast)
        var suggest = []
        if( forcast.indexOf('Rain') != -1 || forcast.indexOf('Clouds') != -1){
            suggest.push('Umbrella/Raincoat')
        }
        if( forcast.indexOf('Snow') != -1){
            suggest.push('Sweater')
            suggest.push('Jacket')
            suggest.push('Thermal')
        }
        if( ele > 2099 ){
            suggest.push('Medical Permission for High Altitude')
        }
        console.log(suggest)
        res.send(schd)
    } );
 
}





module.exports.makeTrip = (req , res)=>{

    var lat = req.body.lat,
        lon = req.body.lon,
        duration = req.body.duration,
        date = req.body.date;
    var email = 'n@gmail.com';
    console.log(req.params , req.body , "hello")
    // User.findOne( { email : email } , (err , usr) =>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log(usr , "user")
    //         Trip.create( {
    //             loc : [ lat , lon ] ,
    //             date : date,
    //             duration: duration,
    //         } , (err , trip)=>{
    //             usr.catalogue.push(trip._id)
    //             usr.save()
    //             if(!err){
    //                 res.send("Done")
    //             }
    //             else{
    //                 console.log(err)
    //                 res.send(err)
    //             }
    //         } )
    //     }
    // })   
    res.send("Thanks") 
}


module.exports.regUser = (req , res)=>{
    var email = req.body.email
    User.create( {email , email} , (err , usr)=>{
        res.send('Done')
    } )
}

module.exports.getUserTrip = (req , res)=>{
    var email = req.body.email
    User.findOne( { email , email} ).populate('catalogue').exec( (err , usr)=>{
        var trip = null;
        catalogue.forEach( cat=>{
            if(cat.isActive){
                trip = cat
                return;
            }
        } )
        if( trip != null ){
            res.send({data:trip , status : true})
        }
        else{
            res.send({data:[] , status : false})
        }
    } )
}

module.exports.setPlaces = (req , res)=>{
    var places = []
    var id = req.body.id

    Trip.findById(id , (err , trip)=>{
        places.forEach( p=>{
            trip.places.push(p)
        } )
        trip.save()
    })
}
