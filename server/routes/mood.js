var express  = require('express');
var router   = express.Router();
var parser   = require('body-parser');
var MOODS = require('../mood.data')
const dir    = __dirname;






router.route('/')
    .get((req  ,res)=>{
        res.send(MOODS)
    })










module.exports = router;