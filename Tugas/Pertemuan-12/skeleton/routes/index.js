var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

//var article_controller = require('../controllers/articleControler');
var application_controller = require('../controllers/applicationControler');

router.get('/', application_controller.home);
router.get('/about', application_controller.about);
router.get('/contact', application_controller.contact);

module.exports = router;
