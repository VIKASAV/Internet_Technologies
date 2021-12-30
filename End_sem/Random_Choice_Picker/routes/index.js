var express = require('express');
const randoms = require('../models/random');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

router.get('/1', function(req, res, next) {
  //es.send('respond with a resource');
  randoms.find({}, function(err, rows){
    console.log(rows[0].text)
    const picUrl= rows[0].text;
    res.render('index',{picUrl})
});
});

// express.set('view engine', 'ejs')

// express.post('/start', (req, res) => {
//   const name = req.body.name;

//   // render your play.ejs file which is located in views
//   // /views/play.ejs
//   // second parameter is an object that will be accessible in your view
//   res.render('index', { name });
// });



module.exports = router;



