var express  = require('express');
var router   = express.Router();
var parser   = require('body-parser');
const dir    = __dirname;
var MOODS = require('../mood.data')
var regCtrl = require('../ctrlr/reg.ctrl'),
    moodCtrl = require('../ctrlr/mood.ctrl'),
    usrCtrl = require('../ctrlr/usr.ctrl')




//Dead
router.route('/start')
    .get(regCtrl.test)
    .post(regCtrl.startPlan)

router.route('/mood')
    .get( (req , res)=>{
        res.send(MOODS)
    } )

router.route('/setMood')
    .post(moodCtrl.getMoodData)
    .get(moodCtrl.getMoodData)

router.route('/places')
    .get(moodCtrl.dummyPlaces)

router.route('/addMember')
    .post(usrCtrl.addMember)

router.route('/getWeather')
    .get(usrCtrl.giveWeather)

router.route('/makeTrip')
    .post(usrCtrl.makeTrip)


router.route('/getCO')
    .get( moodCtrl.sendCO )

module.exports = router;