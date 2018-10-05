import fetch from 'node-fetch';

var lat = 19.0607
var lon = 72.8362

fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+','+lon+'&radius=500&query=mosque&language=en&key=AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw')
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    })
  