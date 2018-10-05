var express  = require('express');
var router   = express.Router();
var parser   = require('body-parser');
const dir    = __dirname;

var regCtrl = require('../ctrlr/reg.ctrl')





router.route('/start')
    .get(regCtrl.test)
    .post(regCtrl.startPlan)








module.exports = router;