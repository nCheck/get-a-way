var request = require('request');
var mongoose = require('mongoose');
var https = require('https')
var jrequest = require('request-json');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip')

//Hello
getElevation = (lat , lon)=>{
    return new Promise( (resolve , reject)=>{
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0eab9f6fc9a3f1ab2bb6212e5f4fceb0`
        var client = jrequest.createClient(url)
        console.log('Hllo')        
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
                var temp = body.list
                resolve( temp )                
            }
          });


    } )
}


module.exports.checkGroup = (req , res)=>{
    
}

module.exports.giveWeather = async(req , res)=>{

    var email = 'n@gmail.com' ,weather = []

    User.findOne( { email : email }).populate('catalogue').exec( async(err , usr)=>{
        var trips = usr.catalogue
        var date , lat , lon , duration
        trips.forEach( async(ele) => {
            if ( !ele.isActive ){
                date = ele.date
                duration = ele.duration
                lat = ele.loc[0]
                lon = ele.loc[1]
                return;
            }
        });
        lat = 82.8628
        lon = 135.0000
        date = new Date(date)
        var startT = date.getTime()/1000 , endT
        endT = startT + duration*3600 
        weather = await getWeather(lat , lon)
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
        console.log(suggest)
        res.send(schd)
    } );
 
}