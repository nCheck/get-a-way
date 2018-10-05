var request = require('request');
var mongoose = require('mongoose');
var https = require('https')
var jrequest = require('request-json');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip')




getFoodie = (lon , lat)=>{
    // var lon = req.params.lon , 
    //     lat = req.params.lat
    var url = 'https://developers.zomato.com/api/v2.1/search?count=10&lat='+lat+'&lon='+lon+'&radius=500';
    var pd
    var dataList = []    
    var options = {
    url: url ,
    headers: {
        'user-key' : 'f0cabfc27a00bb0065e7eb6c99c6dcc8'
        }
    };

    return new Promise( function(resolve , reject){
        request.get(
            options,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    //console.log(JSON.stringify(body))
                    parsedData = JSON.stringify(body)
                    pd = JSON.parse(body)
                    pd = pd.restaurants
        
                    //console.log(pd.restaurants[0])
                    
                    for(var i = 0; i < pd.length; i++) {
                        
                        var obj = pd[i];
        
                        dataList.push({
                            name:obj.restaurant.name,
                            address:obj.restaurant.location.address,
                            locality:obj.restaurant.location.locality,
                            lat:obj.restaurant.location.latitude,
                            lon:obj.restaurant.location.longitude,
                            avgCost:obj.restaurant.average_cost_for_two,
                            cuisines:obj.restaurant.cuisines,
                            starRate:obj.restaurant.user_rating.aggregate_rating,
                           wordRate:obj.restaurant.user_rating.rating_text
                        });
                        
                        //console.log(obj.restaurant.name+"  ");
                        
                    }
        
                    resolve(dataList)
        
                }
                else{
                    reject(error)
                }
        
            }
            );        
    } ) 

 
}


module.exports.getMoodData = async (req , res) =>{
    var isFoodie = true
    var email = 'n@gmail.com'
    User.findOne( { email : email }).populate('catalogue').exec( async(err , usr) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            var sTrip = [];
            usr.catalogue.forEach( trip => {
                if( ! trip.isSuggested  ){
                    sTrip.push(trip);
                    return;
                }
            });
            console.log(sTrip)
            var lat = sTrip[0].loc[0] , 
                lon = sTrip[0].loc[1]
            var suggestions = []
            if( isFoodie ){
                let bod = await getFoodie(lat , lon)
                suggestions.push(bod)
            }     
            
            res.send(suggestions)
        }
    })    
}


// getFoodie(19.0607 , 72.8362);