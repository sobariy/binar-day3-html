var express = require('express')
var router = express.Router();

var article_Controller = require('../controllers/articleControler.js')

router.get('/', article_Controller.index);
router.get('/create', article_Controller.create);
router.get('/detail/:articleId', article_Controller.detail);
router.get('/update/:articleId', article_Controller.update);
router.get('/delete/:articleid', article_Controller.delete);
router.post('/create_article', article_Controller.create_article);


// GET ARTICLE INDEX
// router.get('/', function(req, res, next){
//     res.render('article');
// });

// router.get('/detail', function(req, res, next){
//     res.render('detail');
// });
//router.get('/:category', function(req, res, next){
//    res.send('Ini adalah ' + req.params.category);
//})

// //display list article
// app.post('/sign_up', function(req,res){ 
//     var name = req.body.name; 
//     var email =req.body.email; 
//     var pass = req.body.password; 
//     var phone =req.body.phone; 
  
//     var data = { 
//         "name": name, 
//         "email":email, 
//         "password":pass, 
//         "phone":phone 
//     } 
// db.collection('details').insertOne(data,function(err, collection){ 
//         if (err) throw err; 
//         console.log("Record inserted Successfully"); 
              
//     }); 
          
//     return res.redirect('signup_success.html'); 
// }) 
  
module.exports = router