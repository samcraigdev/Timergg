var express = require('express');
var router = express.Router();

/* GET legal */
router.get('/', function (req, res, next) {
    res.render('developers', {

        title: 'TIMER.GG',

    });
});

module.exports = router;
/**
 * Created by Master on 2/6/2016.
 */
