// var express = require('express');
// var cors = require('cors');
// var request = require('request');
// var app = express();

// app.use(express.bodyParser());

// app.use(cors());

// app.get('<Your Route>', function(req, res){
//   request('', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       var info = JSON.parse(body)
//       // do more stuff
//       res.send(info);
//     }
//   })
// });
// app.listen(3000);
// console.log("The server is now running on port 3000.");


const https = require('https');
var url = 'https://maps.googleapis.com/maps/api/place/',
    param = 'details/json?placeid=ChIJsWNPGBG05zsRbvTUhyCi2sQ&fields=name,rating,formatted_phone_number,opening_hours,price_level',
    key = '&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
console.log(url+param+key)
https.get(url+param+key, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
