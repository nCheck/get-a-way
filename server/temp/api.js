//Food function

// var request = require('request');
// var lat = 19.0607
// var lon = 72.8362 
// var pd
// var dataListFood = []

// var url = 'https://developers.zomato.com/api/v2.1/search?count=10&lat='+lat+'&lon='+lon+'&radius=500'

// var options = {
// url: url ,
// headers: {
//     'user-key' : 'f0cabfc27a00bb0065e7eb6c99c6dcc8'
//     }
// };
// request.get(
// options,
// function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         //console.log(JSON.stringify(body))
//         parsedData = JSON.stringify(body)
//         pd = JSON.parse(body)
//         pd = pd.restaurants

//         //console.log(pd.restaurants[0])
        
//         for(var i = 0; i < pd.length; i++) {
            
//             var obj = pd[i];

//             dataList.push({
//                 name:obj.restaurant.name,
//                 address:obj.restaurant.location.address,
//                 locality:obj.restaurant.location.locality,
//                 lat:obj.restaurant.location.latitude,
//                 lon:obj.restaurant.location.longitude,
//                 avgCost:obj.restaurant.average_cost_for_two,
//                 cuisines:obj.restaurant.cuisines,
//                 starRate:obj.restaurant.user_rating.aggregate_rating,
//                wordRate:obj.restaurant.user_rating.rating_text
//             });
            
//             //console.log(obj.restaurant.name+"  ");
            
//         }
//         console.log(dataList);

//     }
//     else{
//         console.log(error)
//     }
// }
// );






//Religious Places - places cosidered(temple,mosque,church)

var lat = 19.0607
var lon = 72.8362
var dataListReligious = []

const https = require('https');
var urlM = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=mosque&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
var urlT = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=temple&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
var urlC = 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=church&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'


https.get(urlM, (res) => {


  res.on('data', (d) => {
    // process.stdout.write(d);

    console.log(d)

  });

}).on('error', (e) => {
  console.error(e);
});

