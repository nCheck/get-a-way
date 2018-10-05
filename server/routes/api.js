var express  = require('express');
var router   = express.Router();
var parser   = require('body-parser');
const dir    = __dirname;

var regCtrl = require('../ctrlr/reg.ctrl'),
    moodCtrl = require('../ctrlr/mood.ctrl')





router.route('/start')
    .get(regCtrl.test)
    .post(regCtrl.startPlan)


router.route('/setMood')
    .post(moodCtrl.getMoodData)

// router.route('/getFoodie')
//     .get(moodCtrl.getFoodie)



module.exports = router;