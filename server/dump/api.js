// const googleMapsClient = require('@google/maps').createClient({
//     key: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
//   });

// googleMapsClient.geocode({
// address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
// if (!err) {
//     console.log(response.json.results[0].geometry);
// }
// });

// const https = require('https');
// var url = 'https://maps.googleapis.com/maps/api/place/',
//     param = 'details/json?placeid=ChIJsWNPGBG05zsRbvTUhyCi2sQ&fields=name,rating,formatted_phone_number,opening_hours,price_level',
//     key = '&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
// console.log(url+param+key)
// https.get(url+param+key, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });


var place_id = 'ChIJsWNPGBG05zsRbvTUhyCi2sQ',
    key = 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'

const busy_hours = require('busy-hours');
 
busy_hours(place_id, key).then(data => {
    data.week.forEach(ele => {
        console.log(ele.hours)
    }); 
 });