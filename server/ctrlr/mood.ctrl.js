var request = require('request');
var mongoose = require('mongoose');
var https = require('https')
var jrequest = require('request-json');
var User = mongoose.model('User'),
    Trip = mongoose.model('Trip')
var sortJsonArray = require('sort-json-array');



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

relgiousData = (url)=>{

    var client = jrequest.createClient(url),
        dataListReligious = []

    return new Promise( function(resolve , reject){

        client.get('', function(err, ress, body) {
            if(err){
                console.log(err, "error")
                reject(err)
            }
            else{
                var temp = body.results
        
            
                for(var i = 0; i < temp.length; i++) 
                {        
                    var obj = temp[i];
                    dataListReligious.push({
                        name:obj.name,
                        address:obj.formatted_address,
                        lat:obj.geometry.location.lat,
                        lan:obj.geometry.location.lng,
                        icon:obj.icon,
                        place_id:obj.place_id,
                        plus_comp_code:obj.plus_code.compound_code,
                        plus_global_code:obj.plus_code.global_code,
                        rate:obj.rating
                    });
        
            
                }
                sortCall = (a,b)=>{ return a.rate - b.rate }
                dataListReligious.sort(sortCall)
                resolve( sortJsonArray(dataListReligious , 'rate' , 'des') )                
            }
          });
    

    })


}

getRelgious = async (lat , lon)=>{

    var urlM = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=mosque&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
    var urlT = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=temple&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
    var urlC = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=church&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'

    var urls = [urlM , urlC , urlT]
    var s = await relgiousData(urlM) ,
        ss = await relgiousData(urlT) ,
        sss = await relgiousData(urlC)
    var ans = [...s , ...ss , ...sss] 
    return ans

} 

getPubs = (lat , lon)=>{
    var urlTour = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=1000&query=Pubs&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'

    var client = jrequest.createClient(urlTour);
    var dataListPubs = []

    return new Promise( function(resolve , reject){
        client.get('', function(err, ress, body) 
        {
            if(err){
                reject(err)
            }
            else{
                var temp = body.results;
            
        
                for(var i = 0; i < temp.length; i++) 
                {        
                    var obj = temp[i];
                    dataListPubs.push({
                        name:obj.name,
                        address:obj.formatted_address,
                        lat:obj.geometry.location.lat,
                        lan:obj.geometry.location.lng,
                        icon:obj.icon,
                        place_id:obj.place_id,
                        comp_code:obj.plus_code.compound_code,
                        global_code:obj.plus_code.global_code,
                        rate:obj.rating
                    });
            
                    
                }
                resolve(dataListPubs)                
            }

        });
    })    
    
}








module.exports.getMoodData = async (req , res) =>{
    const { date , time , mood  } = req.body;
    const { year , month , day } = date
    const { isFoodie ,  isReligious , isParty , isEntertainment , isSightseeing } = mood
    console.log(isFoodie ,  isReligious , isParty , isAdventure , isEntertainment , isSightseeing)
    var email = 'n@gmail.com',
        isMood = true
    if( !isFoodie &&  !isReligious && !isParty && !isEntertainment && !isSightseeing ){
        isMood = false
    }
    User.findOne( { email : email }).populate('catalogue').exec( async(err , usr) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            var sTrip = [];
            usr.catalogue.forEach( (trip , i) => {
                if( ! trip.isSuggested  ){
                    usr.catalogue[i].isMood = isMood
                    usr.catalogue[i].mood.concat([ isFoodie ,  isReligious , isParty , isEntertainment , isSightseeing ])
                    usr.save();
                    sTrip.push(trip);
                    return;
                }
            });
            console.log(sTrip)
            var lat = sTrip[0].loc[0] , 
                lon = sTrip[0].loc[1]
            var suggestions = {}
            if(isMood){
                usr.save();
                if( true ){
                    let bod = await getFoodie(lat , lon)
                    suggestions.Foodie = sortJsonArray(bod , 'starRate' , 'des')
                }
                if( true ){
                    let bod = await getRelgious(lat , lon)
                    suggestions.Religious = sortJsonArray(bod , 'rate' , 'des')
                }
                if( true ){
                    let bod = await getPubs(lat , lon)
                    suggestions.Party = sortJsonArray(bod , 'rate' , 'des')                
                }                    
            }
            else{

            }
            
            res.send(suggestions)
        }
    })    
}


// getFoodie(19.0607 , 72.8362);


module.exports.dummyPlaces = async(req , res) =>{
    var lat = 19.0607,
        lon = 72.8362
    var suggestions = {}
    if( true ){
        let bod = await getFoodie(lat , lon)
        suggestions.Foodie = sortJsonArray(bod , 'starRate' , 'des')
    }
    if( true ){
        let bod = await getRelgious(lat , lon)
        suggestions.Religious = sortJsonArray(bod , 'rate' , 'des')
    }
    if( true ){
        let bod = await getPubs(lat , lon)
        suggestions.Party = sortJsonArray(bod , 'rate' , 'des')                
    } 
    res.send(suggestions)    
}